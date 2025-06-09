"use client"

import { Phone, Mail, Users, Menu, X, CheckCircle, AlertCircle, Copy, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

export default function EmailSetupPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [gmailUser, setGmailUser] = useState("")
  const [gmailPassword, setGmailPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [copied, setCopied] = useState(false)

  const generateEnvConfig = () => {
    return `GMAIL_USER=${gmailUser}
GMAIL_APP_PASSWORD=${gmailPassword}`
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateEnvConfig())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const isFormValid = gmailUser.includes("@gmail.com") && gmailPassword.length === 16

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
            Email Setup <span className="text-lime-300">Configuration</span>
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-teal-50">
            Configure your Gmail credentials to enable email functionality for the Fydelis Care website.
          </p>
        </div>
      </section>

      {/* Email Setup Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Email Setup Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Gmail Configuration</CardTitle>
                  <p className="text-gray-600">
                    Enter your Gmail credentials to set up email functionality. Make sure you've created a Gmail App
                    Password first.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-6">
                    {/* Gmail User */}
                    <div>
                      <Label htmlFor="gmailUser" className="text-sm font-medium text-gray-700">
                        Gmail Address *
                      </Label>
                      <Input
                        id="gmailUser"
                        name="gmailUser"
                        type="email"
                        required
                        className="mt-1"
                        placeholder="your-email@gmail.com"
                        value={gmailUser}
                        onChange={(e) => setGmailUser(e.target.value)}
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        This should be the Gmail address you want to send emails from
                      </p>
                    </div>

                    {/* Gmail App Password */}
                    <div>
                      <Label htmlFor="gmailPassword" className="text-sm font-medium text-gray-700">
                        Gmail App Password *
                      </Label>
                      <div className="relative">
                        <Input
                          id="gmailPassword"
                          name="gmailPassword"
                          type={showPassword ? "text" : "password"}
                          required
                          className="mt-1 pr-10"
                          placeholder="16-character app password"
                          value={gmailPassword}
                          onChange={(e) => setGmailPassword(e.target.value.replace(/\s/g, ""))}
                          maxLength={16}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </button>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        16-character password from Google App Passwords (no spaces)
                      </p>
                      {gmailPassword.length > 0 && gmailPassword.length !== 16 && (
                        <p className="mt-1 text-sm text-red-600">App password must be exactly 16 characters</p>
                      )}
                    </div>

                    {/* Generated Environment Variables */}
                    {isFormValid && (
                      <div className="mt-6">
                        <Label className="text-sm font-medium text-gray-700">Environment Variables</Label>
                        <div className="mt-2 relative">
                          <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono overflow-x-auto">
                            {generateEnvConfig()}
                          </pre>
                          <Button
                            type="button"
                            size="sm"
                            className="absolute top-2 right-2 bg-gray-600 hover:bg-gray-700 text-white"
                            onClick={copyToClipboard}
                          >
                            {copied ? (
                              <>
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4 mr-1" />
                                Copy
                              </>
                            )}
                          </Button>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Copy these environment variables and add them to your project's environment configuration.
                        </p>
                      </div>
                    )}

                    {/* Validation Status */}
                    {gmailUser && gmailPassword && (
                      <Alert
                        className={isFormValid ? "border-green-200 bg-green-50" : "border-yellow-200 bg-yellow-50"}
                      >
                        {isFormValid ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-yellow-600" />
                        )}
                        <AlertDescription className={isFormValid ? "text-green-800" : "text-yellow-800"}>
                          {isFormValid
                            ? "Configuration looks good! Copy the environment variables above."
                            : "Please check that your Gmail address is valid and the app password is exactly 16 characters."}
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Instructions Sidebar */}
            <div className="space-y-6">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Setup Instructions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Enable 2FA</h4>
                        <p className="text-sm text-gray-600">
                          Go to your Google Account and enable 2-Factor Authentication if not already enabled
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Create App Password</h4>
                        <p className="text-sm text-gray-600">
                          Go to Security → 2-Step Verification → App passwords and create a new password for "Mail"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Enter Details</h4>
                        <p className="text-sm text-gray-600">
                          Enter your Gmail address and the 16-character app password in the form
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Copy & Configure</h4>
                        <p className="text-sm text-gray-600">
                          Copy the generated environment variables and add them to your project
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-teal-50 to-lime-50 border-teal-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Having trouble setting up Gmail App Passwords? Check Google's official documentation or contact
                    support.
                  </p>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white" asChild>
                    <a
                      href="https://support.google.com/accounts/answer/185833"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google App Passwords Guide
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
