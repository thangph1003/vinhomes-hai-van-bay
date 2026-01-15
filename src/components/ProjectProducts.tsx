import Image from "next/image";

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
  return (
    <section className="bg-[#F6E9D5] py-[50px]">
      <div className="max-w-[1152px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-[25px]">
          <div className="flex flex-col gap-[5px] justify-center items-center"><Image src="/images/logo-cropped.png" alt="logo" width={62} height={57} className="w-[62px] h-[57px] object-contain" />
          <h2 className="text-[44px] leading-[57px] font-bold font-crimson-text text-[#162B75]">DÒNG SẢN PHẨM CHỦ ĐẠO</h2></div>
          <p className="px-[172px] text-base leading-6 text-black font-normal font-montserrat">
            Vinhomes Làng Vân mang đến danh mục sản phẩm đa dạng, đáp ứng mọi nhu cầu từ nghỉ dưỡng, kinh
            doanh đến đầu tư. Các loại hình bất động sản tại đây bao gồm biệt thự nghỉ dưỡng, shophouse
            thương mại, và căn hộ khách sạn cao cấp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.title} className="bg-white shadow-sm overflow-hidden">
              <div className="w-full h-[250px] overflow-hidden">
                <Image src={p.image} alt={p.title} width={800} height={250} className="w-full h-full object-cover hover:scale-105 transition-all duration-300" />
              </div>

              <div className="px-[30px] py-5 flex flex-col gap-2.5">
                <h3 className="text-[24px] leading-[36px] font-bold font-crimson-text text-[#162B75]">{p.title}</h3>
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


