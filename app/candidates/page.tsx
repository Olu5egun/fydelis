"use client"

import { Phone, Mail, Users, CheckCircle, Star, ArrowRight, UserPlus, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CandidatesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white pt-40">
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
                className="text-teal-600 font-medium text-lg"
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

            {/* Desktop CTA Placeholder - maintains spacing */}
            <div className="hidden md:flex">
              <div className="w-[180px]"></div>
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
                className={`block px-3 py-2 text-base font-medium text-teal-600 bg-teal-50 rounded-md transition-all duration-200 transform ${
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
      <section className="bg-gradient-to-br from-teal-400 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Join Our Team of <span className="text-lime-300">Healthcare Professionals</span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-teal-50">
                Take the next step in your healthcare career. Register with Fydelis Care and access flexible
                opportunities across care homes, residential facilities, and mental health services across Manchester,
                Liverpool, Leeds and everywhere in between.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold text-lg px-8 py-4"
                  asChild
                >
                  <a
                    href="https://fydeliscare.candidateportal.flo.co.uk/register"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <UserPlus className="w-6 h-6 mr-2" />
                    Register Now
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-teal-100">
                Or call us directly:{" "}
                <span className="text-teal-100 md:cursor-default">
                  <a href="tel:03330909417" className="md:pointer-events-none">
                    0333 090 9417
                  </a>
                </span>
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Happy healthcare professional"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-lime-400 text-gray-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5" />
                  <span className="font-semibold text-base">Join Our Team</span>
                </div>
                <p className="text-lg font-bold text-center">Start Today!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Work With Fydelis Care?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer competitive rates, flexible schedules, and ongoing support to help you thrive in your healthcare
              career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-teal-500">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-teal-500 mb-4" />
                <CardTitle>Competitive Rates</CardTitle>
                <CardDescription>Earn excellent hourly rates with weekly pay and transparent pricing</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-t-4 border-t-lime-500">
              <CardHeader>
                <Users className="w-12 h-12 text-lime-500 mb-4" />
                <CardTitle>Flexible Scheduling</CardTitle>
                <CardDescription>Choose shifts that work around your lifestyle and commitments</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-t-4 border-t-purple-500">
              <CardHeader>
                <Star className="w-12 h-12 text-purple-500 mb-4" />
                <CardTitle>Ongoing Support</CardTitle>
                <CardDescription>Dedicated support team available 24/7 to assist with any queries</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">What We're Looking For</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Qualified Professionals</h4>
                    <p className="text-gray-600">
                      Care assistants, nurses, and support workers with relevant qualifications
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Experience & Compassion</h4>
                    <p className="text-gray-600">Dedicated individuals with a passion for providing excellent care</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Right to Work</h4>
                    <p className="text-gray-600">Valid right to work in the UK with appropriate documentation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-lime-50 p-8 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Healthcare team collaboration"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-xl mb-6 text-teal-50">
            Join hundreds of healthcare professionals who trust Fydelis Care for their career development. Register
            today and start accessing opportunities immediately.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold text-lg px-8 py-4"
              asChild
            >
              <a
                href="https://fydeliscare.candidateportal.flo.co.uk/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UserPlus className="w-6 h-6 mr-2" />
                Register as a Candidate
                <ArrowRight className="w-6 h-6 ml-2" />
              </a>
            </Button>
          </div>

          <p className="mt-4 text-teal-100">
            Questions? Call us on{" "}
            <span className="text-teal-100 md:cursor-default">
              <a href="tel:03330909417" className="md:pointer-events-none">
                0333 090 9417
              </a>
            </span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4">
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
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
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

            <div className="md:col-span-1">
              <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
              <div className="space-y-2 text-gray-400">
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

            <div className="md:col-span-1">
              <h5 className="text-lg font-semibold mb-4">Legal</h5>
              <div className="space-y-2 text-gray-400">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fydelis Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
