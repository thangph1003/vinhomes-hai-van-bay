'use client'

import Image from 'next/image';

export default function VinhomesProject() {
   
  return (
    <section className="relative w-full bg-[#F6E9D5] overflow-hidden flex flex-col items-center">

      <div className="absolute max-w-[1007px] top-0 text-center z-0 select-none pointer-events-none">
        <span className="md:text-[200px] text-[150px] font-crimson-text font-normal text-[#F0E0C680] tracking-normal md:leading-[260px] leading-[195px]">
          VINHOMES
        </span>
      </div>

      <div className=" z-10 md:pt-[73px] pt-[42px] flex flex-col justify-center items-center">
        <div className="flex flex-col gap-[5px] pr-[58px] pl-[49px] sm:px-0 max-w-[653px] items-center">
         <Image src="/images/logo-cropped.png" alt='logo' width="62" height="57" className='md:w-[62px] md:h-[57px] w-[33px] h-[30px]'></Image>

          <h2 className="font-crimson-text w-full text-[#162B75] md:text-[44px] text-[32px] font-bold md:leading-[57px] leading-[42px] tracking-normal text-center">
            DỰ ÁN VINHOMES HẢI VÂN BAY
          </h2>
        </div>

        <p className="text-[#000000] max-w-[808px] leading-[24px] text-[16px] text-center font-normal font-montserrat md:mt-[25px] lg:px-0 mt-[14px] pr-[31px] pl-[34px]">
                Là dấu ấn tiếp theo trong hệ sinh thái bất động sản cao cấp của Vingroup, 
                Vinhomes Hải Vân Bay mang theo triết lý phát triển sống xanh, sống tinh tuyển và sống kết nối.
        </p>
      
        <div  className='max-w-[1151px] lg:mt-[30px] mt-[26px] px-[32px] xl:px-0 lg:mb-[74px] mb-[37px] flex lg:flex-row flex-col '>
          <div className='flex flex-col lg:w-[26.9%] w-auto lg:h-auto h-[69.2%] lg:px-[30px] lg:py-[40px] p-[33px] bg-[#FFFFFF] gap-[10px]'>
            <h3 className='font-crimson-text font-bold lg:text-[28px] text-[24px] lg:leading-[36px] leading-[31px] text-[#DCA447] tracking-normal'>LƯNG TỰA NÚI MẶT HƯỚNG BIỂN</h3>
            <p className='font-montserrat font-normal text-[16px] leading-[24px] tracking-normal'> Dự án hội tụ trọn vẹn hệ giá trị sống toàn diện: tiện ích đỉnh cao, dịch vụ chuyên biệt, cộng đồng chọn lọc, và trên hết là một phong cách sống 
                  “gắn kết với thiên nhiên, đậm chất tinh hoa”. Với tầm nhìn hướng về phát triển bền vững và hội nhập quốc tế, dự án được kỳ vọng sẽ trở thành biểu tượng mới của miền Trung
                  - điểm đến của cư dân tinh hoa, nhà đầu tư và du khách thế giới.</p>
          </div>

          <div className="lg:w-[73.1%] w-auto lg:h-auto h-[30.8%]">
            <div className="w-full h-full overflow-hidden lg:border-b-0 lg:border-r-13 border-b-13 border-[#DCA447]">
              <Image src="/images/vinhomes-project.webp" alt="Vinhomes Project" width={1200} height={720} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}