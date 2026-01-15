import Image from "next/image";

export default function ProjectOverview() {
  return (
    <section className="bg-[#F6E9D5]">
      <div className="max-w-[1152px] mx-auto relative pt-[73px] pb-[52px]">
        <h2 className="absolute inset-x-0 top-8 z-0 text-center lg:text-[200px] md:text-[150px] text-[64px] leading-[200px] text-[#F0E0C680] font-normal font-crimson-text select-none pointer-events-none">
          LÀNG VÂN
        </h2>

        <div className="relative z-10 flex flex-col items-center gap-[5px]">
          <Image src="/images/logo.png" alt="Project overview" width={62} height={57} className="w-[62px] h-[57px] object-contain" />
          <h3 className="text-[44px] leading-[57px] font-bold font-crimson-text text-[#162B75]">TỔNG QUAN DỰ ÁN</h3>
        </div>

        <div className="relative z-10 mt-11 bg-white">
          <div className="px-[30px] pt-[30px] pb-[150px]">
            <div className="flex flex-col gap-[14px]">
              <div className="flex items-start gap-6 pb-[14px] border-b border-[#F0E0C6]">
                <h4 className="w-[21.8%] text-base leading-6 font-bold font-montserrat text-[#162B75]">Tên dự án</h4>
                <p className="flex-1 text-base leading-6 text-black font-normal font-montserrat">Vinhomes Hải Vân Bay – Đà Nẵng (Vinhomes Heaven Bay)</p>
              </div>

              <div className="flex items-start gap-6 pb-[14px] border-b border-[#F0E0C6]">
                <h4 className="w-[21.4%] text-base leading-6 font-bold font-montserrat text-[#162B75]">Vị trí dự án</h4>
                <p className="flex-1 text-base leading-6 text-black font-normal font-montserrat">Làng Vân, Phường Hòa Hiệp Bắc, Thành phố. Đà Nẵng</p>
              </div>

              <div className="flex items-start gap-6 pb-[14px] border-b border-[#F0E0C6]">
                <h4 className="w-[21.4%] text-base leading-6 font-bold font-montserrat text-[#162B75]">Chủ đầu tư</h4>
                <p className="flex-1 text-base leading-6 text-black font-normal font-montserrat">Tập đoàn Vingroup</p>
              </div>

              <div className="flex items-start gap-6 pb-[14px] border-b border-[#F0E0C6]">
                <h4 className="w-[21.4%] text-base leading-6 font-bold font-montserrat text-[#162B75]">Tổng diện tích dự án</h4>
                <p className="flex-1 text-base leading-6 text-black font-normal font-montserrat">512ha</p>
              </div>

              <div className="flex items-start gap-6 pb-[14px] border-b border-[#F0E0C6]">
                <h4 className="w-[21.4%] text-base leading-6 font-bold font-montserrat text-[#162B75]">Vốn đầu tư</h4>
                <p className="flex-1 text-base leading-6 text-black font-normal font-montserrat">44.000 tỷ đồng</p>
              </div>

              <div className="flex items-start gap-6 pb-[14px] border-b border-[#F0E0C6]">
                <h4 className="w-[21.4%] text-base leading-6 font-bold font-montserrat text-[#162B75]">Các sản phẩm chính</h4>
                <p className="flex-1 text-base leading-6 text-black font-normal font-montserrat">Căn hộ, khách sạn, shophouse, biệt thự đơn lập & song lập</p>
              </div>

              <div className="flex items-start gap-6 pb-[14px] border-b border-[#F0E0C6]">
                <h4 className="w-[21.4%] text-base leading-6 font-bold font-montserrat text-[#162B75]">Tổng số lượng sản phẩm</h4>
                <p className="flex-1 text-base leading-6 text-black font-normal font-montserrat">~6.169 sản phẩm (cao tầng - 241 căn và thấp tầng - 5.928 căn)</p>
              </div>

              <div className="flex items-start gap-6 pb-[14px]">
                <h4 className="w-[21.4%] text-base leading-6 font-bold font-montserrat text-[#162B75]">Sở hữu</h4>
                <p className="flex-1 text-base leading-6 text-black font-normal font-montserrat">Sở hữu lâu dài với khách Việt Nam (92% là Sổ Đỏ Vĩnh Viễn), 50 năm với khách hàng người nước ngoài.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1152px] mx-auto flex gap-6 -mt-[114.5px] z-20 relative px-[30px]">
          <div className="w-1/3 overflow-hidden">
            <Image src="/images/project-overview-02.webp" alt="thumb 1" width={380} height={229} className="w-full h-[229px] object-cover hover:scale-105 transition-all duration-300" />
          </div>
          <div className="w-1/3 overflow-hidden">
            <Image src="/images/project-overview-01.webp" alt="thumb 2" width={380} height={229} className="w-full h-[229px] object-cover hover:scale-105 transition-all duration-300" />
          </div>
          <div className="w-1/3 overflow-hidden">
            <Image src="/images/project-overview-03.webp" alt="thumb 3" width={380} height={229} className="w-full h-[229px] object-cover hover:scale-105 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}