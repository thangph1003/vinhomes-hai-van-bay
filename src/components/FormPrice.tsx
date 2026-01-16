import ContactForm from './ContactForm'

export default function FormPrice() {
  return (
    <>
    <section className="hidden lg:block bg-gradient-to-b from-[#162B75] to-[#18369D] py-[50px]">
      <div className="max-w-[1152px] mx-auto">
        <div className="flex flex-col gap-5">
         <div className="flex flex-col gap-2.5">
         <h2 className="text-[28px] leading-[30px] font-crimson-text text-[#DCA447] font-bold text-center">
            Bảng giá VINHOMES HẢI VÂN BAY T01/2026
          </h2>
          <p className="text-base leading-6 text-white font-normal font-montserrat text-center">
            Các tài liệu khách hàng nhận được gồm: Bảng giá đợt 1 ưu đãi, Thiết kế mặt bằng và chi tiết căn hộ, Chính sách bán hàng và Tiến độ thanh toán
          </p>
         </div>

          <div className="hero-inline">
            <ContactForm submitLabel="Xem thêm" formClass="grid grid-cols-4 gap-6" gapClass="gap-0" ptClass="pt-0" />
          </div>
        </div>
      </div>
    </section>
    <section className='bg-gradient-to-b from-[#162B75] to-[#18369D]'>
    <div className="lg:hidden flex flex-col gap-5 md:max-w-[461px] max-w-full md:p-10 p-5 relative z-10 md:mx-auto">
       <div className="flex flex-col gap-2.5 text-center"> <h3 className="text-[22px] leading-[30px] text-[#DCA447] font-bold font-crimson-text">Bảng giá VINHOMES HẢI VÂN BAY T01/2026</h3>
       <p className="text-sm leading-6 text-white font-normal font-montserrat">Các tài liệu khách hàng nhận được gồm: Bảng giá đợt 1 ưu đãi, Thiết kế mặt bằng và chi tiết căn hộ, Chính sách bán hàng và Tiến độ thanh toán</p></div>
        <ContactForm gapClass='gap-[15px]' ptClass='pt-[5px]' />
      </div>
    </section>
    </>
  )
}

