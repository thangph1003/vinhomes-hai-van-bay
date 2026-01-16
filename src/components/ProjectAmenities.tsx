'use client'

import Image from 'next/image';

export default function ProjectAmenities() {
   
    const amenities = [
        { id: 1, title: "Bể bơi vô cực view biển", src: "/images/amenity-1.webp" },
        { id: 2, title: "Vincom Center", src: "/images/amenity-2.webp" },
        { id: 3, title: "Bến du thuyền quốc tế", src: "/images/amenity-3.webp" },
        { id: 4, title: "Sân golf ven biển", src: "/images/amenity-4.webp" },
        { id: 5, title: "Công viên ven biển", src: "/images/amenity-5.webp" },
        { id: 6, title: "Khu vui chơi ngoài trời", src: "/images/amenity-6.webp" },
        { id: 7, title: "Bệnh viện quốc tế", src: "/images/amenity-7.webp" },
        { id: 8, title: "Trường học liên cấp", src: "/images/amenity-8.webp" },
      ];

  return (
    <section id="tien-ich" className="relative w-full bg-[#F6E9D5] overflow-hidden flex flex-col items-center">
    <div className='flex flex-col max-w-[1153px] md:px-[32px] xl:px-0 pl-[33px] pr-[32px] md:mb-[59px] mb-[41px] items-center'>
      <div className="absolute top-0 text-center z-0 select-none pointer-events-none">
        <h2 className="md:text-[200px] text-[150px] font-crimson-text font-normal text-[#F0E0C680] tracking-normal md:leading-[260px] leading-[195px]">
          VINHOMES
        </h2>
      </div>

      <div className=" z-10 md:pt-[73px] pt-[48px] flex flex-col justify-center items-center">
        <div className="flex flex-col gap-[5px] max-w-[653px] items-center">
         <Image src="/images/logo-cropped.png" alt='logo' width="62" height="57" className='md:w-[62px] md:h-[57px] w-[33px] h-[30px]'></Image>

          <h3 className="font-crimson-text md:px-0 px-[20px] w-full text-[#162B75] md:text-[44px] text-[32px] font-bold md:leading-[57px] leading-[42px] tracking-normal text-center">
                MẶT BẰNG TIỆN ÍCH DỰ ÁN
          </h3>
        </div>
      </div>

      <p className="text-[#000000] max-w-[808px] w-full leading-[24px] text-[16px] text-center font-normal font-montserrat md:mt-[25px] mt-[20px] md:mb-[40px] mb-[24px]">
                Được kiến tạo theo mô hình “thành phố nghỉ dưỡng” giữa thiên nhiên nguyên bản, Vinhomes Hải Vân Bay gây ấn tượng với hệ tiện ích nội khu đẳng cấp, 
                đồng thời ghi dấu bởi khả năng kết nối linh hoạt đến chuỗi tiện ích ngoại khu toàn diện.
        </p>
      
        <Image
            src="/images/project-amenities.webp"
            alt="project-amenities.webp"
            width={1536}
            height={864}
            className="w-full h-auto" 
            sizes="100vw"
        />

        <div className='md:my-[30px] my-[20px] w-full flex lg:flex-row flex-col md:gap-[24px] gap-[10px]'>
            <h2 className='lg:w-[23.8%] md:h-auto w-auto h-[27.3%] font-crimson-text font-bold md:text-[28px] text-[26px] leading-[38px] tracking-normal text-[#DCA447]'> SỐNG - NGHỈ DƯỠNG - GIẢI TRÍ ĐỈNH CAO </h2>
            <p className='lg:w-[73.9%] md:h-auto w-auto h-[69%] font-montserrat font-normal text-[16px] leading-[24px] tracking-normal text-[#000000]'> Không dừng lại ở một “thành phố nghỉ dưỡng” mang quy mô quốc tế, Vinhomes Hải Vân Bay 
                còn là không gian sống thượng lưu với hệ tiện ích nội khu được quy hoạch bài bản, đáp ứng trọn vẹn mọi nhu cầu từ an cư, nghỉ dưỡng đến giải trí 
                - giáo dục - chăm sóc sức khỏe.</p>
        </div>

        <div className="w-full mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[24px]">
                {amenities.map((item) => (
                    <div
                    key={item.id}
                    className="group flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                    >

                  <div className="relative w-full h-[180px] overflow-hidden">
                        <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                        />
                    </div>

                    <div className="flex-1 flex items-center justify-center p-[20px] text-center transition-colors duration-300 group-hover:bg-[#DCA447]">
                        <h3 className="text-[#162B75] font-bold text-[16px] leading-[24px] uppercase transition-colors duration-300 group-hover:text-white font-montserrat">
                        {item.title}
                        </h3>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </section>
  );
}