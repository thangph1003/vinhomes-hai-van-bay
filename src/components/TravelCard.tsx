'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

type Card = {
  title: string
  lines: string[]
}

const defaultCards: Card[] = [
  { title: '10 PHÚT', lines: ['Cảng biển quốc tế Liên Chiểu (2km)', 'Ga hàng hóa Kim Liên (2-3km)'] },
  { title: '15 PHÚT', lines: ['Hầm đường bộ Hải Vân I & 2 (6-8km)', 'Trung tâm hành chính Liên Chiểu'] },
  { title: '20 PHÚT', lines: ['Trung tâm Thành phố Đà Nẵng (12km)', 'Sân bay quốc tế Đà Nẵng & Ga Đà Nẵng'] },
  { title: '35 PHÚT', lines: ['Phố cổ Hội An', 'Các điểm du lịch nổi tiếng: Suối Lương, Rạn Nam Ô,...'] },
];

export default function TravelCards({ cards = defaultCards }: { cards?: Card[] }) {
  useEffect(() => {
    AOS.init({ duration: 500, once: true, easing: 'ease-out-cubic' })
  }, [])

  const icons = [
    '/images/iconShip.svg',
    '/images/iconCar.svg',
    '/images/iconDungeon.svg',
    '/images/iconHotel.svg',
    '/images/iconHotel.svg',
    '/images/iconPlane.svg',
    '/images/iconLocation.svg',
    '/images/iconLocation.svg',
  ]

  return (
    <>
      {/* TOP: Map + Right text */}
      <section id="vi-tri-du-an" className="relative bg-[url('/images/independent-position.webp')] bg-cover bg-left-top md:h-[742px] h-[239px]">
        <div className="max-w-[1152px] mx-auto">
          <div className="md:w-[411px] flex flex-col md:justify-self-end absolute md:bottom-[135px] md:text-end z-1 bg-white p-5 md:bg-transparent md:p-0 mx-[22px] top-[207px]">
            <h3 className="md:text-[44px] text-[32px] md:leading-[57px] leading-[42px] text-[#162B75] font-bold font-crimson-text">VỊ TRÍ ĐỘC BẢN</h3>
            <h3 className="md:text-[44px] text-[32px] md:leading-[57px] leading-[42px] text-[#162B75] font-bold font-crimson-text">HIẾM CÓ - KHÓ TÌM</h3>
            <p className="text-base leading-6 font-normal font-montserrat text-black pt-2.5">Vinhomes Hải Vân Bay không chỉ nổi bật về giá trị phong thủy mà còn sở hữu khả năng kết nối vùng linh hoạt, đồng bộ với các trục giao thông chiến lược đang được quy hoạch và nâng cấp mạnh mẽ. Từ Vinhomes Làng Vân, cư dân có thể dễ dàng di chuyển đến trung tâm thành phố Đà Nẵng thông qua tuyến ven biển Nguyễn Tất Thành, hay sân bay quốc tế, Bà Nà Hills,...</p>
          </div>
        </div>
      </section>

      {/* MIDDLE: Cards */}
      <div className="max-w-[1152px] mx-auto md:-mt-[107.5px] mt-[384px] overflow-hidden">
      <div className="flex md:grid md:gap-6 gap-4 overflow-x-auto md:overflow-visible hide-scrollbar snap-x snap-mandatory ml-[33px] md:ml-0" style={{ WebkitOverflowScrolling: "touch" }}>
          {cards.map((card, idx) => {
            const fromLeft = idx < 2
            const aos = fromLeft ? 'fade-right' : 'fade-left'
            return (
            <div
                key={card.title}
                data-aos={aos}
                className="bg-[#162B75] hover:bg-[#DCA447] transition-all duration-300 text-white pt-[34px] pb-6 px-[29px] flex flex-col gap-[15px] from-1440 flex-none w-[77%] md:w-auto snap-start"
              >
                <h4 className="text-[28px] leading-[36px] font-bold font-crimson-text text-center">{card.title}</h4>
                <ul className="flex flex-col gap-2.5">
                  {card.lines.map((line, liIdx) => {
                    const globalIndex = idx * card.lines.length + liIdx
                    const iconSrc = icons[globalIndex]
                    return (
                      <li key={line} className="flex items-center gap-3 text-base leading-6 font-normal font-montserrat">
                        {iconSrc ? (
                          <Image src={iconSrc} alt="" width={22} height={22} className="flex-none" />
                        ) : (
                          <span className="w-3 h-3 bg-white/20 rounded-full" />
                        )}
                        <span className="text-white/90">{line}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      {/* BOTTOM: Left text + Right image */}
      <section id="tien-ich" className="max-w-[1152px] mx-auto md:pt-[37px] md:pb-[98px] px-[33px] md:px-0 pt-[37px] pb-[32px] flex flex-col gap-[37px]">
        <div className="flex md:flex-row flex-col gap-6">
            <div className="md:w-1/2 w-full flex flex-col gap-[11px]">
                <h2 className="md:text-[28px] text-[26px] md:leading-[36px] leading-[34px] font-bold font-crimson-text text-[#DCA447]">ĐÓN SÓNG HẠ TẦNG CHIẾN LƯỢC</h2>
                <p className="text-base leading-6 font-normal font-montserrat text-black">Vinhomes Hải Vân Bay nằm gần cảng biển quốc tế Liên Chiểu, khu thượng mại tự do và khu công nghệ cao Hoà Khành, tạo điều kiện cho việc phát triển thương mại, dịch vụ và du lịch trong tương lai.</p>
            </div>
            <div className="md:w-1/2 w-full flex flex-col gap-[3px]">
                <h2 className="md:text-[28px] text-[26px] md:leading-[36px] leading-[32px] font-bold font-crimson-text text-[#DCA447]">LIÊN KẾT VÙNG DU LỊCH ĐẲNG CẤP</h2>
                <p className="text-base leading-6 font-normal font-montserrat text-black">Nhờ vị trí chiến lược giữa Huế – Đà Nẵng – Hội An, Vinhomes Làng Vân trở thành trung tâm kết nối du lịch miền Trung. Nhờ đó, Vinhomes Hải Vân Bay không chỉ là nơi an cư mà còn là điểm đến nghỉ dưỡng quốc tế, góp phần nâng tầm vị thế của thành phố Đà Nẵng trên bản đồ du lịch châu Á.</p>
            </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse md:border-b-0 border-b-[13px] border-[#DCA447]">
          <div className="md:w-[26.9%] w-full bg-[#f3e9d8] px-[30px] py-10 flex flex-col gap-2.5">
            <h4 className="text-[28px] leading-[38px] font-bold font-crimson-text text-[#162B75]">VỊ TRÍ PHONG THỦY ĐẮC ĐỊA</h4>
            <div className="flex flex-col gap-6">
            <p className="text-base leading-6 font-normal font-montserrat text-black">Tọa lạc dưới chân đèo Hải Vân – ranh giới tự nhiên giữa Đà Nẵng và Thừa Thiên Huế, Vinhomes Hải Vân Bay sở hữu thế đất phong thủy hiếm có: lưng tựa núi, mặt hướng biển, được xem là thế đất cát địa bậc nhất theo quan niệm Á Đông.</p>
            <p className="text-base leading-6 font-normal font-montserrat text-black">Dãy Hải Vân làm bình phong tự nhiên phía sau, vịnh Nam Chơn mở rộng phía trước, kiến tạo một tổng thể hài hòa âm dương – ngũ hành, nơi hội tụ sinh khí, tài lộc và giá trị sống trường tồn.</p>
            </div>
          </div>
          <div className="md:w-[73.1%] w-full">
            <div className="w-full h-full overflow-hidden md:border-r-[13px] border-[#DCA447]">
              <Image src="/images/banner-location.webp" alt="Coastal villa" width={1200} height={720} className="w-full md:h-full h-[225px] object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}