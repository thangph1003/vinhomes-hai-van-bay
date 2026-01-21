'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import ContactForm from './ContactForm'

type FeatureItem = {
  id: string
  title: string
}

type FormZoneProps = {
  items?: FeatureItem[]
  intervalMs?: number
}

type Product = {
    bullets?: string | string[];
  };

export default function FormZone({
  items: propsItems,
  intervalMs = 5000,
}: FormZoneProps) {
  const defaultItems: FeatureItem[] = [
    { id: 'modern', title: 'MẪU BT HIỆN ĐẠI'},
    { id: 'indochine', title: 'MẪU BT INDOCHINE' },
    { id: 'classic', title: 'MẪU LK CỔ ĐIỂN'},
    { id: 'neoclassical', title: 'MẪU LK TÂN CỔ ĐIỂN'},
  ]

const subdivisionContent: Record<string, string[]> = {
  eu: [
    "Khoảng 2.668 căn liền kề với diện tích phổ biến từ 62 – 65m².",
    "Khoảng 400 căn shophouse diện tích từ 90m², nằm trên các trục đường thương mại sầm uất.",
    "Gần 850 căn biệt thự song lập với lối thiết kế cân đối.",
    "Nơi có Suối Lương, Trung tâm Chăm sóc sức khoẻ khoáng nóng, Khu Thương mại tự do, dãy các toà cao tầng, NOXH.",
  ],
  asia: [
    "Dự kiến có khoảng 705 căn biệt thự cao cấp được bố trí ven biển và trung tâm khu vực.",
    "Nhà hàng 360 độ Panorama tầm view biển với không gian mở, tầm nhìn toàn cảnh đại dương, hứa hẹn trở thành điểm nhấn cho giới thượng lưu.",
    "Ga tàu điện nội khu giúp kết nối thuận lợi giữa các phân khu.",
  ],
  jp: [
    "Khoảng 1.400 căn liền kề với diện tích đa dạng từ 60 – 100m².",
    "Gần 600 biệt thự song lập (150 – 200m²), phù hợp cho các gia đình mong muốn không gian rộng rãi.",
    "Hơn 200 căn biệt thự đơn lập (200 – 400m²) mang tính cá nhân hóa cao, riêng tư tuyệt đối.",
    "Nơi có khách sạn biểu tượng, hệ thống VinWonders, chuỗi tiện ích liên hoàn.",
  ],
  mocano: [
    "205 sản phẩm biệt thự đơn lập phong cách Monaco đẳng cấp.",
    "Phát triển khách sạn nghỉ dưỡng 5 sao, trung tâm giải trí cao cấp và casino (dự kiến).",
    "Quyền sở hữu lên đến 50 năm.",
    "Thừa hưởng toàn bộ hệ thống tiện ích đẳng cấp từ Vinpearl.",
  ],
}

  const items = propsItems ?? defaultItems
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const intervalRef = useRef<number | null>(null)

  const startInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length)
    }, intervalMs)
  }

  useEffect(() => {
    startInterval()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length, intervalMs])

  const displayIndex = hoveredIndex !== null ? hoveredIndex : activeIndex
  const activeId = items[displayIndex]?.id ?? items[0].id

  const zoneImages: Record<string, string> = {
    modern: '/images/zone-1.webp',
    indochine: '/images/zone-2.webp',
    classic: '/images/zone-3.webp',
    neoclassical: '/images/zone-4.webp',
  }

  const activeZoneImage = zoneImages[activeId] ?? '/images/zone-1.webp'

  return (
    <section className="w-full">
        <div
          className="w-full relative bg-right bg-no-repeat lg:h-[714px] md:h-[540px] h-[624px] bg-size-[60.8%_100%]"
          style={{ backgroundImage: `url(${activeZoneImage})` }}
        >
        <div className="absolute inset-y-0 left-0 lg:w-[37.2%] w-full [@media(min-width:1440px)]:w-[40%] bg-[#162B75] z-0" />

        <div className="max-w-[1152px] mx-auto relative h-full">
        <div className="flex flex-col gap-5 relative z-10 lg:max-w-[353px] xl:px-0 lg:px-[31.5px] max-w-full lg:pt-[30px] md:px-[31.5px] pt-[150px] px-[52.5px]">
       <div className="flex flex-col gap-2.5 text-center"> 
        <div className="flex flex-col">
        <h2 className="text-[22px] leading-[30px] text-[#DCA447] font-bold font-crimson-text">Đăng ký nhận thông tin</h2>
        <h2 className="text-[22px] leading-[30px] text-[#DCA447] font-bold font-crimson-text"> THIẾT KẾ ĐIỂN HÌNH CỦA DỰ ÁN</h2>
        </div>
       <p className="text-sm leading-6 text-white font-normal font-montserrat">Các tài liệu khách hàng nhận được gồm: Thiết kế và phương án ghép mẫu nhà mỡi nhất của dự án Vinhomes Hải Vân Bay</p></div>
        <ContactForm gapClass='gap-[15px]' ptClass='pt-[5px]' />
      </div>
          

          <div className="absolute top-[30px] lg:bottom-[25px] lg:top-auto left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 z-20 pointer-events-auto">
            <div className="flex items-center">
              {items.map((item, idx) => {
                const active = idx === activeIndex
                return (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => {
                      setActiveIndex(idx)
                      startInterval()
                    }}
                    className={`group shrink-0 hover:cursor-pointer rounded-full flex flex-col items-center justify-center transition-all duration-300 lg:w-[240px] lg:h-[240px] w-[102px] h-[102px] ${idx !== 0 ? 'lg:-ml-[55px] -ml-4' : ''} ${
                      active || hoveredIndex === idx ? 'bg-[#FFFFFF33]' : 'bg-none hover:bg-[#FFFFFF33] transition-all duration-300'
                    }`}
                    aria-pressed={active}
                  >
                    <div className={`lg:w-[130px] lg:h-[130px] w-[70px] h-[70px] rounded-full flex items-center justify-center ${active || hoveredIndex === idx ? 'bg-[#DCA447]' : 'bg-[#F5F1E6] hover:bg-[#DCA447] transition-all duration-300'}`}>
                      <span className={`transition-all duration-150 lg:text-base lg:leading-[21px] text-[10px] leading-[13px] font-bold text-center lg:px-4 lg:py-[34px] px-[4.5px] py-3 ${active || hoveredIndex === idx ? 'text-white' : 'text-[#162B75]'}`}>
                        {item.title}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className="lg:hidden block h-[310px] w-full bg-bottom bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${activeZoneImage})` }}
      >
      </div>
    </section>
  )
}

