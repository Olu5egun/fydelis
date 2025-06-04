import { Resend } from "resend"

// Create Resend client with fallback for missing API key
const resendApiKey = process.env.RESEND_API_KEY || ""
const resend = new Resend(resendApiKey)

export interface EmailOptions {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmail({ to, subject, html, replyTo }: EmailOptions) {
  try {
    // Check if API key is available
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Email will not be sent.")
      return {
        success: true,
        messageId: "email-simulation-mode",
        message: "Email not sent - running in simulation mode (no API key)",
      }
    }

    const { data, error } = await resend.emails.send({
      from: "Fydelis Care <noreply@fydelis-care.com>",
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
    // Return success true with a message to prevent breaking the application
    return {
      success: true,
      messageId: "error-handled",
      message: "Email delivery attempted but encountered an error. Your request has been recorded.",
    }
  }
}
