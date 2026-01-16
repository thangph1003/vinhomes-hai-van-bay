"use client"

import Image from "next/image";
import { useState } from "react";

type Product = {
  title: string;
  image: string;
  bullets: string[];
};

const products: Product[] = [
  {
    title: "BIỆT THỰ NGHỈ DƯỠNG",
    image: "/images/project-product-02.webp",
    bullets: [
      "Gồm: Biệt thự ven biển, biệt thự liền kề, biệt thự ven đồi, bungalow",
      "Thiết kế theo phong cách mở, gần gũi thiên nhiên, tối ưu tầm nhìn và riêng tư",
      "Thích hợp để ở dài hạn hoặc đầu tư cho thuê vận hành nghỉ dưỡng",
    ],
  },
  {
    title: "SHOPHOUSE THƯƠNG MẠI",
    image: "/images/project-product-01.webp",
    bullets: [
      "Bố trí tại các trục giao thương sôi động và là nơi tập trung đông khách du lịch",
      "Mặt tiền rộng thoáng",
      "Thiết kế hiện đại, lý tưởng cho kinh doanh nhà hàng, cafe, đặc sản, showroom...",
    ],
  },
  {
    title: "CĂN HỘ KHÁCH SẠN",
    image: "/images/project-product-03.webp",
    bullets: [
      "Kiến trúc mang phong cách Indochine hiện đại",
      "Đa dạng diện tích, tối ưu hướng biển và không gian sinh thái",
      "Tích hợp sàn dịch vụ lưu trú cao cấp, quản lý vận hành theo tiêu chuẩn quốc tế",
    ],
  },
];

export default function ProjectProducts() {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx((i) => (i - 1 + products.length) % products.length)
  const next = () => setIdx((i) => (i + 1) % products.length)
  return (
    <section className="bg-[#F6E9D5] md:py-[50px] px-[31.5px] py-[30px]">
      <div className="max-w-[1152px] mx-auto flex flex-col md:gap-10 gap-5">
        <div className="flex flex-col items-center text-center md:gap-[25px] gap-[15px]">
          <div className="flex flex-col gap-[5px] justify-center items-center"><Image src="/images/logo-cropped.png" alt="logo" width={62} height={57} className="md:w-[62px] md:h-[57px] w-[33px] h-[30px] object-contain" />
          <h2 className="md:text-[44px] md:leading-[57px] text-[32px] leading-[42px] font-bold font-crimson-text text-[#162B75] md:px-0 px-[2px]">DÒNG SẢN PHẨM CHỦ ĐẠO</h2></div>
          <p className="lg:px-[172px] text-base leading-6 text-black font-normal font-montserrat">
            Vinhomes Làng Vân mang đến danh mục sản phẩm đa dạng, đáp ứng mọi nhu cầu từ nghỉ dưỡng, kinh
            doanh đến đầu tư. Các loại hình bất động sản tại đây bao gồm biệt thự nghỉ dưỡng, shophouse
            thương mại, và căn hộ khách sạn cao cấp.
          </p>
        </div>

        {/* Mobile carousel inline (prev / next) */}
        <div className="md:hidden">
          <div className="relative">
            {(() => {
              const p = products[idx]
              return (
                <>
                  <article key={p.title} className="bg-white shadow-sm overflow-hidden">
                    <div className="w-full md:h-[250px] h-[223px] overflow-hidden">
                      <Image src={p.image} alt={p.title} width={800} height={250} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-5 flex flex-col gap-2.5">
                      <h3 className="text-[22px] leading-[38px] font-bold font-crimson-text text-[#162B75]">{p.title}</h3>
                      <ul className="flex flex-col gap-2.5">
                        {p.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <Image src="/images/logo-cropped.png" alt="Project product" width={22} height={22} className="object-cover" />
                            <span className="text-base leading-6 text-black font-normal font-montserrat">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                  <button aria-label="Previous" onClick={prev} className="absolute left-[-30px] top-1/2 -translate-y-1/2 w-[30px] h-[30px]">
             <Image src="/images/iconPre.svg" alt="Pre" width={30} height={30} />
            </button>
            <button aria-label="Next" onClick={next} className="absolute right-[-30px] top-1/2 -translate-y-1/2 w-[30px] h-[30px]">
            <Image src="/images/iconNext.svg" alt="Pre" width={30} height={30} />
            </button>
                </>
              )
            })()}
          </div>
        </div>

        {/* Desktop / tablet grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.title} className="bg-white shadow-sm overflow-hidden">
              <div className="w-full md:h-[250px] h-[233px] overflow-hidden">
                <Image src={p.image} alt={p.title} width={800} height={250} className="w-full h-full object-cover hover:scale-105 transition-all duration-300" />
              </div>

              <div className="md:px-[30px] md:py-5 p-5 flex flex-col gap-2.5">
                <h3 className="md:text-[24px] md:leading-[36px] text-[22px] leading-[38px] font-bold font-crimson-text text-[#162B75]">{p.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Image src="/images/logo-cropped.png" alt="Project product" width={22} height={22} className="object-cover" />
                       <span className="text-base leading-6 text-black font-normal font-montserrat">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


