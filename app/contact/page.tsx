"use client"

import { Phone, Mail, MapPin, Send, Menu, X, CheckCircle, AlertCircle, Users } from "lucide-react"
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
import { submitContactForm, type ContactFormState } from "@/app/actions/contact"

const initialState: ContactFormState = {}

export default function ContactPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

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
              <Link href="/contact" className="text-teal-600 font-medium text-lg">
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
                className={`block px-3 py-2 text-base font-medium text-teal-600 bg-teal-50 rounded-md transition-all duration-200 transform ${
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
                <div className="flex items-center text-gray-700">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:03330909417">0333 090 9417</a>
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
            Get in <span className="text-lime-300">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-teal-50">
            Ready to discuss your staffing needs or start your healthcare career? We're here to help.
          </p>
          <p className="text-teal-100">
            Call us directly:{" "}
            <span className="text-teal-100 md:cursor-default">
              <a href="tel:03330909417" className="md:pointer-events-none">
                0333 090 9417
              </a>
            </span>
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
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
                    {state?.errors?.fullName && <p className="mt-1 text-sm text-red-600">{state.errors.fullName[0]}</p>}
                  </div>

                  {/* Contact Type */}
                  <div>
                    <Label htmlFor="contactType" className="text-sm font-medium text-gray-700">
                      I am contacting as *
                    </Label>
                    <Select name="contactType" required disabled={isPending}>
                      <SelectTrigger className={`mt-1 ${state?.errors?.contactType ? "border-red-500" : ""}`}>
                        <SelectValue placeholder="Select contact type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="organisation">An Organisation</SelectItem>
                        <SelectItem value="candidate">A Candidate</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {state?.errors?.contactType && (
                      <p className="mt-1 text-sm text-red-600">{state.errors.contactType[0]}</p>
                    )}
                  </div>

                  {/* Organisation Name (conditional) */}
                  <div>
                    <Label htmlFor="organisationName" className="text-sm font-medium text-gray-700">
                      Organisation Name
                    </Label>
                    <Input
                      id="organisationName"
                      name="organisationName"
                      type="text"
                      className="mt-1"
                      placeholder="Enter your organisation name (if applicable)"
                      disabled={isPending}
                    />
                  </div>

                  {/* Reason for Contact */}
                  <div>
                    <Label htmlFor="reason" className="text-sm font-medium text-gray-700">
                      Reason for Contact *
                    </Label>
                    <Select name="reason" required disabled={isPending}>
                      <SelectTrigger className={`mt-1 ${state?.errors?.reason ? "border-red-500" : ""}`}>
                        <SelectValue placeholder="Select reason for contact" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="staffing-enquiry">Staffing Enquiry</SelectItem>
                        <SelectItem value="candidate-registration">Candidate Registration</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="general-enquiry">General Enquiry</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {state?.errors?.reason && <p className="mt-1 text-sm text-red-600">{state.errors.reason[0]}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className={`mt-1 ${state?.errors?.phone ? "border-red-500" : ""}`}
                      placeholder="Enter your phone number"
                      disabled={isPending}
                    />
                    {state?.errors?.phone && <p className="mt-1 text-sm text-red-600">{state.errors.phone[0]}</p>}
                  </div>

                  {/* Email Address */}
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={`mt-1 ${state?.errors?.email ? "border-red-500" : ""}`}
                      placeholder="Enter your email address"
                      disabled={isPending}
                    />
                    {state?.errors?.email && <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1"
                      placeholder="Tell us more about your enquiry..."
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
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-6 h-6 text-teal-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">
                        <span className="text-gray-600 md:cursor-default">
                          <a href="tel:03330909417" className="md:pointer-events-none">
                            0333 090 9417
                          </a>
                        </span>
                      </p>
                      <p className="text-sm text-gray-500">Available 24/7 for urgent staffing needs</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-6 h-6 text-teal-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">
                        <a href="mailto:info@fydelis-care.com" className="hover:text-teal-600">
                          info@fydelis-care.com
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-teal-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Service Area</h4>
                      <p className="text-gray-600">Manchester, Liverpool, Leeds & Everywhere In Between</p>
                      <p className="text-sm text-gray-500">North West England and West Yorkshire regions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-teal-50 to-lime-50 border-teal-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Quick Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Need immediate assistance? Our team is available 24/7 for urgent staffing requirements.
                  </p>
                  <div className="w-full text-center text-gray-700 text-lg px-8 py-4">
                    <Phone className="w-6 h-6 mr-2 inline" />
                    <a href="tel:03330909417" className="md:pointer-events-none">
                      Call Now: 0333 090 9417
                    </a>
                  </div>
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
                  <span className="text-gray-400 md:cursor-default">
                    <a href="tel:03330909417" className="md:pointer-events-none">
                      0333 090 9417
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
