import Image from 'next/image'

type BannerProps = {
  title?: string
  subtitle?: string
  className?: string
}

export default function Banner({
  title = 'VINHOMES HẢI VÂN BAY',
  subtitle = 'Thiên hạ đệ nhất hùng quan',
  className = '',
}: BannerProps) {
  return (
    <section
      className={`relative w-full overflow-hidden h-[640px] ${className}`}
      aria-label="Hero banner"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/banner.webp"
          alt="Vinhomes Hải Vân Bay banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute flex justify-center z-20 bottom-0 w-full pt-[102px] pb-[26px] bg-[linear-gradient(180deg,rgba(22,43,117,0)_0%,#162B75_100%)] bg-blend-multiply">
        <div className="text-center">
          <h1 className="text-[44px] leading-[57px] font-crimson-text font-bold text-white">
            {title}
          </h1>
          <p className="text-white text-[22px] leading-[32px] font-normal">{subtitle}</p>
        </div>
      </div>
    </section>
  )
}


