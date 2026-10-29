import type { Metadata } from "next"
import Image from "next/image"
import { Award, Clock, Linkedin, Mail, Phone, Users } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Electromech team: dedicated professionals bringing decades of experience in water and energy solutions across Africa.",
  alternates: { canonical: "/team" },
}

const teamMembers = [
  {
    name: "John Mwangi",
    position: "Managing Director",
    department: "Leadership",
    experience: "15+ years",
    email: "john@electromech.co.ke",
    phone: "+254 700 123 456",
    linkedin: "john-mwangi-electromech",
    image: "/placeholder-user.jpg",
    bio: "John leads our strategic vision and has been instrumental in expanding Electromech's operations across East Africa. He holds a Master's in Engineering and has over 15 years of experience in water and energy solutions.",
    specialties: ["Strategic Planning", "Business Development", "Project Management"]
  },
  {
    name: "Sarah Wanjiku",
    position: "Head of Engineering",
    department: "Engineering",
    experience: "12+ years",
    email: "sarah@electromech.co.ke",
    phone: "+254 700 123 457",
    linkedin: "sarah-wanjiku-engineering",
    image: "/placeholder-user.jpg",
    bio: "Sarah oversees all technical operations and ensures the highest quality standards in our engineering solutions. She specializes in water treatment systems and renewable energy integration.",
    specialties: ["Water Treatment", "Renewable Energy", "System Design"]
  },
  {
    name: "Michael Ochieng",
    position: "Senior Project Manager",
    department: "Project Management",
    experience: "10+ years",
    email: "michael@electromech.co.ke",
    phone: "+254 700 123 458",
    linkedin: "michael-ochieng-pm",
    image: "/placeholder-user.jpg",
    bio: "Michael manages our largest projects and ensures timely delivery while maintaining quality standards. He has successfully delivered over 200 projects across the region.",
    specialties: ["Project Management", "Client Relations", "Quality Assurance"]
  },
]

const stats = [
  { icon: Award, title: "15+ Years", text: "Average Experience" },
  { icon: Users, title: "3", text: "Team Members" },
  { icon: Clock, title: "24/7", text: "Support Available" },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Header />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklch,var(--foreground)_4%,transparent)_1px,transparent_1px)] bg-[size:72px_100%] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
          <div className="absolute -top-24 left-1/2 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <span className="eyebrow animate-in fade-in duration-700">
            <Users className="size-3.5" />
            Our Team
          </span>
          <h1 className="animate-in fade-in slide-in-from-bottom-4 mx-auto mt-6 max-w-4xl text-[2.35rem] font-medium uppercase leading-[1.08] tracking-[0.01em] text-foreground duration-700 sm:text-6xl lg:text-7xl">
            Meet Our <span className="text-gradient-brand">Expert Team</span>
          </h1>
          <p className="animate-in fade-in slide-in-from-bottom-4 mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground duration-700 [animation-delay:150ms] [animation-fill-mode:both]">
            Our dedicated professionals bring together decades of experience in water and energy solutions,
            working tirelessly to deliver excellence across Africa.
          </p>
          <dl className="animate-in fade-in mx-auto mt-12 grid max-w-2xl grid-cols-3 duration-700 [animation-delay:300ms] [animation-fill-mode:both] sm:divide-x sm:divide-foreground/10">
            {stats.map((stat) => (
              <div key={stat.text} className="flex flex-col items-center gap-1 px-3">
                <stat.icon className="size-4 text-sky" />
                <dt className="mt-1 text-lg font-semibold text-foreground">{stat.title}</dt>
                <dd className="text-xs font-light text-muted-foreground">{stat.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="pb-24 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={index * 100}>
                <article className="spotlight group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-foreground/20 hover:shadow-[0_0_40px_-12px_oklch(0.66_0.18_255/0.45)]">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute inset-x-5 bottom-5 text-white">
                      <span className="inline-block rounded-full border border-white/25 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.14em] backdrop-blur-md">
                        {member.department}
                      </span>
                      <h3 className="mt-2.5 text-xl font-semibold">{member.name}</h3>
                      <p className="text-sm font-light text-white/85">{member.position}</p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="size-4 text-sky" />
                      {member.experience} experience
                    </p>
                    <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">{member.bio}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {member.specialties.map((specialty) => (
                        <span key={specialty} className="rounded-full border px-3 py-1 text-xs text-foreground/80">
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto space-y-2.5 border-t pt-5 text-sm [&_a]:transition-colors">
                      <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-foreground/80 hover:text-sky">
                        <Mail className="size-4 text-muted-foreground" />
                        {member.email}
                      </a>
                      <a href={`tel:${member.phone}`} className="flex items-center gap-3 text-foreground/80 hover:text-sky">
                        <Phone className="size-4 text-muted-foreground" />
                        {member.phone}
                      </a>
                      <a
                        href={`https://linkedin.com/in/${member.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-foreground/80 hover:text-sky"
                      >
                        <Linkedin className="size-4 text-muted-foreground" />
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Call to Action */}
          <div className="dark relative mt-20 overflow-hidden rounded-[2rem] border bg-ink p-8 text-center text-foreground sm:p-14">
            <div className="absolute -right-24 -top-24 size-80 rounded-full bg-primary/40 blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 size-80 rounded-full bg-primary/20 blur-[100px]" />
            <div className="relative">
              <h2 className="text-2xl font-semibold sm:text-4xl">Ready to Work with Our Team?</h2>
              <p className="mx-auto mt-4 max-w-2xl font-light text-muted-foreground sm:text-lg">
                Contact us today to discuss your water and energy solutions needs. Our expert team is ready to help
                you achieve your goals.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="/#contact" className="btn-glow">
                  Get in Touch
                </a>
                <a href="tel:+254700123456" className="btn-outline">
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
