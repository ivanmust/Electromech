import { Facebook, Twitter, Instagram, Linkedin, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">ELECTROMECH</h3>
              <p className="text-primary-foreground/90 leading-relaxed mb-6 text-base sm:text-lg">
                Leading water engineering solutions provider in East Africa. We specialize in comprehensive water engineering solutions and
                maintenance of engineering equipment with over 11 years of proven excellence.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs sm:text-sm">📞</span>
                </div>
                <div>
                  <p className="text-primary-foreground/90 font-semibold text-sm sm:text-base">+250 788 406 109</p>
                  <p className="text-primary-foreground/90 font-semibold text-sm sm:text-base">+250 788 315 337</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs sm:text-sm">✉️</span>
                </div>
                <p className="text-primary-foreground/90 font-semibold text-sm sm:text-base">info@electromech.africa</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs sm:text-sm">📍</span>
                </div>
                <p className="text-primary-foreground/90 font-semibold text-sm sm:text-base">Kigali City, Gisozi Business Center</p>
              </div>
            </div>
            

            {/* Social Media Links */}
            <div className="mt-6 sm:mt-8">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Follow Us</h4>
              <div className="flex space-x-3 sm:space-x-4">
                <a 
                  href="https://facebook.com/electromech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center hover:bg-primary-foreground/30 transition-colors group"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://twitter.com/electromech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center hover:bg-primary-foreground/30 transition-colors group"
                >
                  <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://instagram.com/electromech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center hover:bg-primary-foreground/30 transition-colors group"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://linkedin.com/company/electromech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center hover:bg-primary-foreground/30 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#home" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm sm:text-base lg:text-lg font-medium">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm sm:text-base lg:text-lg font-medium"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a href="/products" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm sm:text-base lg:text-lg font-medium">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm sm:text-base lg:text-lg font-medium">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm sm:text-base lg:text-lg font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-primary-foreground/90 text-sm sm:text-base font-medium">💧 Water Pumps</li>
              <li className="text-primary-foreground/90 text-sm sm:text-base font-medium">🏊 Swimming Pools & Fountains</li>
              <li className="text-primary-foreground/90 text-sm sm:text-base font-medium">🔬 Water Treatment</li>
              <li className="text-primary-foreground/90 text-sm sm:text-base font-medium">🌱 Irrigation Systems</li>
              <li className="text-primary-foreground/90 text-sm sm:text-base font-medium">☀️ Solar Equipment</li>
              <li className="text-primary-foreground/90 text-sm sm:text-base font-medium">⚙️ General Machinery</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-primary-foreground/90 font-semibold text-sm sm:text-base text-center lg:text-left">Copyright © 2025 ELECTROMECH LTD. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <span className="text-primary-foreground/80">🏆 ISO Certified</span>
                <span className="text-primary-foreground/80">📧 info@electromech.africa</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary-foreground/80">📍 Kigali, Rwanda</span>
                <a 
                  href="https://maps.google.com/?q=KG+695+St,+Kigali,+Rwanda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/250788315337" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-600 hover:bg-green-700 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors group"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
