"use client"

import { Phone, Mail, Heart, Users, Award, Clock, CheckCircle, Star, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function AboutPage() {
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
              <Link href="/#services" className="text-gray-700 hover:text-teal-600 font-medium text-lg">
                Services
              </Link>
              <Link href="/about" className="text-teal-600 font-medium text-lg">
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
            className={`md:hidden border-t border-gray-200 bg-white overflow-hidden transition-all duration-300 ease-in-out ${
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
                className={`block px-3 py-2 text-base font-medium text-teal-600 bg-teal-50 rounded-md transition-all duration-200 transform ${
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
                <div className="flex items-center text-gray-700">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Born from <span className="text-lime-300">Compassion</span>, Built on{" "}
                <span className="text-lime-300">Experience</span>
              </h1>
              <p className="text-lg sm:text-xl mb-6 text-teal-50">
                Fydelis Care was founded by experienced nurses who understood the challenges facing healthcare
                organisations. With decades of frontline experience, we know what it takes to deliver exceptional care
                across Manchester, Liverpool, Leeds and everywhere in between.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold text-lg px-8 py-4"
                  asChild
                >
                  <Link href="/book-staff">
                    <Users className="w-6 h-6 mr-2" />
                    Request Staff Now
                  </Link>
                </Button>
              </div>
              <p className="mt-4 text-teal-100">
                Or call us directly:{" "}
                <span className="text-teal-100 md:cursor-default">
                  <a href="tel:07828173835" className="md:pointer-events-none">
                    07828173835
                  </a>
                </span>
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Care worker helping elderly person"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-lime-400 text-gray-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold text-base">Decades Of Experience</span>
                </div>
                <p className="text-lg font-bold text-center">Caring Since Day One</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="bg-gradient-to-br from-teal-50 to-lime-50 p-6 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Care team supporting elderly residents"
                className="rounded-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Fydelis Care was born from a simple yet powerful vision: to bridge the gap between healthcare
                  organisations in need and the exceptional professionals who dedicate their lives to caring for others.
                </p>
                <p className="text-lg">
                  Our founders, seasoned nurses with over{" "}
                  <span className="font-semibold text-teal-600">30 years of combined experience</span>, witnessed
                  firsthand the staffing challenges that plague the healthcare sector. They saw how these shortages
                  affected not just operations, but the quality of care that vulnerable people receive.
                </p>
                <p className="text-lg">
                  Drawing from their deep understanding of both clinical excellence and operational needs, they created
                  Fydelis Care - a staffing agency that doesn't just fill positions, but
                  <span className="font-semibold text-teal-600"> matches hearts with purpose</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every decision we make is guided by the values that our nursing founders instilled from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-teal-500 bg-white">
              <CardHeader className="pb-2">
                <Heart className="w-10 h-10 text-teal-500 mb-2" />
                <CardTitle>Compassion First</CardTitle>
                <CardDescription>
                  We understand that behind every staffing need is a person who deserves the best care possible. Our
                  compassionate approach ensures we never lose sight of the human element.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-t-4 border-t-lime-500 bg-white">
              <CardHeader className="pb-2">
                <Award className="w-10 h-10 text-lime-500 mb-2" />
                <CardTitle>Clinical Excellence</CardTitle>
                <CardDescription>
                  With nursing expertise at our core, we know what exceptional healthcare looks like. We only work with
                  professionals who share our commitment to clinical excellence.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-t-4 border-t-purple-500 bg-white">
              <CardHeader className="pb-2">
                <Users className="w-10 h-10 text-purple-500 mb-2" />
                <CardTitle>Partnership Approach</CardTitle>
                <CardDescription>
                  We're not just a staffing agency - we're your partners in care. We take time to understand your unique
                  needs and culture to ensure perfect matches.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience & Expertise Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Experience You Can Trust
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Our leadership team brings together decades of hands-on nursing experience across multiple healthcare
                settings. This isn't just business for us - it's personal.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">30+ Years Combined Nursing Experience</h4>
                    <p className="text-gray-600">
                      Our founders have worked in care homes, hospitals, and mental health facilities
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Deep Understanding of Care Standards</h4>
                    <p className="text-gray-600">
                      We know what excellent care looks like because we've delivered it ourselves
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Proven Track Record</h4>
                    <p className="text-gray-600">
                      Hundreds of successful placements with consistently positive feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-lime-50 p-6 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Care workers in residential home setting"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Why Healthcare Organisations Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you work with Fydelis Care, you're not just getting staff - you're getting partners who understand
              your world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white border-l-4 border-l-teal-500">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-3">
                  <Clock className="w-8 h-8 text-teal-500" />
                  <CardTitle>Rapid Response</CardTitle>
                </div>
                <CardDescription className="text-base">
                  We understand that staffing emergencies can't wait. Our 24/7 availability means we're here when you
                  need us most, with qualified professionals ready to step in at short notice.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-l-4 border-l-lime-500">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-3">
                  <Star className="w-8 h-8 text-lime-500" />
                  <CardTitle>Quality Assurance</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Every professional in our network is thoroughly vetted by our nursing team. We don't just check
                  qualifications - we assess character, compassion, and commitment to care.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Experience the Fydelis Care Difference?
          </h2>
          <p className="text-xl mb-6 text-teal-50">
            Let our experienced team help you find the compassionate, qualified professionals your organisation needs.
            Because when it comes to care, experience matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold text-lg px-8 py-4"
              asChild
            >
              <Link href="/book-staff">
                <Users className="w-6 h-6 mr-2" />
                Request Staff Now
              </Link>
            </Button>
          </div>

          <p className="mt-4 text-teal-100">
            Speak with our nursing-led team:{" "}
            <span className="text-teal-100 md:cursor-default">
              <a href="tel:07828173835" className="md:pointer-events-none">
                07828173835
              </a>
            </span>
          </p>
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

            <div className="md:col-span-1">
              <h5 className="text-lg font-semibold mb-3">Contact Info</h5>
              <div className="space-y-1 text-gray-400">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-gray-400 md:cursor-default">
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

            <div className="md:col-span-1"></div>
          </div>

          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
            <p>&copy; 2024 Fydelis Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
