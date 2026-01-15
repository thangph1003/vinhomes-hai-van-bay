import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

type ProjectZoningProps = {
  imageSrc?: string
  title?: string
  subtitle?: string
}

export default function ProjectZoning({
  imageSrc = '/images/img-footer.webp',
  title = 'Bảng giá VINHOMES HẢI VÂN BAY T01/2026',
  subtitle = 'Các tài liệu khách hàng nhận được gồm: Bảng giá đợt 1 ưu đãi, Thiết kế mặt bằng và chi tiết căn hộ, Chính sách bán hàng và Tiến độ thanh toán',
}: ProjectZoningProps) {
  return (
    <>
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src={imageSrc} alt={title} fill className="object-cover" priority={false} />
      </div>
      <div className="flex flex-col gap-5 max-w-[461px] mx-auto p-10 relative z-10 bg-[#162B75] my-[125px]">
       <div className="flex flex-col gap-2.5 text-center"> <h3 className="text-[22px] leading-[30px] text-[#DCA447] font-bold font-crimson-text">{title}</h3>
       <p className="text-sm leading-6 text-white font-normal font-montserrat">{subtitle}</p></div>
        <ContactForm gapClass='gap-[15px]' ptClass='pt-[5px]' />
      </div>
    </section>
    <section className="relative">
      <div className="w-full">
        <Image
          src="/images/project-subdivision.webp"
          alt={`${title} background`}
          width={1920}
          height={739}
          className="w-full h-auto object-cover"
          priority={false}
        />
      </div>
    </section>
    </>
  )
}


