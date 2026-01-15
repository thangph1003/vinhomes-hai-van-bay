'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type FeatureItem = {
  id: string
  title: string
  description?: string
}

type SplitFeatureProps = {
  items?: FeatureItem[]
  intervalMs?: number
}

type Product = {
    bullets?: string | string[];
  };

export default function SplitFeature({
  items: propsItems,
  intervalMs = 5000,
}: SplitFeatureProps) {
  const defaultItems: FeatureItem[] = [
    { id: 'eu', title: 'PHÂN KHU CHÂU ÂU', description: 'Khu vực Châu Âu được thiết kế theo phong cách sang trọng, tinh tế.' },
    { id: 'asia', title: 'PHÂN KHU CHÂU Á', description: 'Khu vực Châu Á chú trọng phong cách bản địa, mật độ thấp.' },
    { id: 'jp', title: 'PHÂN KHU NHẬT BẢN', description: 'Thiết kế tối giản, gần gũi thiên nhiên.' },
    { id: 'mocano', title: 'PHÂN KHU MOCANO', description: 'Khu vực biển, phục vụ nghỉ dưỡng và giải trí.' },
  ]

const products: Product[] = [
    {
      bullets: "Khoảng 2.668 căn liền kề với diện tích phổ biến từ 62 – 65m².",
    },
    {
      bullets: "Khoảng 400 căn shophouse diện tích từ 90m², nằm trên các trục đường thương mại sầm uất.",
    },
    {
      bullets: "Gần 850 căn biệt thự song lập với lối thiết kế cân đối.",
    },
    {
      bullets: "Nơi có Suối Lương, Trung tâm Chăm sóc sức khoẻ khoáng nóng, Khu Thương mại tự do, dãy các toà cao tầng, NOXH.",
    },
  ];

  const items = propsItems ?? defaultItems
  const [activeIndex, setActiveIndex] = useState<number>(0)
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

  return (
    <section className="w-full">
        <div className="w-full relative bg-[url('/images/banner-subdivision.webp')] bg-right bg-no-repeat h-[714px] bg-size-[62.8%_100%]">
        <div className="absolute inset-y-0 left-0 w-[37.2%] [@media(min-width:1440px)]:w-[40%] bg-[#F5F1E6] z-0" />

        <div className="max-w-[1152px] mx-auto relative h-full">
          <div className="absolute left-0 w-[32.39%] px-[30px] py-10 z-10 flex flex-col gap-2.5">
            <h3 className="text-[28px] leading-[38px] font-crimson-text font-bold text-[#162B75]">PHÂN KHU CHÂU ÂU</h3>
            <p className="text-base leading-6 font-montserrat text-black">
              Khu vực Châu Âu được thiết kế theo phong cách sang trọng, tinh tế, tái hiện kiến trúc cổ điển phương Tây.
            </p>
            {products.map((p, idx) => {
              const bullets = Array.isArray(p.bullets) ? p.bullets : p.bullets ? [p.bullets] : []
              return (
                <article key={idx} className="flex flex-col gap-2.5">
                  <ul className="flex flex-col gap-2.5">
                    {bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Image src="/images/logo-cropped.png" alt="Project product" width={22} height={22} className="object-cover" />
                        <span className="text-base leading-6 text-black font-normal font-montserrat">{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>

          <div className="absolute left-0 bottom-[25px] z-20 pointer-events-auto">
            <div className="flex items-center">
              {items.map((item, idx) => {
                const active = idx === activeIndex
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setActiveIndex(idx)
                      startInterval()
                    }}
                    className={`shrink-0 hover:cursor-pointer rounded-full flex flex-col items-center justify-center transition-all duration-300 w-[240px] h-[240px] ${idx !== 0 ? '-ml-[55px]' : ''} ${
                      active ? 'bg-[#FFFFFF66]' : 'bg-none'
                    }`}
                    aria-pressed={active}
                  >
                    <div className={`w-[130px] h-[130px] rounded-full flex items-center justify-center ${active ? 'bg-[#DCA447]' : 'bg-[#162B75]'}`}>
                      <span className="text-white text-sm font-bold text-center px-6 py-[34px]">
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

