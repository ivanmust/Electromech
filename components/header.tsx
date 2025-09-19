"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    }
    setIsMenuOpen(false) // Close mobile menu after navigation
  }

  const scrollToContact = () => scrollToSection("contact")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <div className="cursor-pointer group" onClick={() => scrollToSection("home")}>
              <Image
                src="/images/electromech-logo.jpg"
                alt="Electromech - Your Engineering Solutions"
                width={200}
                height={70}
                className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection("home")}
              className="text-base font-semibold hover:text-primary transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-base font-semibold hover:text-primary transition-colors relative group"
            >
              Our Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-base font-semibold hover:text-primary transition-colors relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-base font-semibold hover:text-primary transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Button className="ml-6 px-6 py-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300 font-semibold" onClick={scrollToContact}>
              Get Free Quote
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 border-t bg-background/95 backdrop-blur">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-4 py-3 text-base font-semibold hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-4 py-3 text-base font-semibold hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-3 text-base font-semibold hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-3 text-base font-semibold hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                Contact
              </button>
              <div className="px-4 py-3">
                <Button className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-primary/90" onClick={scrollToContact}>
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
