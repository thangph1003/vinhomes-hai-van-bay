'use client'

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
      <div className="lg:hidden flex justify-center py-5 bg-[#162B75]">
        <div className="flex items-center gap-[-16px]">
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
                className={`group shrink-0 hover:cursor-pointer rounded-full flex flex-col items-center justify-center transition-all duration-300 w-[80px] h-[80px] ${idx !== 0 ? '-ml-3' : ''} ${
                  active || hoveredIndex === idx ? 'bg-[#FFFFFF33]' : 'bg-none hover:bg-[#FFFFFF33] transition-all duration-300'
                }`}
                aria-pressed={active}
              >
                <div className={`w-[55px] h-[55px] rounded-full flex items-center justify-center ${active || hoveredIndex === idx ? 'bg-[#DCA447]' : 'bg-[#F5F1E6] hover:bg-[#DCA447] transition-all duration-300'}`}>
                  <span className={`transition-all duration-150 text-[9px] leading-[12px] font-bold text-center px-1 py-2 ${active || hoveredIndex === idx ? 'text-white' : 'text-[#162B75]'}`}>
                    {item.title}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div
        className="lg:hidden block h-[280px] w-full bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${activeZoneImage})` }}
      >
      </div>

      <div
        className="lg:hidden w-full relative bg-right bg-no-repeat h-[500px] bg-size-[60.8%_100%]"
        style={{ backgroundImage: `url(${activeZoneImage})` }}
      >
        <div className="absolute inset-y-0 left-0 w-full bg-[#162B75] z-0" />

        <div className="max-w-[1152px] mx-auto relative h-full flex items-end pb-8">
          <div className="flex flex-col gap-5 relative z-10 max-w-full px-[52.5px]">
            <div className="flex flex-col gap-2.5 text-center">
              <div className="flex flex-col">
                <h2 className="text-[22px] leading-[30px] text-[#DCA447] font-bold font-crimson-text">Đăng ký nhận thông tin</h2>
                <h2 className="text-[22px] leading-[30px] text-[#DCA447] font-bold font-crimson-text"> THIẾT KẾ ĐIỂN HÌNH CỦA DỰ ÁN</h2>
              </div>
              <p className="text-sm leading-6 text-white font-normal font-montserrat">Các tài liệu khách hàng nhận được gồm: Thiết kế và phương án ghép mẫu nhà mỡi nhất của dự án Vinhomes Hải Vân Bay</p>
            </div>
            <ContactForm gapClass='gap-[15px]' ptClass='pt-[5px]' />
          </div>
        </div>
      </div>

      <div
        className="hidden lg:block w-full relative bg-right bg-no-repeat lg:h-[714px] md:h-[540px] bg-size-[60.8%_100%]"
        style={{ backgroundImage: `url(${activeZoneImage})` }}
      >
        <div className="absolute inset-y-0 left-0 lg:w-[37.2%] w-full [@media(min-width:1440px)]:w-[40%] bg-[#162B75] z-0" />

        <div className="max-w-[1152px] mx-auto relative h-full">
          <div className="flex flex-col gap-5 relative z-10 lg:max-w-[353px] xl:px-0 lg:px-[31.5px] max-w-full lg:pt-[30px] md:px-[31.5px] px-[52.5px]">
            <div className="flex flex-col gap-2.5 text-center">
              <div className="flex flex-col">
                <h2 className="text-[22px] leading-[30px] text-[#DCA447] font-bold font-crimson-text">Đăng ký nhận thông tin</h2>
                <h2 className="text-[22px] leading-[30px] text-[#DCA447] font-bold font-crimson-text"> THIẾT KẾ ĐIỂN HÌNH CỦA DỰ ÁN</h2>
              </div>
              <p className="text-sm leading-6 text-white font-normal font-montserrat">Các tài liệu khách hàng nhận được gồm: Thiết kế và phương án ghép mẫu nhà mỡi nhất của dự án Vinhomes Hải Vân Bay</p>
            </div>
            <ContactForm gapClass='gap-[15px]' ptClass='pt-[5px]' />
          </div>

          <div className="absolute bottom-[25px] left-0 z-20 pointer-events-auto">
            <div className="flex items-center pl-[31.5px]">
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
                    className={`group shrink-0 hover:cursor-pointer rounded-full flex flex-col items-center justify-center transition-all duration-300 w-[240px] h-[240px] ${idx !== 0 ? '-ml-[55px]' : ''} ${
                      active || hoveredIndex === idx ? 'bg-[#FFFFFF33]' : 'bg-none hover:bg-[#FFFFFF33] transition-all duration-300'
                    }`}
                    aria-pressed={active}
                  >
                    <div className={`w-[130px] h-[130px] rounded-full flex items-center justify-center ${active || hoveredIndex === idx ? 'bg-[#DCA447]' : 'bg-[#F5F1E6] hover:bg-[#DCA447] transition-all duration-300'}`}>
                      <span className={`transition-all duration-150 text-base leading-[21px] font-bold text-center px-4 py-[34px] ${active || hoveredIndex === idx ? 'text-white' : 'text-[#162B75]'}`}>
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
    </section>
  )
}
