 'use client'

import { useState } from 'react'

type ContactFormProps = {
  endpoint?: string
  submitLabel?: string
}

export default function ContactForm({
  endpoint = '/api/send-email',
  submitLabel = 'Gửi thông tin',
}: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)
    setError(null)

    if (!name || !email) {
      setError('Vui lòng nhập tên và email.')
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

  return (
    <form onSubmit={handleSubmit} className="w-full lg:max-w-[446px] md:max-w-[300px] flex flex-col gap-2.5">
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
         className="bg-white w-full h-11 px-4 py-3 placeholder:text-[#7E7E7E] placeholder:text-sm placeholder:leading-5 placeholder:font-montserrat"
          placeholder="Số điện thoại"
        />

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="bg-[#DCA447] hover:bg-amber-500 translation-all duration-300 w-full text-center py-[11px] text-base leading-6 font-normal font-montserrat text-white"
        >
          {loading ? 'Đang gửi...' : submitLabel}
        </button>
        {message && <p className="text-sm text-green-600">{message}</p>}
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    </form>
  )
}


