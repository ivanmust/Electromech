import Image from "next/image"
import { SectionHeading } from "@/components/reveal"

const clients = [
  { name: "Mountain View Hotel & Apartment", logo: "/images/mountain-view-hotel.png" },
  { name: "Ihusi Hotel", logo: "/images/ihusi-hotel.png" },
  { name: "NPD - Reliability is our strength", logo: "/images/npd-logo.jpg" },
  { name: "Rwanda National Police", logo: "/images/rnp-logo.png" },
  { name: "Rwanda Defence Force", logo: "/images/rdf-logo.png" },
  { name: "Goma Serena Hotel", logo: "/images/goma-serena-hotel.png" },
]

export function ClientsSection() {
  return (
    <section id="clients" className="py-24 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trusted by"
          title="Meet our happy clients"
          description="For over 11 years we have proudly served hundreds of institutions across the public, private and non-governmental sectors."
        />
      </div>

      <div className="mask-fade-x group relative flex overflow-hidden">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="animate-marquee flex shrink-0 items-center gap-6 pr-6 group-hover:[animation-play-state:paused]"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex h-28 w-52 shrink-0 items-center justify-center rounded-2xl border border-border bg-white p-6 opacity-85 transition-all duration-300 hover:-translate-y-1 hover:opacity-100 sm:h-32 sm:w-60"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={120}
                  loading="eager"
                  className="h-full w-full object-contain grayscale-[30%] transition-all duration-300 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
