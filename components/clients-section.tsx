import Image from "next/image"

export function ClientsSection() {
  const clients = [
    {
      name: "Mountain View Hotel & Apartment",
      logo: "/images/mountain-view-hotel.png",
    },
    {
      name: "Ihusi Hotel",
      logo: "/images/ihusi-hotel.png",
    },
    {
      name: "NPD - Reliability is our strength",
      logo: "/images/npd-logo.jpg",
    },
    {
      name: "Rwanda National Police",
      logo: "/images/rnp-logo.png",
    },
    {
      name: "Rwanda Defence Force",
      logo: "/images/rdf-logo.png",
    },
    {
      name: "Goma Serena Hotel",
      logo: "/images/goma-serena-hotel.png",
    },
  ]

  return (
    <section id="clients" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Meet our Happy Clients</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            For the past 11 years, we are proudly having served hundreds of amazing institutions from public, private
            and Non-Governmental Organizations. Here are a few amazing happy clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="w-48 h-36 bg-white rounded-lg shadow-sm border border-border/50 flex items-center justify-center p-8"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={180}
                height={120}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
