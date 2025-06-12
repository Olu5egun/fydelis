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
    // Log the contact form submission (since we removed email functionality)
    console.log("Contact form submission:", {
      name: data.fullName,
      type: data.contactType,
      organisation: data.organisationName,
      reason: data.reason,
      phone: data.phone,
      email: data.email,
      message: data.message,
      timestamp: new Date().toISOString(),
    })

    // Always return success to the user
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
