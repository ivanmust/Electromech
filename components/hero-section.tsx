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
        <div className="absolute inset-0 bg-[url('/water-engineering-industrial-pipes-machinery.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-accent/30">
              🏆 11+ Years of Excellence in East Africa
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-balance mb-8 text-white drop-shadow-2xl leading-tight">
            Professional Water
            <span className="block text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Engineering Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/95 text-pretty mb-10 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            Electromech delivers comprehensive water engineering solutions across East Africa. From advanced water pumps
            and irrigation systems to swimming pools and industrial machinery, we serve public, private, and NGO clients
            with unmatched expertise and reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="text-xl px-10 py-8 bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-semibold rounded-xl"
              onClick={scrollToContact}
            >
              Get Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-xl px-10 py-8 bg-white/10 border-white/40 text-white hover:bg-white/20 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold rounded-xl"
              onClick={scrollToServices}
            >
              View Our Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏅</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">ISO Certified</h3>
              <p className="text-white/80 text-sm">Quality Assured</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">500+ Projects</h3>
              <p className="text-white/80 text-sm">Successfully Completed</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-white/80 text-sm">Always Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
