import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplets, Waves, Zap, Sun, Cog } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Droplets,
    title: "Water Pumps",
    description: "High-quality water pumping solutions for residential, commercial, and industrial applications.",
    image: "/images/Water-Pumps.webp",
  },
  {
    icon: Waves,
    title: "Swimming Pools and Fountains",
    description: "Complete pool and fountain systems including design, installation, and maintenance services.",
    image: "/images/swimming-pool.webp",
  },
  {
    icon: Droplets,
    title: "Water Treatment",
    description: "Advanced water treatment systems to ensure clean, safe water for all your needs.",
    image: "/images/water treatment.jpg",
  },
  {
    icon: Zap,
    title: "Irrigation",
    description: "Efficient irrigation systems for agricultural and landscaping applications.",
    image: "/images/irrigation.jpg",
  },
  {
    icon: Sun,
    title: "Solar Equipment",
    description: "Sustainable solar-powered solutions for water pumping and energy generation.",
    image: "/images/f.jpeg",
  },
  {
    icon: Cog,
    title: "General Machinery Supply & Maintenance",
    description: "Generators, pressure washers, drilling machines, and comprehensive maintenance services.",
    image: "/images/water_pump.webp",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-success/10 text-success rounded-full text-sm font-semibold mb-4 sm:mb-6">
            Our Expertise
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4 px-4">Our Services</h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty max-w-3xl mx-auto px-4">
            Comprehensive water and energy solutions tailored to meet your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-40 sm:h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 rounded-lg flex items-center justify-center border-2 border-accent">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <CardDescription className="text-sm sm:text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
