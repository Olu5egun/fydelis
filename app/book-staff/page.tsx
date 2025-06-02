"use client"

import { Phone, Mail, Calendar, Clock, Users, Send, Menu, X, CheckCircle, AlertCircle, MapPin } from "lucide-react"
import { useState } from "react"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { submitStaffingRequest, type StaffingRequestState } from "@/app/actions/book-staff"

const initialState: StaffingRequestState = {}

export default function BookStaffPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [state, formAction, isPending] = useActionState(submitStaffingRequest, initialState)

  return (
    <div className="min-h-screen bg-white pt-36 sm:pt-44 md:pt-52">
      {/* Header - Fixed */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1">
            <div className="flex items-center">
              <Link href="/">
                <img src="/images/fydelis-logo.png" alt="Fydelis Care Logo" className="h-32 sm:h-40 md:h-48 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              <Link href="/#services" className="text-gray-700 hover:text-teal-600 font-medium text-lg">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-teal-600 font-medium text-lg">
                About Us
              </Link>
              <Link href="/candidates" className="text-gray-700 hover:text-teal-600 font-medium text-lg">
                Candidates
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-teal-600 font-medium text-lg">
                Contact Us
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <Button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold" asChild>
                <Link href="/book-staff">
                  <Users className="w-5 h-5 mr-2" />
                  Request Staff Now
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`w-6 h-6 absolute transition-all duration-300 ${isMobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
                />
                <X
                  className={`w-6 h-6 absolute transition-all duration-300 ${isMobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden border-t border-gray-200 bg-white overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/#services"
                className={`block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-all duration-200 transform ${
                  isMobileMenuOpen ? "translate-x-0 opacity-100 delay-75" : "-translate-x-4 opacity-0"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-all duration-200 transform ${
                  isMobileMenuOpen ? "translate-x-0 opacity-100 delay-100" : "-translate-x-4 opacity-0"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/candidates"
                className={`block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-all duration-200 transform ${
                  isMobileMenuOpen ? "translate-x-0 opacity-100 delay-150" : "-translate-x-4 opacity-0"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Candidates
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-all duration-200 transform ${
                  isMobileMenuOpen ? "translate-x-0 opacity-100 delay-200" : "-translate-x-4 opacity-0"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div
                className={`px-3 py-2 border-t border-gray-200 mt-2 pt-2 transition-all duration-200 transform ${
                  isMobileMenuOpen ? "translate-x-0 opacity-100 delay-300" : "-translate-x-4 opacity-0"
                }`}
              >
                <div className="flex items-center text-teal-600 font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:07828173835">07828173835</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-400 to-teal-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Request <span className="text-lime-300">Healthcare Staff</span>
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-teal-50">
            Fill out the form below and our team will find qualified healthcare professionals for your organisation.
          </p>
          <p className="text-teal-100">
            Urgent requests? Call us directly:{" "}
            <span className="font-bold text-lime-300 hover:text-lime-200 md:cursor-default">
              <a href="tel:07828173835" className="md:pointer-events-none">
                07828173835
              </a>
            </span>
          </p>
          <Button className="mt-6 bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold text-lg px-8 py-4" asChild>
            <Link href="/book-staff">
              <Users className="w-6 h-6 mr-2" />
              Request Staff Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Staffing Request Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Staffing Request Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Staffing Request Form</CardTitle>
                  <p className="text-gray-600">
                    Complete this form to request healthcare staff for your organisation. We'll respond within the hour
                    for urgent requests.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Success/Error Messages */}
                  {state?.message && (
                    <Alert className={state.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
                      {state.success ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-red-600" />
                      )}
                      <AlertDescription className={state.success ? "text-green-800" : "text-red-800"}>
                        {state.message}
                      </AlertDescription>
                    </Alert>
                  )}

                  <form action={formAction} className="space-y-6">
                    {/* Contact Information Section */}
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {/* Full Name */}
                        <div>
                          <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                            Full Name *
                          </Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            type="text"
                            required
                            className={`mt-1 ${state?.errors?.fullName ? "border-red-500" : ""}`}
                            placeholder="Enter your full name"
                            disabled={isPending}
                          />
                          {state?.errors?.fullName && (
                            <p className="mt-1 text-sm text-red-600">{state.errors.fullName[0]}</p>
                          )}
                        </div>

                        {/* Job Title */}
                        <div>
                          <Label htmlFor="jobTitle" className="text-sm font-medium text-gray-700">
                            Your Job Title *
                          </Label>
                          <Input
                            id="jobTitle"
                            name="jobTitle"
                            type="text"
                            required
                            className={`mt-1 ${state?.errors?.jobTitle ? "border-red-500" : ""}`}
                            placeholder="e.g. Care Manager, Director"
                            disabled={isPending}
                          />
                          {state?.errors?.jobTitle && (
                            <p className="mt-1 text-sm text-red-600">{state.errors.jobTitle[0]}</p>
                          )}
                        </div>
                      </div>

                      <div className="mt-4">
                        {/* Organisation Name */}
                        <div className="mb-4">
                          <Label htmlFor="organisationName" className="text-sm font-medium text-gray-700">
                            Organisation Name *
                          </Label>
                          <Input
                            id="organisationName"
                            name="organisationName"
                            type="text"
                            required
                            className={`mt-1 ${state?.errors?.organisationName ? "border-red-500" : ""}`}
                            placeholder="Enter your organisation name"
                            disabled={isPending}
                          />
                          {state?.errors?.organisationName && (
                            <p className="mt-1 text-sm text-red-600">{state.errors.organisationName[0]}</p>
                          )}
                        </div>

                        {/* Organisation Address */}
                        <div className="mb-4">
                          <Label htmlFor="organisationAddress" className="text-sm font-medium text-gray-700">
                            Organisation Address *
                          </Label>
                          <Textarea
                            id="organisationAddress"
                            name="organisationAddress"
                            rows={3}
                            required
                            className={`mt-1 ${state?.errors?.organisationAddress ? "border-red-500" : ""}`}
                            placeholder="Enter the full address where staff will be working (street, city, etc.)"
                            disabled={isPending}
                          />
                          {state?.errors?.organisationAddress && (
                            <p className="mt-1 text-sm text-red-600">{state.errors.organisationAddress[0]}</p>
                          )}
                        </div>

                        {/* Postcode */}
                        <div>
                          <Label htmlFor="postcode" className="text-sm font-medium text-gray-700">
                            Postcode *
                          </Label>
                          <div className="relative">
                            <Input
                              id="postcode"
                              name="postcode"
                              type="text"
                              required
                              className={`mt-1 pl-10 ${state?.errors?.postcode ? "border-red-500" : ""}`}
                              placeholder="Enter postcode"
                              disabled={isPending}
                              style={{ textTransform: "uppercase" }}
                              maxLength={8}
                            />
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 mt-0.5" />
                          </div>
                          {state?.errors?.postcode && (
                            <p className="mt-1 text-sm text-red-600">{state.errors.postcode[0]}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        {/* Contact Phone */}
                        <div>
                          <Label htmlFor="contactPhone" className="text-sm font-medium text-gray-700">
                            Contact Phone *
                          </Label>
                          <Input
                            id="contactPhone"
                            name="contactPhone"
                            type="tel"
                            required
                            className={`mt-1 ${state?.errors?.contactPhone ? "border-red-500" : ""}`}
                            placeholder="Enter your phone number"
                            disabled={isPending}
                          />
                          {state?.errors?.contactPhone && (
                            <p className="mt-1 text-sm text-red-600">{state.errors.contactPhone[0]}</p>
                          )}
                        </div>

                        {/* Contact Email */}
                        <div>
                          <Label htmlFor="contactEmail" className="text-sm font-medium text-gray-700">
                            Contact Email *
                          </Label>
                          <Input
                            id="contactEmail"
                            name="contactEmail"
                            type="email"
                            required
                            className={`mt-1 ${state?.errors?.contactEmail ? "border-red-500" : ""}`}
                            placeholder="Enter your email address"
                            disabled={isPending}
                          />
                          {state?.errors?.contactEmail && (
                            <p className="mt-1 text-sm text-red-600">{state.errors.contactEmail[0]}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Staffing Requirements Section */}
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Staffing Requirements</h3>

                      <div className="grid md:grid-cols-2 gap-4">
                        {/* Staff Type Needed */}
                        <div>
                          <Label htmlFor="staffTypeNeeded" className="text-sm font-medium text-gray-700">
                            Type of Staff Needed *
                          </Label>
                          <Select name="staffTypeNeeded" required disabled={isPending}>
                            <SelectTrigger className={`mt-1 ${state?.errors?.staffTypeNeeded ? "border-red-500" : ""}`}>
                              <SelectValue placeholder="Select staff type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hca">Healthcare Assistant (HCA)</SelectItem>
                              <SelectItem value="senior-hca">Senior Healthcare Assistant</SelectItem>
                              <SelectItem value="sw">Support Worker (SW)</SelectItem>
                              <SelectItem value="rmn">Registered Mental Health Nurse (RMN)</SelectItem>
                              <SelectItem value="rgn">Registered General Nurse (RGN)</SelectItem>
                            </SelectContent>
                          </Select>
                          {state?.errors?.staffTypeNeeded && (
                            <p className="mt-1 text-sm text-red-600">{state.errors.staffTypeNeeded[0]}</p>
                          )}
                        </div>

                        {/* Number of Staff */}
                        <div>
                          <Label htmlFor="numberOfStaff" className="text-sm font-medium text-gray-700">
                            Number of Staff Needed *
                          </Label>
                          <Select name="numberOfStaff" required disabled={isPending}>
                            <SelectTrigger className={`mt-1 ${state?.errors?.numberOfStaff ? "border-red-500" : ""}`}>
                              <SelectValue placeholder="Select number" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Staff Member</SelectItem>
                              <SelectItem value="2">2 Staff Members</SelectItem>
                              <SelectItem value="3">3 Staff Members</SelectItem>
                              <SelectItem value="4">4 Staff Members</SelectItem>
                              <SelectItem value="5">5 Staff Members</SelectItem>
                              <SelectItem value="6+">6+ Staff Members</SelectItem>
                            </SelectContent>
                          </Select>
                          {state?.errors?.numberOfStaff && (
                            <p className="mt-1 text-sm text-red-600">{state.errors.numberOfStaff[0]}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        {/* Experience Level */}
                        <div>
                          <Label htmlFor="experienceLevel" className="text-sm font-medium text-gray-700">
                            Required Experience Level *
                          </Label>
                          <Select name="experienceLevel" required disabled={isPending}>
                            <SelectTrigger className={`mt-1 ${state?.errors?.experienceLevel ? "border-red-500" : ""}`}>
                              <SelectValue placeholder="Select experience level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="entry-level">Entry Level (0-1 years)</SelectItem>
                              <SelectItem value="experienced">Experienced (2-5 years)</SelectItem>
                              <SelectItem value="senior">Senior (5+ years)</SelectItem>
                              <SelectItem value="specialist">Specialist/Expert (10+ years)</SelectItem>
                              <SelectItem value="any">Any Experience Level</SelectItem>
                            </SelectContent>
                          </Select>
                          {state?.errors?.experienceLevel && (
                            <p className="mt-1 text-sm text-red-600">{state.errors.experienceLevel[0]}</p>
                          )}
                        </div>

                        {/* Urgency Level */}
                        <div>
                          <Label htmlFor="urgencyLevel" className="text-sm font-medium text-gray-700">
                            Urgency Level *
                          </Label>
                          <Select name="urgencyLevel" required disabled={isPending}>
                            <SelectTrigger className={`mt-1 ${state?.errors?.urgencyLevel ? "border-red-500" : ""}`}>
                              <SelectValue placeholder="Select urgency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="urgent">Urgent (Today/Tomorrow)</SelectItem>
                              <SelectItem value="asap">ASAP (Within 3 days)</SelectItem>
                              <SelectItem value="standard">Standard (Within 1 week)</SelectItem>
                              <SelectItem value="planned">Planned (1+ weeks)</SelectItem>
                            </SelectContent>
                          </Select>
                          {state?.errors?.urgencyLevel && (
                            <p className="mt-1 text-sm text-red-600">{state.errors.urgencyLevel[0]}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Shift Details Section */}
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Shift Details</h3>

                      <div className="grid md:grid-cols-2 gap-4">
                        {/* Date Needed */}
                        <div>
                          <Label htmlFor="dateNeeded" className="text-sm font-medium text-gray-700">
                            Date Needed *
                          </Label>
                          <Input
                            id="dateNeeded"
                            name="dateNeeded"
                            type="date"
                            required
                            className={`mt-1 ${state?.errors?.dateNeeded ? "border-red-500" : ""}`}
                            disabled={isPending}
                            min={new Date().toISOString().split("T")[0]}
                          />
                          {state?.errors?.dateNeeded && (
                            <p className="mt-1 text-sm text-red-600">{state.errors.dateNeeded[0]}</p>
                          )}
                        </div>

                        {/* Shift Type */}
                        <div>
                          <Label htmlFor="shiftType" className="text-sm font-medium text-gray-700">
                            Shift Type *
                          </Label>
                          <Select name="shiftType" required disabled={isPending}>
                            <SelectTrigger className={`mt-1 ${state?.errors?.shiftType ? "border-red-500" : ""}`}>
                              <SelectValue placeholder="Select shift type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="day-shift">Day Shift</SelectItem>
                              <SelectItem value="night-shift">Night Shift</SelectItem>
                            </SelectContent>
                          </Select>
                          {state?.errors?.shiftType && (
                            <p className="mt-1 text-sm text-red-600">{state.errors.shiftType[0]}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        {/* Start Time */}
                        <div>
                          <Label htmlFor="startTime" className="text-sm font-medium text-gray-700">
                            Start Time *
                          </Label>
                          <Select name="startTime" required disabled={isPending}>
                            <SelectTrigger className={`mt-1 ${state?.errors?.startTime ? "border-red-500" : ""}`}>
                              <SelectValue placeholder="Select start time" />
                            </SelectTrigger>
                            <SelectContent className="max-h-60">
                              <SelectItem value="00:00">00:00 (Midnight)</SelectItem>
                              <SelectItem value="00:15">00:15</SelectItem>
                              <SelectItem value="00:30">00:30</SelectItem>
                              <SelectItem value="00:45">00:45</SelectItem>
                              <SelectItem value="01:00">01:00</SelectItem>
                              <SelectItem value="01:15">01:15</SelectItem>
                              <SelectItem value="01:30">01:30</SelectItem>
                              <SelectItem value="01:45">01:45</SelectItem>
                              <SelectItem value="02:00">02:00</SelectItem>
                              <SelectItem value="02:15">02:15</SelectItem>
                              <SelectItem value="02:30">02:30</SelectItem>
                              <SelectItem value="02:45">02:45</SelectItem>
                              <SelectItem value="03:00">03:00</SelectItem>
                              <SelectItem value="03:15">03:15</SelectItem>
                              <SelectItem value="03:30">03:30</SelectItem>
                              <SelectItem value="03:45">03:45</SelectItem>
                              <SelectItem value="04:00">04:00</SelectItem>
                              <SelectItem value="04:15">04:15</SelectItem>
                              <SelectItem value="04:30">04:30</SelectItem>
                              <SelectItem value="04:45">04:45</SelectItem>
                              <SelectItem value="05:00">05:00</SelectItem>
                              <SelectItem value="05:15">05:15</SelectItem>
                              <SelectItem value="05:30">05:30</SelectItem>
                              <SelectItem value="05:45">05:45</SelectItem>
                              <SelectItem value="06:00">06:00</SelectItem>
                              <SelectItem value="06:15">06:15</SelectItem>
                              <SelectItem value="06:30">06:30</SelectItem>
                              <SelectItem value="06:45">06:45</SelectItem>
                              <SelectItem value="07:00">07:00</SelectItem>
                              <SelectItem value="07:15">07:15</SelectItem>
                              <SelectItem value="07:30">07:30</SelectItem>
                              <SelectItem value="07:45">07:45</SelectItem>
                              <SelectItem value="08:00">08:00</SelectItem>
                              <SelectItem value="08:15">08:15</SelectItem>
                              <SelectItem value="08:30">08:30</SelectItem>
                              <SelectItem value="08:45">08:45</SelectItem>
                              <SelectItem value="09:00">09:00</SelectItem>
                              <SelectItem value="09:15">09:15</SelectItem>
                              <SelectItem value="09:30">09:30</SelectItem>
                              <SelectItem value="09:45">09:45</SelectItem>
                              <SelectItem value="10:00">10:00</SelectItem>
                              <SelectItem value="10:15">10:15</SelectItem>
                              <SelectItem value="10:30">10:30</SelectItem>
                              <SelectItem value="10:45">10:45</SelectItem>
                              <SelectItem value="11:00">11:00</SelectItem>
                              <SelectItem value="11:15">11:15</SelectItem>
                              <SelectItem value="11:30">11:30</SelectItem>
                              <SelectItem value="11:45">11:45</SelectItem>
                              <SelectItem value="12:00">12:00 (Noon)</SelectItem>
                              <SelectItem value="12:15">12:15</SelectItem>
                              <SelectItem value="12:30">12:30</SelectItem>
                              <SelectItem value="12:45">12:45</SelectItem>
                              <SelectItem value="13:00">13:00</SelectItem>
                              <SelectItem value="13:15">13:15</SelectItem>
                              <SelectItem value="13:30">13:30</SelectItem>
                              <SelectItem value="13:45">13:45</SelectItem>
                              <SelectItem value="14:00">14:00</SelectItem>
                              <SelectItem value="14:15">14:15</SelectItem>
                              <SelectItem value="14:30">14:30</SelectItem>
                              <SelectItem value="14:45">14:45</SelectItem>
                              <SelectItem value="15:00">15:00</SelectItem>
                              <SelectItem value="15:15">15:15</SelectItem>
                              <SelectItem value="15:30">15:30</SelectItem>
                              <SelectItem value="15:45">15:45</SelectItem>
                              <SelectItem value="16:00">16:00</SelectItem>
                              <SelectItem value="16:15">16:15</SelectItem>
                              <SelectItem value="16:30">16:30</SelectItem>
                              <SelectItem value="16:45">16:45</SelectItem>
                              <SelectItem value="17:00">17:00</SelectItem>
                              <SelectItem value="17:15">17:15</SelectItem>
                              <SelectItem value="17:30">17:30</SelectItem>
                              <SelectItem value="17:45">17:45</SelectItem>
                              <SelectItem value="18:00">18:00</SelectItem>
                              <SelectItem value="18:15">18:15</SelectItem>
                              <SelectItem value="18:30">18:30</SelectItem>
                              <SelectItem value="18:45">18:45</SelectItem>
                              <SelectItem value="19:00">19:00</SelectItem>
                              <SelectItem value="19:15">19:15</SelectItem>
                              <SelectItem value="19:30">19:30</SelectItem>
                              <SelectItem value="19:45">19:45</SelectItem>
                              <SelectItem value="20:00">20:00</SelectItem>
                              <SelectItem value="20:15">20:15</SelectItem>
                              <SelectItem value="20:30">20:30</SelectItem>
                              <SelectItem value="20:45">20:45</SelectItem>
                              <SelectItem value="21:00">21:00</SelectItem>
                              <SelectItem value="21:15">21:15</SelectItem>
                              <SelectItem value="21:30">21:30</SelectItem>
                              <SelectItem value="21:45">21:45</SelectItem>
                              <SelectItem value="22:00">22:00</SelectItem>
                              <SelectItem value="22:15">22:15</SelectItem>
                              <SelectItem value="22:30">22:30</SelectItem>
                              <SelectItem value="22:45">22:45</SelectItem>
                              <SelectItem value="23:00">23:00</SelectItem>
                              <SelectItem value="23:15">23:15</SelectItem>
                              <SelectItem value="23:30">23:30</SelectItem>
                              <SelectItem value="23:45">23:45</SelectItem>
                            </SelectContent>
                          </Select>
                          {state?.errors?.startTime && (
                            <p className="mt-1 text-sm text-red-600">{state.errors.startTime[0]}</p>
                          )}
                        </div>

                        {/* End Time */}
                        <div>
                          <Label htmlFor="endTime" className="text-sm font-medium text-gray-700">
                            End Time *
                          </Label>
                          <Select name="endTime" required disabled={isPending}>
                            <SelectTrigger className={`mt-1 ${state?.errors?.endTime ? "border-red-500" : ""}`}>
                              <SelectValue placeholder="Select end time" />
                            </SelectTrigger>
                            <SelectContent className="max-h-60">
                              <SelectItem value="00:00">00:00 (Midnight)</SelectItem>
                              <SelectItem value="00:15">00:15</SelectItem>
                              <SelectItem value="00:30">00:30</SelectItem>
                              <SelectItem value="00:45">00:45</SelectItem>
                              <SelectItem value="01:00">01:00</SelectItem>
                              <SelectItem value="01:15">01:15</SelectItem>
                              <SelectItem value="01:30">01:30</SelectItem>
                              <SelectItem value="01:45">01:45</SelectItem>
                              <SelectItem value="02:00">02:00</SelectItem>
                              <SelectItem value="02:15">02:15</SelectItem>
                              <SelectItem value="02:30">02:30</SelectItem>
                              <SelectItem value="02:45">02:45</SelectItem>
                              <SelectItem value="03:00">03:00</SelectItem>
                              <SelectItem value="03:15">03:15</SelectItem>
                              <SelectItem value="03:30">03:30</SelectItem>
                              <SelectItem value="03:45">03:45</SelectItem>
                              <SelectItem value="04:00">04:00</SelectItem>
                              <SelectItem value="04:15">04:15</SelectItem>
                              <SelectItem value="04:30">04:30</SelectItem>
                              <SelectItem value="04:45">04:45</SelectItem>
                              <SelectItem value="05:00">05:00</SelectItem>
                              <SelectItem value="05:15">05:15</SelectItem>
                              <SelectItem value="05:30">05:30</SelectItem>
                              <SelectItem value="05:45">05:45</SelectItem>
                              <SelectItem value="06:00">06:00</SelectItem>
                              <SelectItem value="06:15">06:15</SelectItem>
                              <SelectItem value="06:30">06:30</SelectItem>
                              <SelectItem value="06:45">06:45</SelectItem>
                              <SelectItem value="07:00">07:00</SelectItem>
                              <SelectItem value="07:15">07:15</SelectItem>
                              <SelectItem value="07:30">07:30</SelectItem>
                              <SelectItem value="07:45">07:45</SelectItem>
                              <SelectItem value="08:00">08:00</SelectItem>
                              <SelectItem value="08:15">08:15</SelectItem>
                              <SelectItem value="08:30">08:30</SelectItem>
                              <SelectItem value="08:45">08:45</SelectItem>
                              <SelectItem value="09:00">09:00</SelectItem>
                              <SelectItem value="09:15">09:15</SelectItem>
                              <SelectItem value="09:30">09:30</SelectItem>
                              <SelectItem value="09:45">09:45</SelectItem>
                              <SelectItem value="10:00">10:00</SelectItem>
                              <SelectItem value="10:15">10:15</SelectItem>
                              <SelectItem value="10:30">10:30</SelectItem>
                              <SelectItem value="10:45">10:45</SelectItem>
                              <SelectItem value="11:00">11:00</SelectItem>
                              <SelectItem value="11:15">11:15</SelectItem>
                              <SelectItem value="11:30">11:30</SelectItem>
                              <SelectItem value="11:45">11:45</SelectItem>
                              <SelectItem value="12:00">12:00 (Noon)</SelectItem>
                              <SelectItem value="12:15">12:15</SelectItem>
                              <SelectItem value="12:30">12:30</SelectItem>
                              <SelectItem value="12:45">12:45</SelectItem>
                              <SelectItem value="13:00">13:00</SelectItem>
                              <SelectItem value="13:15">13:15</SelectItem>
                              <SelectItem value="13:30">13:30</SelectItem>
                              <SelectItem value="13:45">13:45</SelectItem>
                              <SelectItem value="14:00">14:00</SelectItem>
                              <SelectItem value="14:15">14:15</SelectItem>
                              <SelectItem value="14:30">14:30</SelectItem>
                              <SelectItem value="14:45">14:45</SelectItem>
                              <SelectItem value="15:00">15:00</SelectItem>
                              <SelectItem value="15:15">15:15</SelectItem>
                              <SelectItem value="15:30">15:30</SelectItem>
                              <SelectItem value="15:45">15:45</SelectItem>
                              <SelectItem value="16:00">16:00</SelectItem>
                              <SelectItem value="16:15">16:15</SelectItem>
                              <SelectItem value="16:30">16:30</SelectItem>
                              <SelectItem value="16:45">16:45</SelectItem>
                              <SelectItem value="17:00">17:00</SelectItem>
                              <SelectItem value="17:15">17:15</SelectItem>
                              <SelectItem value="17:30">17:30</SelectItem>
                              <SelectItem value="17:45">17:45</SelectItem>
                              <SelectItem value="18:00">18:00</SelectItem>
                              <SelectItem value="18:15">18:15</SelectItem>
                              <SelectItem value="18:30">18:30</SelectItem>
                              <SelectItem value="18:45">18:45</SelectItem>
                              <SelectItem value="19:00">19:00</SelectItem>
                              <SelectItem value="19:15">19:15</SelectItem>
                              <SelectItem value="19:30">19:30</SelectItem>
                              <SelectItem value="19:45">19:45</SelectItem>
                              <SelectItem value="20:00">20:00</SelectItem>
                              <SelectItem value="20:15">20:15</SelectItem>
                              <SelectItem value="20:30">20:30</SelectItem>
                              <SelectItem value="20:45">20:45</SelectItem>
                              <SelectItem value="21:00">21:00</SelectItem>
                              <SelectItem value="21:15">21:15</SelectItem>
                              <SelectItem value="21:30">21:30</SelectItem>
                              <SelectItem value="21:45">21:45</SelectItem>
                              <SelectItem value="22:00">22:00</SelectItem>
                              <SelectItem value="22:15">22:15</SelectItem>
                              <SelectItem value="22:30">22:30</SelectItem>
                              <SelectItem value="22:45">22:45</SelectItem>
                              <SelectItem value="23:00">23:00</SelectItem>
                              <SelectItem value="23:15">23:15</SelectItem>
                              <SelectItem value="23:30">23:30</SelectItem>
                              <SelectItem value="23:45">23:45</SelectItem>
                            </SelectContent>
                          </Select>
                          {state?.errors?.startTime && (
                            <p className="mt-1 text-sm text-red-600">{state.errors.startTime[0]}</p>
                          )}
                        </div>

                        {/* End Time */}
                        <div>
                          <Label htmlFor="endTime" className="text-sm font-medium text-gray-700">
                            End Time *
                          </Label>
                          <Select name="endTime" required disabled={isPending}>
                            <SelectTrigger className={`mt-1 ${state?.errors?.endTime ? "border-red-500" : ""}`}>
                              <SelectValue placeholder="Select end time" />
                            </SelectTrigger>
                            <SelectContent className="max-h-60">
                              <SelectItem value="00:00">00:00 (Midnight)</SelectItem>
                              <SelectItem value="00:15">00:15</SelectItem>
                              <SelectItem value="00:30">00:30</SelectItem>
                              <SelectItem value="00:45">00:45</SelectItem>
                              <SelectItem value="01:00">01:00</SelectItem>
                              <SelectItem value="01:15">01:15</SelectItem>
                              <SelectItem value="01:30">01:30</SelectItem>
                              <SelectItem value="01:45">01:45</SelectItem>
                              <SelectItem value="02:00">02:00</SelectItem>
                              <SelectItem value="02:15">02:15</SelectItem>
                              <SelectItem value="02:30">02:30</SelectItem>
                              <SelectItem value="02:45">02:45</SelectItem>
                              <SelectItem value="03:00">03:00</SelectItem>
                              <SelectItem value="03:15">03:15</SelectItem>
                              <SelectItem value="03:30">03:30</SelectItem>
                              <SelectItem value="03:45">03:45</SelectItem>
                              <SelectItem value="04:00">04:00</SelectItem>
                              <SelectItem value="04:15">04:15</SelectItem>
                              <SelectItem value="04:30">04:30</SelectItem>
                              <SelectItem value="04:45">04:45</SelectItem>
                              <SelectItem value="05:00">05:00</SelectItem>
                              <SelectItem value="05:15">05:15</SelectItem>
                              <SelectItem value="05:30">05:30</SelectItem>
                              <SelectItem value="05:45">05:45</SelectItem>
                              <SelectItem value="06:00">06:00</SelectItem>
                              <SelectItem value="06:15">06:15</SelectItem>
                              <SelectItem value="06:30">06:30</SelectItem>
                              <SelectItem value="06:45">06:45</SelectItem>
                              <SelectItem value="07:00">07:00</SelectItem>
                              <SelectItem value="07:15">07:15</SelectItem>
                              <SelectItem value="07:30">07:30</SelectItem>
                              <SelectItem value="07:45">07:45</SelectItem>
                              <SelectItem value="08:00">08:00</SelectItem>
                              <SelectItem value="08:15">08:15</SelectItem>
                              <SelectItem value="08:30">08:30</SelectItem>
                              <SelectItem value="08:45">08:45</SelectItem>
                              <SelectItem value="09:00">09:00</SelectItem>
                              <SelectItem value="09:15">09:15</SelectItem>
                              <SelectItem value="09:30">09:30</SelectItem>
                              <SelectItem value="09:45">09:45</SelectItem>
                              <SelectItem value="10:00">10:00</SelectItem>
                              <SelectItem value="10:15">10:15</SelectItem>
                              <SelectItem value="10:30">10:30</SelectItem>
                              <SelectItem value="10:45">10:45</SelectItem>
                              <SelectItem value="11:00">11:00</SelectItem>
                              <SelectItem value="11:15">11:15</SelectItem>
                              <SelectItem value="11:30">11:30</SelectItem>
                              <SelectItem value="11:45">11:45</SelectItem>
                              <SelectItem value="12:00">12:00 (Noon)</SelectItem>
                              <SelectItem value="12:15">12:15</SelectItem>
                              <SelectItem value="12:30">12:30</SelectItem>
                              <SelectItem value="12:45">12:45</SelectItem>
                              <SelectItem value="13:00">13:00</SelectItem>
                              <SelectItem value="13:15">13:15</SelectItem>
                              <SelectItem value="13:30">13:30</SelectItem>
                              <SelectItem value="13:45">13:45</SelectItem>
                              <SelectItem value="14:00">14:00</SelectItem>
                              <SelectItem value="14:15">14:15</SelectItem>
                              <SelectItem value="14:30">14:30</SelectItem>
                              <SelectItem value="14:45">14:45</SelectItem>
                              <SelectItem value="15:00">15:00</SelectItem>
                              <SelectItem value="15:15">15:15</SelectItem>
                              <SelectItem value="15:30">15:30</SelectItem>
                              <SelectItem value="15:45">15:45</SelectItem>
                              <SelectItem value="16:00">16:00</SelectItem>
                              <SelectItem value="16:15">16:15</SelectItem>
                              <SelectItem value="16:30">16:30</SelectItem>
                              <SelectItem value="16:45">16:45</SelectItem>
                              <SelectItem value="17:00">17:00</SelectItem>
                              <SelectItem value="17:15">17:15</SelectItem>
                              <SelectItem value="17:30">17:30</SelectItem>
                              <SelectItem value="17:45">17:45</SelectItem>
                              <SelectItem value="18:00">18:00</SelectItem>
                              <SelectItem value="18:15">18:15</SelectItem>
                              <SelectItem value="18:30">18:30</SelectItem>
                              <SelectItem value="18:45">18:45</SelectItem>
                              <SelectItem value="19:00">19:00</SelectItem>
                              <SelectItem value="19:15">19:15</SelectItem>
                              <SelectItem value="19:30">19:30</SelectItem>
                              <SelectItem value="19:45">19:45</SelectItem>
                              <SelectItem value="20:00">20:00</SelectItem>
                              <SelectItem value="20:15">20:15</SelectItem>
                              <SelectItem value="20:30">20:30</SelectItem>
                              <SelectItem value="20:45">20:45</SelectItem>
                              <SelectItem value="21:00">21:00</SelectItem>
                              <SelectItem value="21:15">21:15</SelectItem>
                              <SelectItem value="21:30">21:30</SelectItem>
                              <SelectItem value="21:45">21:45</SelectItem>
                              <SelectItem value="22:00">22:00</SelectItem>
                              <SelectItem value="22:15">22:15</SelectItem>
                              <SelectItem value="22:30">22:30</SelectItem>
                              <SelectItem value="22:45">22:45</SelectItem>
                              <SelectItem value="23:00">23:00</SelectItem>
                              <SelectItem value="23:15">23:15</SelectItem>
                              <SelectItem value="23:30">23:30</SelectItem>
                              <SelectItem value="23:45">23:45</SelectItem>
                            </SelectContent>
                          </Select>
                          {state?.errors?.endTime && (
                            <p className="mt-1 text-sm text-red-600">{state.errors.endTime[0]}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Additional Requirements */}
                    <div>
                      <Label htmlFor="specificRequirements" className="text-sm font-medium text-gray-700">
                        Specific Requirements or Additional Notes
                      </Label>
                      <Textarea
                        id="specificRequirements"
                        name="specificRequirements"
                        rows={4}
                        className="mt-1"
                        placeholder="Any specific qualifications, experience, or requirements for this role..."
                        disabled={isPending}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold text-lg px-8 py-4 disabled:opacity-50"
                      disabled={isPending}
                    >
                      {isPending ? (
                        <>
                          <div className="w-5 h-5 mr-2 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                          Submitting Request...
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6 mr-2" />
                          Submit Staffing Request
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Information Sidebar */}
            <div className="space-y-6">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Service Area</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-teal-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Manchester, Liverpool, Leeds & Everywhere In Between
                      </h4>
                      <p className="text-sm text-gray-600">
                        Serving the North West and West Yorkshire regions with comprehensive healthcare staffing
                        solutions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Response Times</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-red-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Urgent Requests</h4>
                      <p className="text-sm text-gray-600">Response within 1 hour</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Calendar className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">ASAP Requests</h4>
                      <p className="text-sm text-gray-600">Response within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-teal-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Standard Requests</h4>
                      <p className="text-sm text-gray-600">Response within 4 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-teal-50 to-lime-50 border-teal-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Need immediate assistance? Call us now for urgent staffing needs.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 hover:bg-gray-50 text-gray-900 font-semibold text-lg px-8 py-4 md:pointer-events-none md:cursor-default"
                    asChild
                  >
                    <a href="tel:07828173835" className="md:pointer-events-none">
                      <Phone className="w-6 h-6 mr-2" />
                      Call Now: 07828173835
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-3">
            <div className="md:col-span-1">
              <div className="mb-0 max-w-[120px]">
                <img src="/images/fydelis-logo.png" alt="Fydelis Care Logo" className="h-18 w-auto" />
              </div>
              <p className="text-gray-400 text-sm">
                Matching you with reliable health & social care professionals across Manchester, Liverpool, Leeds and
                everywhere in between.
              </p>
            </div>

            <div className="md:col-span-1">
              <h5 className="text-lg font-semibold mb-3">Quick Links</h5>
              <ul className="space-y-1 text-gray-400">
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/candidates" className="hover:text-white transition-colors">
                    Candidates
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-3">Contact Info</h5>
              <div className="space-y-1 text-gray-400">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="hover:text-white md:cursor-default">
                    <a href="tel:07828173835" className="md:pointer-events-none">
                      07828173835
                    </a>
                  </span>
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:info@fydelis-care.com" className="hover:text-white">
                    info@fydelis-care.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
            <p>&copy; 2024 Fydelis Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
