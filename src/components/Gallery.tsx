import Image from 'next/image'
import React from 'react'

type GalleryProps = {
  title?: string
  images?: string[]
}

export default function Gallery({
  title = 'HÌNH ẢNH THỰC TẾ VINHOMES HẢI VÂN BAY',
  images = [
    '/images/gallery-01.webp',
    '/images/gallery-02.webp',
    '/images/gallery-05.webp',
    '/images/gallery-04.webp',
    '/images/gallery-03.webp',
    '/images/gallery-06.webp',
  ],
}: GalleryProps) {
  return (
    <section id="tien-do" className="lg:pt-[50px] lg:pb-[91px] pt-[50px] pb-[25px] bg-[#F5F1E6]">
      <div className="max-w-[1152px] mx-auto flex flex-col lg:gap-10 gap-5">
        <h2 className="lg:text-[44px] lg:leading-[57px] px-[32.5px] lg:px-0 text-[32px] leading-[42px] font-bold font-crimson-text text-[#162B75] text-center">
          {title}
        </h2>

        <div>
          <div className="flex sm:hidden overflow-x-auto lg:gap-[19px] gap-4 pl-6 hide-scrollbar snap-x snap-mandatory">
            {images.map((src, i) => (
              <div
                key={i}
                className="rounded-[7px] overflow-hidden shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] min-w-[76.923%] shrink-0 snap-center"
              >
                <div className="relative w-full lg:h-[260px] h-[189px]">
                  <Image src={src} alt={`gallery-${i}`} fill className="object-cover hover:scale-105 transition-all duration-300" priority={i < 2} />
                </div>
              </div>
            ))}
          </div>

          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-[19px]">
            {images.map((src, i) => (
              <div key={i} className="rounded-[7px] overflow-hidden shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]">
                <div className="relative w-full h-[260px]">
                  <Image src={src} alt={`gallery-${i}`} fill className="object-cover hover:scale-105 transition-all duration-300" priority={i < 2} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


