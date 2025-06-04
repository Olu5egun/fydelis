"use server"

import { sendEmail } from "@/lib/email"

export interface StaffingRequestData {
  fullName: string
  jobTitle: string
  organisationName: string
  organisationAddress: string
  postcode: string
  contactPhone: string
  contactEmail: string
  staffTypeNeeded: string
  numberOfStaff: string
  dateNeeded: string
  shiftType: string
  startTime: string
  endTime: string
  urgencyLevel: string
  specificRequirements?: string
}

export interface StaffingRequestState {
  success?: boolean
  message?: string
  errors?: {
    fullName?: string[]
    jobTitle?: string[]
    organisationName?: string[]
    organisationAddress?: string[]
    postcode?: string[]
    contactPhone?: string[]
    contactEmail?: string[]
    staffTypeNeeded?: string[]
    numberOfStaff?: string[]
    dateNeeded?: string[]
    shiftType?: string[]
    startTime?: string[]
    endTime?: string[]
    urgencyLevel?: string[]
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

function validateUKPostcode(postcode: string): boolean {
  // Comprehensive UK postcode validation regex
  const ukPostcodeRegex =
    /^(([A-Z]{1,2}[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?[0-9][A-Z]{2}|BFPO ?[0-9]{1,4}|(KY[0-9]|MSR|VG|AI)[ -]?[0-9]{4}|[A-Z]{2} ?[0-9]{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$/i

  // Remove spaces and convert to uppercase for validation
  const cleanPostcode = postcode.replace(/\s/g, "").toUpperCase()

  return ukPostcodeRegex.test(cleanPostcode)
}

function validateTime(time: string): boolean {
  const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
  return timeRegex.test(time)
}

function validateDate(date: string): boolean {
  const selectedDate = new Date(date)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return selectedDate >= today
}

function isNorthWestPostcode(postcode: string): boolean {
  // North West England and West Yorkshire postcode areas
  const serviceAreas = [
    // Greater Manchester
    "M",
    "BL",
    "OL",
    "SK",
    "WA",
    "WN",
    // Merseyside & Liverpool
    "L",
    "CH",
    "PR",
    // Lancashire
    "BB",
    "FY",
    "LA",
    "PR",
    // Cheshire
    "CW",
    "WA",
    "SK",
    "CH",
    // Cumbria
    "CA",
    "LA",
    // West Yorkshire
    "LS", // Leeds
    "BD", // Bradford
    "HX", // Halifax
    "HD", // Huddersfield
    "WF", // Wakefield
  ]

  // Extract the postcode area (first 1-2 letters)
  const postcodeArea = postcode
    .replace(/\s/g, "")
    .toUpperCase()
    .match(/^[A-Z]{1,2}/)?.[0]

  return postcodeArea ? serviceAreas.includes(postcodeArea) : false
}

export async function submitStaffingRequest(
  prevState: StaffingRequestState,
  formData: FormData,
): Promise<StaffingRequestState> {
  // Extract form data
  const data: StaffingRequestData = {
    fullName: formData.get("fullName") as string,
    jobTitle: formData.get("jobTitle") as string,
    organisationName: formData.get("organisationName") as string,
    organisationAddress: formData.get("organisationAddress") as string,
    postcode: formData.get("postcode") as string,
    contactPhone: formData.get("contactPhone") as string,
    contactEmail: formData.get("contactEmail") as string,
    staffTypeNeeded: formData.get("staffTypeNeeded") as string,
    numberOfStaff: formData.get("numberOfStaff") as string,
    dateNeeded: formData.get("dateNeeded") as string,
    shiftType: formData.get("shiftType") as string,
    startTime: formData.get("startTime") as string,
    endTime: formData.get("endTime") as string,
    urgencyLevel: formData.get("urgencyLevel") as string,
    specificRequirements: formData.get("specificRequirements") as string,
  }

  // Validation
  const errors: StaffingRequestState["errors"] = {}

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = ["Full name must be at least 2 characters long"]
  }

  if (!data.jobTitle || data.jobTitle.trim().length < 2) {
    errors.jobTitle = ["Job title is required"]
  }

  if (!data.organisationName || data.organisationName.trim().length < 2) {
    errors.organisationName = ["Organisation name is required"]
  }

  if (!data.organisationAddress || data.organisationAddress.trim().length < 10) {
    errors.organisationAddress = ["Please provide a complete organisation address"]
  }

  // UK Postcode validation
  if (!data.postcode || data.postcode.trim().length === 0) {
    errors.postcode = ["Postcode is required"]
  } else if (!validateUKPostcode(data.postcode)) {
    errors.postcode = ["Please enter a valid UK postcode (e.g. M1 1AA, SW1A 1AA)"]
  } else if (!isNorthWestPostcode(data.postcode)) {
    errors.postcode = [
      "We serve Manchester, Liverpool, Leeds and everywhere in between. Please contact us directly for other areas.",
    ]
  }

  if (!data.contactPhone || !validatePhone(data.contactPhone)) {
    errors.contactPhone = ["Please enter a valid UK phone number"]
  }

  if (!data.contactEmail || !validateEmail(data.contactEmail)) {
    errors.contactEmail = ["Please enter a valid email address"]
  }

  if (!data.staffTypeNeeded) {
    errors.staffTypeNeeded = ["Please select the type of staff needed"]
  }

  if (!data.numberOfStaff) {
    errors.numberOfStaff = ["Please specify the number of staff needed"]
  }

  if (!data.dateNeeded || !validateDate(data.dateNeeded)) {
    errors.dateNeeded = ["Please select a valid date (today or future)"]
  }

  if (!data.shiftType) {
    errors.shiftType = ["Please select a shift type"]
  }

  if (!data.startTime || !validateTime(data.startTime)) {
    errors.startTime = ["Please enter a valid start time (HH:MM format)"]
  }

  if (!data.endTime || !validateTime(data.endTime)) {
    errors.endTime = ["Please enter a valid end time (HH:MM format)"]
  }

  if (!data.urgencyLevel) {
    errors.urgencyLevel = ["Please select the urgency level"]
  }

  // Validate that end time is after start time
  if (data.startTime && data.endTime && validateTime(data.startTime) && validateTime(data.endTime)) {
    const [startHour, startMin] = data.startTime.split(":").map(Number)
    const [endHour, endMin] = data.endTime.split(":").map(Number)
    const startMinutes = startHour * 60 + startMin
    const endMinutes = endHour * 60 + endMin

    if (endMinutes <= startMinutes) {
      errors.endTime = ["End time must be after start time"]
    }
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
    const emailSubject = "Book Staff - URGENT Staffing Request"
    const emailTo = "info@fydelis-care.com"

    // Create HTML email content
    const emailHtml = `
      <h2 style="color: #dc2626;">🚨 URGENT STAFFING REQUEST</h2>
      
      <h3>Contact Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${data.fullName}</li>
        <li><strong>Job Title:</strong> ${data.jobTitle}</li>
        <li><strong>Organisation:</strong> ${data.organisationName}</li>
        <li><strong>Address:</strong> ${data.organisationAddress}</li>
        <li><strong>Postcode:</strong> ${data.postcode}</li>
        <li><strong>Phone:</strong> ${data.contactPhone}</li>
        <li><strong>Email:</strong> ${data.contactEmail}</li>
      </ul>

      <h3>Staffing Requirements:</h3>
      <ul>
        <li><strong>Staff Type:</strong> ${data.staffTypeNeeded}</li>
        <li><strong>Number of Staff:</strong> ${data.numberOfStaff}</li>
        <li><strong>Date Needed:</strong> ${data.dateNeeded}</li>
        <li><strong>Shift Type:</strong> ${data.shiftType}</li>
        <li><strong>Start Time:</strong> ${data.startTime}</li>
        <li><strong>End Time:</strong> ${data.endTime}</li>
        <li><strong>Urgency:</strong> <span style="color: #dc2626; font-weight: bold;">${data.urgencyLevel}</span></li>
      </ul>

      ${
        data.specificRequirements
          ? `
        <h3>Additional Requirements:</h3>
        <p>${data.specificRequirements}</p>
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
      replyTo: data.contactEmail,
    })

    // Always return success to the user, even if there was an email issue
    // This prevents exposing internal errors to users
    return {
      success: true,
      message:
        "Thank you! Your staffing request has been submitted. Our team will contact you within the hour for urgent requests, or within 2 hours for standard requests.",
    }
  } catch (error) {
    console.error("Error submitting staffing request:", error)

    return {
      success: false,
      message:
        "Sorry, there was an error submitting your request. Please try again or call us directly at 0333 090 9417.",
    }
  }
}
