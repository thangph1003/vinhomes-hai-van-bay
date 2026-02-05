import { NextResponse } from 'next/server'
import { google } from 'googleapis'

type RequestBody = {
  name?: string
  email?: string
  phone?: string
}

async function appendToGoogleSheets(name: string, email: string, phone: string) {
  try {
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL
    const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n')
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    if (!clientEmail || !privateKey || !spreadsheetId) {
      return
    }

    const jwtClient = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    })

    const sheets = google.sheets({ version: 'v4', auth: jwtClient })

    const values = [[
      new Date().toLocaleString('vi-VN'),
      name || '-',
      email,
      phone || '-'
    ]]

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:D',
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    })

  } catch (error: unknown) {
    const err = error as { message?: string; code?: number; status?: number; errors?: unknown }
    console.error('Error appending to Google Sheets:', {
      message: err.message,
      code: err.code,
      status: err.status,
      details: err.errors
    })
  }
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
    const emailTo = process.env.EMAIL_TO?.split(',').map(e => e.trim()) ?? [email]

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        { error: 'Có lỗi khi gửi thông tin. Vui lòng thử lại sau.' },
        { status: 500 }
      )
    }

    // Support CC email
    const emailCc = process.env.EMAIL_CC

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
              <a href="https://duanvinhomeslangvan.com">
                <img src="https://duanvinhomeslangvan.com/images/logo.png" alt="Logo" style="height:42px;display:block" />
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
      cc: emailCc,
      subject,
      text,
      html,
    })

    appendToGoogleSheets(name || '', email, phone || '')

    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message || 'Server error' }, { status: 500 })
  }
}


