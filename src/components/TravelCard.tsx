 'use client'

import { useEffect, useRef, useState } from 'react'
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

  const containerRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  useEffect(() => {
    const root = containerRef.current
    if (!isMobile || !root) {
      // ensure desktop uses default active (no JS active)
      requestAnimationFrame(() => setActiveIndex(0))
      return
    }

    if (root.scrollLeft !== 0) root.scrollLeft = 0
    requestAnimationFrame(() => setActiveIndex(0))

    let rafId: number | null = null
    const onScroll = () => {
      if (!root) return
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const rootRect = root.getBoundingClientRect()
        const rootCenter = (rootRect.left + rootRect.right) / 2
        let bestIdx = 0
        let bestDist = Infinity
        Array.from(root.children).forEach((c, i) => {
          const el = c as HTMLElement
          const r = el.getBoundingClientRect()
          const center = (r.left + r.right) / 2
          const dist = Math.abs(center - rootCenter)
          if (dist < bestDist) {
            bestDist = dist
            bestIdx = i
          }
        })
        setActiveIndex(bestIdx)
      })
    }

    root.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      root.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [isMobile])

  return (
    <>
      {/* TOP: Map + Right text */}
      <section id="vi-tri-du-an" className="relative bg-[url('/images/independent-position.webp')] bg-cover bg-left-top md:h-[742px] h-[239px] z-[2]">
        <div className="max-w-[1152px] mx-auto">
          <div className="md:w-[411px] flex flex-col md:justify-self-end absolute md:bottom-[135px] md:text-end z-1 bg-white p-5 md:bg-transparent md:p-0 mx-[22px] top-[207px]">
            <h2 className="md:text-[44px] text-[32px] md:leading-[57px] leading-[42px] text-[#162B75] font-bold font-crimson-text">VỊ TRÍ ĐỘC BẢN</h2>
            <h2 className="md:text-[44px] text-[32px] md:leading-[57px] leading-[42px] text-[#162B75] font-bold font-crimson-text">HIẾM CÓ - KHÓ TÌM</h2>
            <p className="text-base leading-6 font-normal font-montserrat text-black pt-2.5">Vinhomes Hải Vân Bay không chỉ nổi bật về giá trị phong thủy mà còn sở hữu khả năng kết nối vùng linh hoạt, đồng bộ với các trục giao thông chiến lược đang được quy hoạch và nâng cấp mạnh mẽ. Từ Vinhomes Làng Vân, cư dân có thể dễ dàng di chuyển đến trung tâm thành phố Đà Nẵng thông qua tuyến ven biển Nguyễn Tất Thành, hay sân bay quốc tế, Bà Nà Hills,...</p>
          </div>
        </div>
      </section>

      {/* MIDDLE: Cards */}
      <div className="w-full bg-white">
        <div className="max-w-[1152px] mx-auto md:-mt-[107.5px] mt-[384px] overflow-hidden lg:px-[32.5px] xl:px-0 relative z-[3]">
          <div ref={containerRef} className="flex lg:grid lg:grid-cols-4 lg:gap-6 gap-4 overflow-x-auto lg:overflow-visible hide-scrollbar snap-x snap-mandatory ml-[33px] lg:ml-0 z-10" style={{ WebkitOverflowScrolling: "touch" }}>
          {cards.map((card, idx) => {
            const fromLeft = idx < 2
            const aos = fromLeft ? 'fade-right' : 'fade-left'
            return (
            <div
                key={card.title}
                data-index={idx}
                {...(!isMobile && { 'data-aos': aos })}
                className={`${isMobile && activeIndex === idx ? 'bg-[#DCA447]' : 'bg-[#162B75] hover:bg-[#DCA447] transition-all duration-500 cursor-pointer'} transition-all duration-300 text-white pt-[34px] pb-6 px-[29px] flex flex-col gap-[15px] from-1440 flex-none w-[77%] md:w-auto snap-start`}
              >
                <h3 className="text-[28px] leading-[36px] font-bold font-crimson-text text-center">{card.title}</h3>
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
      </div>

      {/* BOTTOM: Left text + Right image */}
      <div className="w-full bg-white">
        <section className="max-w-[1152px] mx-auto lg:px-[32.5px] xl:px-0 lg::pt-[37px] lg:pb-[98px] px-[33px] pt-[37px] pb-[32px] flex flex-col gap-[37px]">
        <div className="flex lg:flex-row flex-col gap-6">
            <div className="lg:w-1/2 w-full flex flex-col gap-[11px]">
                <h2 className="md:text-[28px] text-[26px] md:leading-[36px] leading-[34px] font-bold font-crimson-text text-[#DCA447]">ĐÓN SÓNG HẠ TẦNG CHIẾN LƯỢC</h2>
                <p className="text-base leading-6 font-normal font-montserrat text-black">Vinhomes Hải Vân Bay nằm gần cảng biển quốc tế Liên Chiểu, khu thượng mại tự do và khu công nghệ cao Hoà Khành, tạo điều kiện cho việc phát triển thương mại, dịch vụ và du lịch trong tương lai.</p>
            </div>
            <div className="lg:w-1/2 w-full flex flex-col gap-[3px]">
                <h2 className="md:text-[28px] text-[26px] md:leading-[36px] leading-[32px] font-bold font-crimson-text text-[#DCA447]">LIÊN KẾT VÙNG DU LỊCH ĐẲNG CẤP</h2>
                <p className="text-base leading-6 font-normal font-montserrat text-black">Nhờ vị trí chiến lược giữa Huế – Đà Nẵng – Hội An, Vinhomes Làng Vân trở thành trung tâm kết nối du lịch miền Trung. Nhờ đó, Vinhomes Hải Vân Bay không chỉ là nơi an cư mà còn là điểm đến nghỉ dưỡng quốc tế, góp phần nâng tầm vị thế của thành phố Đà Nẵng trên bản đồ du lịch châu Á.</p>
            </div>
        </div>
        <div className="flex lg:flex-row flex-col-reverse lg:border-b-0 border-b-[13px] border-[#DCA447]">
          <div className="lg:w-[26.9%] w-full bg-[#f3e9d8] px-[30px] py-10 flex flex-col gap-2.5">
            <h3 className="text-[28px] leading-[38px] font-bold font-crimson-text text-[#162B75]">VỊ TRÍ PHONG THỦY ĐẮC ĐỊA</h3>
            <div className="flex flex-col gap-6">
            <p className="text-base leading-6 font-normal font-montserrat text-black">Tọa lạc dưới chân đèo Hải Vân – ranh giới tự nhiên giữa Đà Nẵng và Thừa Thiên Huế, Vinhomes Hải Vân Bay sở hữu thế đất phong thủy hiếm có: lưng tựa núi, mặt hướng biển, được xem là thế đất cát địa bậc nhất theo quan niệm Á Đông.</p>
            <p className="text-base leading-6 font-normal font-montserrat text-black">Dãy Hải Vân làm bình phong tự nhiên phía sau, vịnh Nam Chơn mở rộng phía trước, kiến tạo một tổng thể hài hòa âm dương – ngũ hành, nơi hội tụ sinh khí, tài lộc và giá trị sống trường tồn.</p>
            </div>
          </div>
          <div className="lg:w-[73.1%] w-full">
            <div className="w-full h-full overflow-hidden lg:border-r-[13px] border-[#DCA447]">
              <Image src="/images/banner-location.webp" alt="Coastal villa" width={1200} height={720} className="w-full lg:h-full h-[225px] object-cover" />
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}