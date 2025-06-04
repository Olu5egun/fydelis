"use server"

import { sendEmail } from "@/lib/email"

export interface ContactFormData {
  fullName: string
  contactType: string
  organisationName?: string
  reason: string
  phone: string
  email: string
  message?: string
}

export interface ContactFormState {
  success?: boolean
  message?: string
  errors?: {
    fullName?: string[]
    contactType?: string[]
    reason?: string[]
    phone?: string[]
    email?: string[]
  }
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validatePhone(phone: string): boolean {
  // UK phone number validation (basic)
  const phoneRegex = /^(\+44|0)[1-9]\d{8,10}$/
  return phoneRegex.test(phone.replace(/\s/g, ""))
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Extract form data
  const data: ContactFormData = {
    fullName: formData.get("fullName") as string,
    contactType: formData.get("contactType") as string,
    organisationName: formData.get("organisationName") as string,
    reason: formData.get("reason") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  }

  // Validation
  const errors: ContactFormState["errors"] = {}

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = ["Full name must be at least 2 characters long"]
  }

  if (!data.contactType) {
    errors.contactType = ["Please select a contact type"]
  }

  if (!data.reason) {
    errors.reason = ["Please select a reason for contact"]
  }

  if (!data.phone || !validatePhone(data.phone)) {
    errors.phone = ["Please enter a valid UK phone number"]
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = ["Please enter a valid email address"]
  }

  // If there are validation errors, return them
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the errors below",
      errors,
    }
  }

  try {
    // Email configuration
    const emailSubject = "Contact Us - New Enquiry"
    const emailTo = "info@fydelis-care.com"

    // Create HTML email content
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      
      <h3>Contact Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${data.fullName}</li>
        <li><strong>Contact Type:</strong> ${data.contactType}</li>
        ${data.organisationName ? `<li><strong>Organisation:</strong> ${data.organisationName}</li>` : ""}
        <li><strong>Reason:</strong> ${data.reason}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
        <li><strong>Email:</strong> ${data.email}</li>
      </ul>

      ${
        data.message
          ? `
        <h3>Message:</h3>
        <p>${data.message}</p>
      `
          : ""
      }

      <hr>
      <p><small>Submitted at: ${new Date().toISOString()}</small></p>
    `

    // Send email
    const emailResult = await sendEmail({
      to: emailTo,
      subject: emailSubject,
      html: emailHtml,
      replyTo: data.email, // Allow replying directly to the person who submitted
    })

    if (!emailResult.success) {
      throw new Error("Failed to send email")
    }

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)

    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again or call us directly at 0333 090 9417.",
    }
  }
}
