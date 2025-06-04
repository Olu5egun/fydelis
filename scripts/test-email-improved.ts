import { sendEmail } from "../lib/email"

async function testEmailSystem() {
  console.log("Testing email system...")
  console.log("RESEND_API_KEY present:", !!process.env.RESEND_API_KEY)

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

    console.log("Email function result:", result)

    if (result.success) {
      console.log("✅ Email function completed successfully")
      if (result.message && result.message.includes("simulation mode")) {
        console.log("⚠️ NOTE: Running in simulation mode - no actual email was sent")
      } else {
        console.log("Message ID:", result.messageId)
      }
    } else {
      console.log("❌ Email function reported failure")
      console.log("Error:", result.error)
    }
  } catch (error) {
    console.log("❌ Unexpected error:", error)
  }
}

// Run the test
testEmailSystem()
