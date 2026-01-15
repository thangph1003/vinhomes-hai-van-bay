import Image from "next/image";
import Link from "next/link";

export default function FloatingCTA() {
  const phone = "0935917037";
  return (
    <div className="fixed right-[68.5px] bottom-[45px] z-50 flex flex-col items-end gap-4">
      <Link
        href={`https://zalo.me/${phone}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat via Zalo"
        className="relative w-[50px] h-[50px] flex items-center justify-center"
      >
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[50px] h-[50px] bg-[#162B75B2] cta-ring cta-ring-outer" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[40px] h-[40px] bg-[#162B75] cta-ring cta-ring-inner" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[28px] h-[28px] rounded-full bg-white flex items-center justify-center z-10">
          <Image src="/images/iconZalo.svg" alt="zalo" width={26} height={26} />
        </span>
      </Link>

      <Link
        href={`tel:${phone}`}
        aria-label="Call phone"
        className="relative w-[50px] h-[50px] flex items-center justify-center"
      >
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[50px] h-[50px] bg-[#FF0004B2] cta-ring cta-ring-outer" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[40px] h-[40px] bg-[#FF0004] cta-ring cta-ring-inner" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[28px] h-[28px] rounded-full bg-white flex items-center justify-center z-10">
          <Image src="/images/iconPhone.svg" alt="phone" width={26} height={26} />
        </span>
      </Link>
    </div>
  );
}


