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
    <section className="pt-[50px] pb-[91px] bg-[#F5F1E6]">
      <div className="max-w-[1152px] mx-auto flex flex-col gap-10">
        <h2 className="text-[44px] leading-[57px] font-bold font-crimson-text text-[#162B75] text-center">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-[19px]">
          {images.map((src, i) => (
            <div key={i} className="rounded-[7px] overflow-hidden shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <div className="relative w-full h-[260px]">
                <Image src={src} alt={`gallery-${i}`} fill className="object-cover hover:scale-105 transition-all duration-300" priority={i < 2} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


