import { sendEmail } from "../lib/email"

async function testEmailSystem() {
  console.log("Testing email system...")

  try {
    const result = await sendEmail({
      to: "test@example.com", // You can change this to your email for testing
      subject: "Test Email - Fydelis Care System",
      html: `
        <h2>Email System Test</h2>
        <p>This is a test email to verify that the Fydelis Care email system is working correctly.</p>
        <p>If you receive this email, the integration is successful!</p>
        <hr>
        <p><small>Sent at: ${new Date().toISOString()}</small></p>
      `,
      replyTo: "info@fydelis-care.com",
    })

    if (result.success) {
      console.log("✅ Email sent successfully!")
      console.log("Message ID:", result.messageId)
    } else {
      console.log("❌ Email failed to send")
      console.log("Error:", result.error)
    }
  } catch (error) {
    console.log("❌ Unexpected error:", error)
  }
}

// Run the test
testEmailSystem()
