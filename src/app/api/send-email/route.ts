import { NextResponse } from 'next/server'

type RequestBody = {
  name?: string
  email?: string
  phone?: string
}

export async function POST(req: Request) {
  try {
    const body: RequestBody = await req.json()
    const { name, email, phone } = body

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const emailFrom = process.env.EMAIL_FROM || smtpUser
    const emailTo = process.env.EMAIL_TO || email 

    // const transporter = nodemailer.createTransport({
    //   auth: {
    //     user: smtpUser,
    //     pass: smtpPass,
    //   },
    // })

    const subject = `Yêu cầu liên hệ từ ${name || 'Khách hàng'}`
    const text = `Name: ${name || '-'}\nEmail: ${email}\nPhone: ${phone || '-'}`

    // await transporter.sendMail({
    //   from: emailFrom,
    //   to: emailTo,
    //   subject,
    //   text,
    //   html: `<p><strong>Name:</strong> ${name || '-'}</p>
    //          <p><strong>Email:</strong> ${email}</p>
    //          <p><strong>Phone:</strong> ${phone || '-'}</p>`,
    // })

    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message || 'Server error' }, { status: 500 })
  }
}


