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
    image: "/images/solar-power.webp",
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Comprehensive water engineering solutions tailored to meet your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
