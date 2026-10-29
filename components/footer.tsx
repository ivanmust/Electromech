import Image from "next/image"
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, MessageCircle } from "lucide-react"

// Direct contact channels. Add the company's social media pages here once they exist,
// e.g. { href: "https://facebook.com/<page>", icon: Facebook, label: "Facebook" } (icons from lucide-react).
const socials = [
  { href: "https://wa.me/250788315337", icon: MessageCircle, label: "WhatsApp" },
  { href: "tel:+250788406109", icon: Phone, label: "Call us" },
  { href: "mailto:info@electromech.co.rw", icon: Mail, label: "Email us" },
]

const quickLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Our Services" },
  { href: "/products", label: "Products" },
  { href: "/team", label: "Our Team" },
  { href: "/#about", label: "About Us" },
  { href: "/#contact", label: "Contact" },
]

const services = ["Water Pumps", "Swimming Pools & Fountains", "Water Treatment", "Irrigation Systems", "Solar Equipment", "General Machinery"]

export function Footer() {
  return (
    <footer className="dark relative overflow-hidden bg-ink text-white">
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA band */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 py-14 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">Have a project in mind?</h3>
            <p className="mt-2 text-white/60">Let&apos;s build reliable water and energy infrastructure together.</p>
          </div>
          <a
            href="/#contact"
            className="btn-glow group"
          >
            Get a free quote
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="inline-flex rounded-xl bg-white px-3 py-2">
              <Image src="/images/electromech-logo.jpg" alt="Electromech" width={160} height={56} className="h-11 w-auto object-contain" />
            </div>
            <p className="mt-6 max-w-md leading-relaxed text-white/60">
              Leading water and energy solutions provider in Africa. We specialize in comprehensive water and energy
              solutions and maintenance of engineering equipment with over 11 years of proven excellence.
            </p>
            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="flex size-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:ring-white/25"
                >
                  <s.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/40">Company</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/40">Services</h4>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service} className="text-white/60">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/40">Contact</h4>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-white/40" />
                <div className="text-white/60">
                  <a href="tel:+250788406109" className="block hover:text-white">+250 788 406 109</a>
                  <a href="tel:+250788315337" className="block hover:text-white">+250 788 315 337</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-white/40" />
                <a href="mailto:info@electromech.co.rw" className="text-white/60 hover:text-white">info@electromech.co.rw</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-white/40" />
                <a
                  href="https://maps.google.com/?q=KG+695+St,+Kigali,+Rwanda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white"
                >
                  Kigali City, Gisozi Business Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} ELECTROMECH LTD. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-success" /> ISO Certified · Kigali, Rwanda
          </p>
        </div>
      </div>
    </footer>
  )
}
