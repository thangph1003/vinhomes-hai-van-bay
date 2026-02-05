declare module 'nodemailer' {
  type TransportOptions = Record<string, unknown>
  type SendMailOptions = {
    from?: string
    to?: string | string[]
    subject?: string
    cc?: string | string[]
    text?: string
    html?: string
  }

  export function createTransport(options?: TransportOptions): {
    sendMail(mail: SendMailOptions): Promise<unknown>
  }

  const nodemailer: {
    createTransport(options?: TransportOptions): {
      sendMail(mail: SendMailOptions): Promise<unknown>
    }
  }

  export default nodemailer
}


