'use client'

import Image from 'next/image';

export default function VinhomesProject() {
   
  return (
    <section className="relative w-full bg-[#F6E9D5] overflow-hidden flex flex-col items-center">

      <div className="absolute max-w-[1007px] top-0 text-center z-0 select-none pointer-events-none">
        <h2 className="text-[200px] font-crimson-text font-normal text-[#F0E0C680] tracking-normal leading-[260px]">
          VINHOMES
        </h2>
      </div>

      <div className=" z-10 pt-[73px] flex flex-col justify-center items-center">
        <div className="flex flex-col gap-[5px] max-w-[653px] items-center">
         <Image src="/images/logo-cropped.png" alt='logo' width="62" height="57" className='w-[62px] h-[57px]'></Image>

          <h3 className="font-crimson-text w-full text-[#162B75] text-[44px] font-bold leading-[57px] tracking-normal">
            DỰ ÁN VINHOMES HẢI VÂN BAY
          </h3>
        </div>

        <p className="text-[#000000] max-w-[808px] leading-[24px] text-[16px] text-center font-normal font-montserrat mt-[25px]">
                Là dấu ấn tiếp theo trong hệ sinh thái bất động sản cao cấp của Vingroup, 
                Vinhomes Hải Vân Bay mang theo triết lý phát triển sống xanh, sống tinh tuyển và sống kết nối.
        </p>
      
        <div  className='max-w-[1151px] mt-[30px] mb-[74px] flex '>
          <div className='flex flex-col w-[26.9%] px-[30px] py-[40px] bg-[#FFFFFF] gap-[10px]'>
            <h4 className='font-crimson-text font-bold text-[28px] leading-[36px] text-[#DCA447] tracking-normal'>LƯNG TỰA NÚI MẶT HƯỚNG BIỂN</h4>
            <p className='font-montserrat font-normal text-[16px] leading-[24px] tracking-normal'> Dự án hội tụ trọn vẹn hệ giá trị sống toàn diện: tiện ích đỉnh cao, dịch vụ chuyên biệt, cộng đồng chọn lọc, và trên hết là một phong cách sống 
                  “gắn kết với thiên nhiên, đậm chất tinh hoa”. Với tầm nhìn hướng về phát triển bền vững và hội nhập quốc tế, dự án được kỳ vọng sẽ trở thành biểu tượng mới của miền Trung
                  - điểm đến của cư dân tinh hoa, nhà đầu tư và du khách thế giới.</p>
          </div>

          <div className="w-[73.1%]">
            <div className="w-full h-full overflow-hidden border-r-13 border-[#DCA447]">
              <Image src="/images/vinhomes-project.webp" alt="Vinhomes Project" width={1200} height={720} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}