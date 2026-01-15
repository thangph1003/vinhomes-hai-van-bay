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
    <section className="relative w-full bg-[#F5F1E6] overflow-hidden flex flex-col items-center">
    <div className='flex flex-col max-w-[1153px] mb-[59px] items-center'>
      <div className="absolute top-0 text-center z-0 select-none pointer-events-none">
        <h2 className="text-[200px] font-crimson-text font-normal text-[#F0E0C680] tracking-normal leading-[260px]">
          VINHOMES
        </h2>
      </div>

      <div className=" z-10 pt-[73px] flex flex-col justify-center items-center">
        <div className="flex flex-col gap-[5px] max-w-[653px] items-center">
         <Image src="/images/logo-cropped.png" alt='logo' width="62" height="57" className='w-[62px] h-[57px]'></Image>

          <h3 className="font-crimson-text w-full text-[#162B75] text-[44px] font-bold leading-[57px] tracking-normal">
                MẶT BẰNG TIỆN ÍCH DỰ ÁN
          </h3>
        </div>
      </div>

      <p className="text-[#000000] max-w-[808px] leading-[24px] text-[16px] text-center font-normal font-montserrat mt-[25px] mb-[40px]">
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

        <div className='my-[30px] w-full flex gap-[24px]'>
            <h4 className='w-[23.8%] font-crimson-text font-bold text-[28px] leading-[38px] tracking-normal text-[#DCA447]'> SỐNG - NGHỈ DƯỠNG - GIẢI TRÍ ĐỈNH CAO </h4>
            <p className='w-[73.9%] font-montserrat font-normal text-[16px] leading-[24px] tracking-normal text-[#000000]'> Không dừng lại ở một “thành phố nghỉ dưỡng” mang quy mô quốc tế, Vinhomes Hải Vân Bay 
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

                    <div className="relative w-full aspect-270/180 overflow-hidden">
                        <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                        />
                    </div>

                    <div className="flex-1 flex items-center justify-center p-[20px] text-center transition-colors duration-300 group-hover:bg-[#DCA447]">
                        <h5 className="text-[#162B75] font-bold text-[16px] leading-[24px] uppercase transition-colors duration-300 group-hover:text-white font-montserrat">
                        {item.title}
                        </h5>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </section>
  );
}