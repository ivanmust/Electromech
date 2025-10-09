"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/g.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <span className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-accent/20 text-accent-foreground rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 backdrop-blur-sm border border-accent/30">
              🏆 11+ Years of Excellence in Africa
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-balance mb-6 sm:mb-8 text-white drop-shadow-2xl leading-tight">
            Professional Water
            <span className="block text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              and Energy Solutions
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 text-pretty mb-8 sm:mb-10 max-w-5xl mx-auto leading-relaxed drop-shadow-lg font-medium px-2">
            Electromech delivers comprehensive water and energy solutions across Africa. From advanced water pumps
            and irrigation systems to swimming pools and industrial machinery, we serve public, private, and NGO clients
            with unmatched expertise and reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4">
            <Button
              size="lg"
              className="text-lg sm:text-xl px-6 sm:px-8 lg:px-10 py-6 sm:py-8 bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-semibold rounded-xl w-full sm:w-auto border-2 border-accent"
              onClick={scrollToContact}
            >
              Get Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg sm:text-xl px-6 sm:px-8 lg:px-10 py-6 sm:py-8 bg-success/10 border-success/60 text-success hover:bg-success/20 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold rounded-xl w-full sm:w-auto"
              onClick={scrollToServices}
            >
              View Our Services
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
            <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-success/30 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🏅</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">ISO Certified</h3>
              <p className="text-white/80 text-xs sm:text-sm">Quality Assured</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/30 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">📊</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">500+ Projects</h3>
              <p className="text-white/80 text-xs sm:text-sm">Successfully Completed</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/30 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🛠️</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">24/7 Support</h3>
              <p className="text-white/80 text-xs sm:text-sm">Always Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
