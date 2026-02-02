import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {

  return (
    <footer id="lien-he" className="relative bg-[url('/images/img-footer.webp')] bg-cover bg-center">
      <div className="absolute inset-y-0 left-0 w-1/2 lg:bg-[#F6E9D5E5] z-0" />
      <div className="max-w-[1152px] mx-auto relative z-10">
        <div className="flex lg:p-0 py-[43px] px-[32px]">
          <div className="lg:w-[466px] w-full lg:pt-10 lg:pb-20 p-5 lg:bg-transparent bg-[#F6E9D5E5]">
            <Link href="/" className="flex justify-center">
              <Image src="/images/logo.png" alt="Vinhomes" width={100} height={100} className="w-[174px] h-[78px] object-cover" />
            </Link> 
            <h2 className="lg:text-[42px] lg:leading-[55px] text-[32px] leading-[42px] text-[#162B75] font-semibold font-crimson-text lg:pt-10 lg:pb-5 py-5">Liên hệ với chúng tôi</h2>
            <div className='flex flex-col lg:gap-6 gap-5'>
            <div className="flex flex-col gap-2">
              <p className="text-lg leading-6 font-bold text-[#DCA447] font-montserrat">Điện thoại</p>
              <Link href="tel:0964168134" className="text-lg leading-6 font-normal text-[#162B75] font-montserrat">0964.168.134</Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg leading-6 font-bold text-[#DCA447] font-montserrat">Email</p>
              <Link href="mailTo:info@gmail.com" className="text-lg leading-6 font-normal text-[#162B75] font-montserrat">info@gmail.com</Link>
            </div>

            {/* Contact form component */}
            <div className="flex flex-col gap-2">
              <p className='text-lg leading-6 font-bold text-[#DCA447] font-montserrat'>Đăng ký nhận thông tin</p>
              <ContactForm />
            </div>
            </div>
          </div>

          <div className="flex-1" />
        </div>
      </div>
    </footer>
  )
}
