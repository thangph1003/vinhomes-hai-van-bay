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
    const smtpPort = Number(process.env.SMTP_PORT ?? 587)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const emailFrom = process.env.EMAIL_FROM ?? smtpUser
    const emailTo = process.env.EMAIL_TO ?? email

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        { error: 'Có lỗi khi gửi thông tin. Vui lòng thử lại sau.' },
        { status: 500 }
      )
    }

    const nodemailer = await import('nodemailer')

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    const subject = `[Vinhomes] Thông báo đăng ký - ${name || 'Khách hàng'}`
    const text = `Name: ${name || '-'}\nEmail: ${email}\nPhone: ${phone || '-'}`


    const html = `
      <table width="620" cellspacing="0" cellpadding="0" style="background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e5e7eb">
        <tbody>
          <tr>
            <td style="background:#f5f8fa;padding:16px 24px; display: flex; justify-content: center;">
              <a href="https://vinhomes-dansolutions.vercel.app/">
                <img src="https://vinhomes-dansolutions.vercel.app/images/logo.png" alt="Logo" style="height:42px;display:block" />
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 24px 10px 24px">
              <h2 style="margin:0;font-size:18px;color:#162B75">
                Bạn có một đăng ký mới từ website
              </h2>
            </td>
          </tr>
          <tr>
            <td style="padding:10px 24px 20px 24px;color:#0b1220;font-size:15px;line-height:1.5">
              <p style="margin:0 0 14px 0;color:#111827">
                <strong>Thông tin người yêu cầu tư vấn:</strong>
              </p>
              <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-size:15px">
                <tbody>
                  <tr style="background:#f5f8fa">
                    <td width="160" style="font-weight:600;color:#162B75">Họ và tên:</td>
                    <td>${name || '-'}</td>
                  </tr>
                  <tr>
                    <td style="font-weight:600;color:#162B75">Email:</td>
                    <td><a href="mailto:${email}" target="_blank">${email}</a></td>
                  </tr>
                  <tr style="background:#f5f8fa">
                    <td style="font-weight:600;color:#162B75">Số điện thoại:</td>
                    <td>${phone || '-'}</td>
                  </tr>
                  
                </tbody>
              </table>
              <p style="margin:16px 0 0 0;color:#6b7280;font-size:14px">
                Tin nhắn được gửi từ form <strong>Đăng ký</strong> trên website.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:#f5f8fa;padding:14px 24px;text-align:center;font-size:12px;color:#6b7280">
              © Vinhomes Hải Vân Bay — Email tự động, vui lòng không trả lời.
            </td>
          </tr>
        </tbody>
      </table>
    `

    await transporter.sendMail({
      from: emailFrom,
      to: emailTo,
      subject,
      text,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message || 'Server error' }, { status: 500 })
  }
}


