"use client"

import { Phone, Mail, Users, Menu, X, CheckCircle, AlertCircle, Send } from "lucide-react"
import { useState } from "react"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { testEmailAction, type TestEmailState } from "@/app/actions/test-email"

const initialState: TestEmailState = {}

export default function TestEmailPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [state, formAction, isPending] = useActionState(testEmailAction, initialState)

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
              <Link
                href="/#services"
                className="text-gray-700 hover:text-teal-600 font-medium text-lg"
                onClick={() => window.scrollTo(0, 0)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-teal-600 font-medium text-lg"
                onClick={() => window.scrollTo(0, 0)}
              >
                About Us
              </Link>
              <Link
                href="/candidates"
                className="text-gray-700 hover:text-teal-600 font-medium text-lg"
                onClick={() => window.scrollTo(0, 0)}
              >
                Candidates
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-teal-600 font-medium text-lg"
                onClick={() => window.scrollTo(0, 0)}
              >
                Contact Us
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <Button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold" asChild>
                <Link href="/book-staff" onClick={() => window.scrollTo(0, 0)}>
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
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  window.scrollTo(0, 0)
                }}
              >
                Services
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-all duration-200 transform ${
                  isMobileMenuOpen ? "translate-x-0 opacity-100 delay-100" : "-translate-x-4 opacity-0"
                }`}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  window.scrollTo(0, 0)
                }}
              >
                About Us
              </Link>
              <Link
                href="/candidates"
                className={`block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-all duration-200 transform ${
                  isMobileMenuOpen ? "translate-x-0 opacity-100 delay-150" : "-translate-x-4 opacity-0"
                }`}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  window.scrollTo(0, 0)
                }}
              >
                Candidates
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-all duration-200 transform ${
                  isMobileMenuOpen ? "translate-x-0 opacity-100 delay-200" : "-translate-x-4 opacity-0"
                }`}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  window.scrollTo(0, 0)
                }}
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
            Email <span className="text-lime-300">Test</span>
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-teal-50">
            Test the email functionality to make sure everything is working correctly.
          </p>
        </div>
      </section>

      {/* Email Test Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Test Email System</CardTitle>
              <p className="text-gray-600">
                Send a test email to verify that your Gmail configuration is working properly.
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
                {/* Test Email Address */}
                <div>
                  <Label htmlFor="testEmail" className="text-sm font-medium text-gray-700">
                    Send Test Email To *
                  </Label>
                  <Input
                    id="testEmail"
                    name="testEmail"
                    type="email"
                    required
                    className="mt-1"
                    placeholder="Enter email address to test"
                    disabled={isPending}
                  />
                  <p className="mt-1 text-sm text-gray-500">Enter your own email address to receive the test email</p>
                </div>

                {/* Subject */}
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject (Optional)
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    className="mt-1"
                    placeholder="Test Email - Fydelis Care"
                    disabled={isPending}
                  />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Test Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1"
                    placeholder="Enter a test message..."
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
                      Sending Test Email...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 mr-2" />
                      Send Test Email
                    </>
                  )}
                </Button>
              </form>

              {/* Instructions */}
              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Before Testing:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Make sure you've set up your GMAIL_USER environment variable</li>
                  <li>• Make sure you've set up your GMAIL_APP_PASSWORD environment variable</li>
                  <li>• The app password should be 16 characters from Google App Passwords</li>
                  <li>• Enter your own email address to receive the test email</li>
                </ul>
              </div>
            </CardContent>
          </Card>
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
                  <Link
                    href="/#services"
                    className="hover:text-white transition-colors"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/candidates"
                    className="hover:text-white transition-colors"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Candidates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                    onClick={() => window.scrollTo(0, 0)}
                  >
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
