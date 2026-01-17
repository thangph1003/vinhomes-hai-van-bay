 'use client'

import { useState } from 'react'

type ContactFormProps = {
  endpoint?: string
  submitLabel?: string
  gapClass?: string
  ptClass?: string
  formClass?: string
}

export default function ContactForm({
  endpoint = '/api/send-email',
  submitLabel = 'Xem thêm',
  gapClass = 'gap-2.5',
  ptClass = 'pt-[5px]',
  formClass,
}: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const validatePhoneNumber = (phone: string): boolean => {
    const cleanedPhone = phone.replace(/\D/g, '')

    if (cleanedPhone.length !== 10 && cleanedPhone.length !== 11) {
      return false
    }

    if (cleanedPhone.length === 10) {
      const validPrefixes10 = ['03', '05', '07', '08', '09']
      const prefix = cleanedPhone.substring(0, 2)
      return validPrefixes10.includes(prefix)
    }

    if (cleanedPhone.length === 11) {
      return cleanedPhone.startsWith('01')
    }

    return false
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)
    setError(null)

    if (!name || !email) {
      setError('Vui lòng nhập tên và email.')
      return
    }

    if (!phone) {
      setError('Vui lòng nhập số điện thoại.')
      return
    }

    if (!validatePhoneNumber(phone)) {
      setError('Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại Việt Nam hợp lệ.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.error || 'Không gửi được, thử lại sau.')
      }

      setMessage('Gửi thành công — chúng tôi sẽ liên hệ với bạn sớm.')
      setName('')
      setEmail('')
      setPhone('')
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err)
      setError(message || 'Đã có lỗi xảy ra.')
    } finally {
      setLoading(false)
    }
  }

  const defaultFormClass = `w-full lg:max-w-[446px] md:max-w-full flex flex-col ${gapClass}`

  return (
    <form onSubmit={handleSubmit} className={formClass ?? defaultFormClass}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white w-full h-11 px-4 py-3 placeholder:text-[#7E7E7E] placeholder:text-sm placeholder:leading-5 placeholder:font-montserrat"
          placeholder="Họ và tên"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
         className="bg-white w-full h-11 px-4 py-3 placeholder:text-[#7E7E7E] placeholder:text-sm placeholder:leading-5 placeholder:font-montserrat"
          placeholder="Email"
        />

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          required
          className="bg-white w-full h-11 px-4 py-3 placeholder:text-[#7E7E7E] placeholder:text-sm placeholder:leading-5 placeholder:font-montserrat"
          placeholder="Số điện thoại"
        />

      <div className={`flex flex-col items-center w-full ${gapClass} ${ptClass}`}>
        <button
          type="submit"
          disabled={loading}
          className="bg-[#DCA447] hover:bg-white hover:text-[#162B75] hover:cursor-pointer translation-all duration-300 w-full text-center py-[11px] text-base leading-6 font-normal font-montserrat text-white"
        >
          {loading ? 'Đang gửi...' : submitLabel}
        </button>
        {message && <p className="text-base text-green-600">{message}</p>}
        {error && <p className="text-base text-red-600">{error}</p>}
      </div>
    </form>
  )
}


