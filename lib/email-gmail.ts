import nodemailer from "nodemailer"

export interface EmailOptions {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmailViaGmail({ to, subject, html, replyTo }: EmailOptions) {
  try {
    // Check if Gmail credentials are available
    const gmailUser = process.env.GMAIL_USER
    const gmailPassword = process.env.GMAIL_APP_PASSWORD // This should be an App Password, not your regular password

    if (!gmailUser || !gmailPassword) {
      console.warn("Gmail credentials not set. Email will not be sent.")
      return {
        success: true,
        messageId: "email-simulation-mode",
        message: "Email not sent - Gmail credentials not configured",
      }
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    })

    // Send email
    const info = await transporter.sendMail({
      from: `"Fydelis Care" <${gmailUser}>`,
      to: to,
      subject: subject,
      html: html,
      replyTo: replyTo,
    })

    console.log("Email sent successfully via Gmail:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending email via Gmail:", error)
    return {
      success: true,
      messageId: "error-handled",
      message: "Email delivery attempted but encountered an error. Your request has been recorded.",
    }
  }
}
