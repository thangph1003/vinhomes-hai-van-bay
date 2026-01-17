 'use client'

import { useEffect, useState } from 'react'
import ContactForm from './ContactForm'
import Image from 'next/image'

type PopupFormProps = {
  title?: string
  subtitle?: string
  delayMs?: number
}

export default function PopupForm({
  title = 'Bảng giá VINHOMES HẢI VÂN BAY T01/2026',
  subtitle = 'Các tài liệu khách hàng nhận được gồm: Bảng giá đợt 1 ưu đãi, Thiết kế mặt bằng và chi tiết căn hộ, Chính sách bán hàng và Tiến độ thanh toán',
  delayMs = 3000,
}: PopupFormProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), delayMs)
    return () => clearTimeout(t)
  }, [delayMs])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={() => setOpen(false)}
        aria-hidden
      />

      <div className="relative z-10 mx-[32.5px] md:mx-auto">
        <div className="flex flex-col gap-5 md:w-[461px] w-full md:p-10 p-5 relative z-10 bg-[#162B75]">
          <div className="flex flex-col gap-2.5 text-center">
            <h2 className="text-[22px] leading-[30px] text-[#DCA447] font-bold font-crimson-text">{title}</h2>
            <p className="text-sm leading-6 text-white font-normal font-montserrat">{subtitle}</p>
          </div>
          <ContactForm gapClass="gap-[15px]" ptClass="pt-[5px]" formClass="w-full flex flex-col gap-4" />
          <button
          className="flex justify-center cursor-pointer"
          onClick={() => setOpen(false)}
          aria-label="Close popup"
        >
         <Image src="/images/iconClose.svg" alt="Close" width={24} height={24} className='w-5 h-5 md:w-6 md:h-6'/>
        </button>
        </div>
      </div>
    </div>
  )
}

