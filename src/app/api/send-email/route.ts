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

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT || 587)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const emailFrom = process.env.EMAIL_FROM || smtpUser
    const emailTo = process.env.EMAIL_TO || email 

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        { error: 'SMTP not configured. Set SMTP_HOST/SMTP_USER/SMTP_PASS in env' },
        { status: 500 }
      )
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - nodemailer may not be installed in the environment; dynamic import
    const nodemailer = await import('nodemailer')
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 587,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    const subject = `Yêu cầu liên hệ từ ${name || 'Khách hàng'}`
    const text = `Name: ${name || '-'}\nEmail: ${email}\nPhone: ${phone || '-'}`

    await transporter.sendMail({
      from: emailFrom,
      to: emailTo,
      subject,
      text,
      html: `<p><strong>Name:</strong> ${name || '-'}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone || '-'}</p>`,
    })

    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message || 'Server error' }, { status: 500 })
  }
}


