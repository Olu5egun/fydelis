"use server"

import { sendEmail } from "@/lib/email"

export interface TestEmailData {
  testEmail: string
  subject?: string
  message?: string
}

export interface TestEmailState {
  success?: boolean
  message?: string
}

export async function testEmailAction(prevState: TestEmailState, formData: FormData): Promise<TestEmailState> {
  const testEmail = formData.get("testEmail") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!testEmail || !testEmail.includes("@")) {
    return {
      success: false,
      message: "Please enter a valid email address",
    }
  }

  try {
    const result = await sendEmail({
      to: testEmail,
      subject: subject || "Test Email - Fydelis Care",
      html: `
        <h2>Email Test Successful!</h2>
        <p>This is a test email from the Fydelis Care website.</p>
        ${message ? `<p><strong>Your message:</strong> ${message}</p>` : ""}
        <hr>
        <p><small>Sent at: ${new Date().toISOString()}</small></p>
      `,
      replyTo: "info@fydelis-care.com",
    })

    if (result.success) {
      return {
        success: true,
        message: `✅ Email sent successfully! ${result.messageId ? `Message ID: ${result.messageId}` : ""}`,
      }
    } else {
      return {
        success: false,
        message: `❌ Email failed to send: ${result.error || "Unknown error"}`,
      }
    }
  } catch (error) {
    console.error("Email test error:", error)
    return {
      success: false,
      message: `❌ Error testing email: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}
