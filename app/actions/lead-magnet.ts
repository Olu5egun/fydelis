"use server"

export interface LeadMagnetData {
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
  experienceLevel: string
  currentStaffingProvider: string
  specificRequirements?: string
}

export interface LeadMagnetState {
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
    experienceLevel?: string[]
    currentStaffingProvider?: string[]
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

export async function submitLeadMagnet(prevState: LeadMagnetState, formData: FormData): Promise<LeadMagnetState> {
  // Extract form data
  const data: LeadMagnetData = {
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
    experienceLevel: formData.get("experienceLevel") as string,
    currentStaffingProvider: formData.get("currentStaffingProvider") as string,
    specificRequirements: formData.get("specificRequirements") as string,
  }

  // Validation
  const errors: LeadMagnetState["errors"] = {}

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

  if (!data.experienceLevel) {
    errors.experienceLevel = ["Please select the required experience level"]
  }

  if (!data.currentStaffingProvider) {
    errors.currentStaffingProvider = ["Please select your current staffing provider"]
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
    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real application, you would:
    // 1. Send an email to the lead magnet team
    // 2. Create a record in the database
    // 3. Send confirmation email to the client
    // 4. Integrate with CRM system
    // 5. Send lead magnet content (e.g., staffing guide PDF)

    // Example email content that would be sent:
    const emailContent = `
FREE SHIFT REQUEST - LEAD MAGNET

<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
  <tr style="background-color: #f0f0f0;">
    <th colspan="2" style="text-align: left; font-size: 18px; padding: 12px;">FREE SHIFT REQUEST - Contact Details</th>
  </tr>
  <tr>
    <td style="font-weight: bold; width: 30%;">Name:</td>
    <td>${data.fullName}</td>
  </tr>
  <tr>
    <td style="font-weight: bold;">Job Title:</td>
    <td>${data.jobTitle}</td>
  </tr>
  <tr>
    <td style="font-weight: bold;">Organisation:</td>
    <td>${data.organisationName}</td>
  </tr>
  <tr>
    <td style="font-weight: bold;">Address:</td>
    <td>${data.organisationAddress}</td>
  </tr>
  <tr>
    <td style="font-weight: bold;">Postcode:</td>
    <td>${data.postcode}</td>
  </tr>
  <tr>
    <td style="font-weight: bold;">Phone:</td>
    <td>${data.contactPhone}</td>
  </tr>
  <tr>
    <td style="font-weight: bold;">Email:</td>
    <td>${data.contactEmail}</td>
  </tr>
  
  <tr style="background-color: #f0f0f0;">
    <th colspan="2" style="text-align: left; font-size: 18px; padding: 12px;">Staffing Requirements</th>
  </tr>
  <tr>
    <td style="font-weight: bold;">Current Provider:</td>
    <td>${data.currentStaffingProvider}</td>
  </tr>
  <tr>
    <td style="font-weight: bold;">Staff Type:</td>
    <td>${data.staffTypeNeeded}</td>
  </tr>
  <tr>
    <td style="font-weight: bold;">Number of Staff:</td>
    <td>${data.numberOfStaff}</td>
  </tr>
  <tr>
    <td style="font-weight: bold;">Date Needed:</td>
    <td>${data.dateNeeded}</td>
  </tr>
  <tr>
    <td style="font-weight: bold;">Shift Type:</td>
    <td>${data.shiftType}</td>
  </tr>
  <tr>
    <td style="font-weight: bold;">Start Time:</td>
    <td>${data.startTime}</td>
  </tr>
  <tr>
    <td style="font-weight: bold;">End Time:</td>
    <td>${data.endTime}</td>
  </tr>
  <tr>
    <td style="font-weight: bold;">Urgency:</td>
    <td>${data.urgencyLevel}</td>
  </tr>
  <tr>
    <td style="font-weight: bold;">Experience Level:</td>
    <td>${data.experienceLevel}</td>
  </tr>
  
  ${
    data.specificRequirements
      ? `
  <tr style="background-color: #f0f0f0;">
    <th colspan="2" style="text-align: left; font-size: 18px; padding: 12px;">Additional Requirements</th>
  </tr>
  <tr>
    <td colspan="2">${data.specificRequirements}</td>
  </tr>
  `
      : ""
  }
  
  <tr style="background-color: #f0f0f0;">
    <th colspan="2" style="text-align: left; font-size: 18px; padding: 12px;">Submission Details</th>
  </tr>
  <tr>
    <td style="font-weight: bold;">Submitted at:</td>
    <td>${new Date().toISOString()}</td>
  </tr>
</table>

Email would be sent to: freeshifts@fydelis-care.com
`

    console.log("Lead magnet submission that would be sent:", emailContent)

    return {
      success: true,
      message:
        "Thank you! Your FREE shift request has been submitted. Our team will contact you within the hour for urgent requests, or within 2 hours for standard requests to arrange your complimentary staffing trial.",
    }
  } catch (error) {
    console.error("Error submitting lead magnet:", error)

    return {
      success: false,
      message:
        "Sorry, there was an error submitting your request. Please try again or call us directly at 07828173835.",
    }
  }
}
