import { Droplets, Waves, FlaskConical, Sprout, Sun, Cog, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { Reveal, SectionHeading } from "@/components/reveal"

const services = [
  {
    icon: Droplets,
    title: "Water Pumps",
    description: "High-quality water pumping solutions for residential, commercial, and industrial applications.",
    image: "/images/Water-Pumps.webp",
  },
  {
    icon: Waves,
    title: "Swimming Pools & Fountains",
    description: "Complete pool and fountain systems including design, installation, and maintenance services.",
    image: "/images/swimming-pool.webp",
  },
  {
    icon: FlaskConical,
    title: "Water Treatment",
    description: "Advanced water treatment systems to ensure clean, safe water for all your needs.",
    image: "/images/water treatment.jpg",
  },
  {
    icon: Sprout,
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
    title: "Machinery Supply & Maintenance",
    description: "Generators, pressure washers, drilling machines, and comprehensive maintenance services.",
    image: "/images/water_pump.webp",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden border-y bg-muted/40 py-24 sm:py-32">
      <div className="bg-grid-light mask-fade-b pointer-events-none absolute inset-x-0 top-0 h-96" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Complete solutions for <span className="text-gradient-brand">water &amp; energy</span>
            </>
          }
          description="Six specialist disciplines under one roof, from supply and installation to long-term maintenance."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 100}>
              <article className="spotlight group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-foreground/20 hover:shadow-[0_0_40px_-12px_oklch(0.66_0.19_248/0.45)]">
                <div className="relative h-56">
                  {/* Photo is clipped on its own so the icon badge below can overlap the card edge */}
                  <div className="absolute inset-0 overflow-hidden border-b">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <span className="absolute right-4 top-4 rounded-full bg-ink/45 px-3 py-1 font-mono text-xs font-medium text-white ring-1 ring-white/20 backdrop-blur-md">
                    0{index + 1}
                  </span>
                  <div className="absolute -bottom-6 left-6 flex size-14 items-center justify-center rounded-xl bg-primary text-white shadow-[0_8px_24px_-8px_oklch(0.66_0.19_248/0.9)] ring-4 ring-card transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="size-6" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 pt-10">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{service.description}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground"
                  >
                    Request a quote
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
