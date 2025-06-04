import { Resend } from "resend"

// Create Resend client
const resend = new Resend(process.env.RESEND_API_KEY)

export interface EmailOptions {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmail({ to, subject, html, replyTo }: EmailOptions) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Fydelis Care <no-reply@fydelis-care.com>", // You can customize this
      to,
      subject,
      html,
      reply_to: replyTo,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error }
    }

    console.log("Email sent successfully:", data)
    return { success: true, messageId: data?.id }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error }
  }
}
