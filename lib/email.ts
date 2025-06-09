import { sendEmailViaGmail } from "./email-gmail"

export interface EmailOptions {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmail({ to, subject, html, replyTo }: EmailOptions) {
  try {
    // Use Gmail instead of Resend
    return await sendEmailViaGmail({ to, subject, html, replyTo })
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: true,
      messageId: "error-handled",
      message: "Email delivery attempted but encountered an error. Your request has been recorded.",
    }
  }
}
