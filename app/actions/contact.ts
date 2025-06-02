"use server"

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
    // Simulate sending email (in a real app, you'd integrate with an email service)
    // For now, we'll just log the form data and simulate a delay
    console.log("Contact form submission:", data)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real application, you would:
    // 1. Send an email to the business using a service like Resend, SendGrid, or Nodemailer
    // 2. Send a confirmation email to the user
    // 3. Store the submission in a database
    // 4. Integrate with a CRM system

    // Example email content that would be sent:
    const emailContent = `
      New Contact Form Submission
      
      Name: ${data.fullName}
      Contact Type: ${data.contactType}
      ${data.organisationName ? `Organisation: ${data.organisationName}` : ""}
      Reason: ${data.reason}
      Phone: ${data.phone}
      Email: ${data.email}
      ${data.message ? `Message: ${data.message}` : ""}
      
      Submitted at: ${new Date().toISOString()}
    `

    console.log("Email that would be sent:", emailContent)

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)

    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again or call us directly at 07828173835.",
    }
  }
}
