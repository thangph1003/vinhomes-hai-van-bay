import Image from "next/image";

export default function ProjectOverview() {
  return (
    <section className="bg-[#F6E9D5]">
      <div className="max-w-[1152px] mx-auto relative md:pt-[73px] md:pb-[52px] pt-[59px] pb-[35px]">
        <h2 className="absolute inset-x-0 top-8 z-0 text-center md:text-[200px] text-[150px] leading-[200px] text-[#F0E0C680] font-normal font-crimson-text select-none pointer-events-none">
          LÀNG VÂN
        </h2>

        <div className="relative z-10 flex flex-col items-center gap-[5px]">
          <Image src="/images/logo-cropped.png" alt="Project overview" width={62} height={57} className="md:w-[62px] md:h-[57px] w-[33px] h-[30px] object-contain" />
          <h3 className="md:text-[44px] text-[32px] md:leading-[57px] leading-[42px] font-bold font-crimson-text text-[#162B75]">TỔNG QUAN DỰ ÁN</h3>
        </div>

        <div className="relative z-10 md:mt-11 mt-6 mx-4 md:mx-0 bg-white">
          <div className="md:px-[30px] md:pt-[30px] md:pb-[150px] pt-[30px] pb-[100px] px-5">
            <div className="flex flex-col md:gap-[14px] gap-2.5">
              <div className="flex md:flex-row flex-col items-start md:gap-6 gap-[5px] md:pb-[14px] pb-2.5 border-b border-[#F0E0C6]">
                <h4 className="md:w-[21.8%] w-full text-base leading-6 font-bold font-montserrat text-[#162B75]">Tên dự án</h4>
                <p className="flex-1 text-base leading-6 text-black font-normal font-montserrat">Vinhomes Hải Vân Bay – Đà Nẵng (Vinhomes Heaven Bay)</p>
              </div>

              <div className="flex md:flex-row flex-col items-start md:gap-6 gap-[5px] md:pb-[14px] pb-2.5 border-b border-[#F0E0C6]">
                <h4 className="md:w-[21.4%] w-full text-base leading-6 font-bold font-montserrat text-[#162B75]">Vị trí dự án</h4>
                <p className="flex-1 text-base leading-6 text-black font-normal font-montserrat">Làng Vân, Phường Hòa Hiệp Bắc, Thành phố. Đà Nẵng</p>
              </div>

              <div className="flex md:flex-row flex-col items-start md:gap-6 gap-[5px] md:pb-[14px] pb-2.5 border-b border-[#F0E0C6]">
                <h4 className="md:w-[21.4%] w-full text-base leading-6 font-bold font-montserrat text-[#162B75]">Chủ đầu tư</h4>
                <p className="flex-1 text-base leading-6 text-black font-normal font-montserrat">Tập đoàn Vingroup</p>
              </div>

              <div className="flex md:flex-row flex-col items-start md:gap-6 gap-[5px] md:pb-[14px] pb-2.5 border-b border-[#F0E0C6]">
                <h4 className="md:w-[21.4%] w-full text-base leading-6 font-bold font-montserrat text-[#162B75]">Tổng diện tích dự án</h4>
                <p className="flex-1 text-base leading-6 text-black font-normal font-montserrat">512ha</p>
              </div>

              <div className="flex md:flex-row flex-col items-start md:gap-6 gap-[5px] md:pb-[14px] pb-2.5 border-b border-[#F0E0C6]">
                <h4 className="md:w-[21.4%] w-full text-base leading-6 font-bold font-montserrat text-[#162B75]">Vốn đầu tư</h4>
                <p className="flex-1 text-base leading-6 text-black font-normal font-montserrat">44.000 tỷ đồng</p>
              </div>

              <div className="flex md:flex-row flex-col items-start md:gap-6 gap-[5px] md:pb-[14px] pb-2.5 border-b border-[#F0E0C6]">
                <h4 className="md:w-[21.4%] w-full text-base leading-6 font-bold font-montserrat text-[#162B75]">Các sản phẩm chính</h4>
                <p className="flex-1 text-base leading-6 text-black font-normal font-montserrat">Căn hộ, khách sạn, shophouse, biệt thự đơn lập & song lập</p>
              </div>

              <div className="flex md:flex-row flex-col items-start md:gap-6 gap-[5px] md:pb-[14px] pb-2.5 border-b border-[#F0E0C6]">
                <h4 className="md:w-[21.4%] w-full text-base leading-6 font-bold font-montserrat text-[#162B75]">Tổng số lượng sản phẩm</h4>
                <p className="flex-1 text-base leading-6 text-black font-normal font-montserrat">~6.169 sản phẩm (cao tầng - 241 căn và thấp tầng - 5.928 căn)</p>
              </div>

              <div className="flex md:flex-row flex-col items-start md:gap-6 gap-[5px] md:pb-[14px] pb-2.5 border-b border-[#F0E0C6]">
                <h4 className="md:w-[21.4%] w-full text-base leading-6 font-bold font-montserrat text-[#162B75]">Sở hữu</h4>
                <p className="flex-1 text-base leading-6 text-black font-normal font-montserrat">Sở hữu lâu dài với khách Việt Nam (92% là Sổ Đỏ Vĩnh Viễn), 50 năm với khách hàng người nước ngoài.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1152px] mx-auto flex md:grid gap-6 md:-mt-[114.5px] -mt-[100px] z-20 relative overflow-x-auto md:overflow-visible hide-scrollbar snap-x snap-mandatory" style={{ WebkitOverflowScrolling: "touch" }}>
          <div className="flex-none w-[77%] md:w-1/3 overflow-hidden snap-start">
            <Image src="/images/project-overview-02.webp" alt="thumb 1" width={380} height={229} className="w-full md:h-[229px] h-[159px] object-cover hover:scale-105 transition-all duration-300" />
          </div>
          <div className="flex-none w-[77%] md:w-1/3 overflow-hidden snap-start">
            <Image src="/images/project-overview-01.webp" alt="thumb 2" width={380} height={229} className="w-full md:h-[229px] h-[159px] object-cover hover:scale-105 transition-all duration-300" />
          </div>
          <div className="flex-none w-[77%] md:w-1/3 overflow-hidden snap-start">
            <Image src="/images/project-overview-03.webp" alt="thumb 3" width={380} height={229} className="w-full md:h-[229px] h-[159px] object-cover hover:scale-105 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}