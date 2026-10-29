import Image from "next/image"
import { Target, Eye, Heart, Leaf, Lightbulb, Scale, Users, Handshake, ShieldCheck, HeartHandshake, Check } from "lucide-react"
import { Reveal, SectionHeading } from "@/components/reveal"

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To supply high-quality water and energy equipment, fostering a sustainable future through innovation, reliability, and exceptional customer service. We strive to be a trusted partner, delivering cutting-edge solutions that optimize resource usage and enhance the well-being of communities and businesses.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be the leading provider of sustainable water and energy solutions in Africa, empowering communities and industries with innovative technology and reliable service excellence.",
  },
  {
    icon: Heart,
    title: "Our Promise",
    text: "Our core values drive everything we do. We are committed to reliability, quality, safety, and excellence in every project, ensuring customer satisfaction and long-term partnerships.",
  },
]

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    text: "We are committed to promoting sustainable practices in the water and energy sectors, prioritizing solutions that minimize environmental impact and conserve resources for future generations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We embrace a culture of continuous innovation, constantly seeking out new technologies, processes, and approaches to enhance the efficiency and effectiveness of our equipment and services.",
  },
  {
    icon: Scale,
    title: "Integrity",
    text: "We uphold the highest standards of integrity, honesty, and ethical behavior in all our interactions with customers, employees, partners, and stakeholders.",
  },
  {
    icon: Users,
    title: "Customer-Centric",
    text: "We prioritize the needs of our customers and strive to exceed their expectations by delivering tailored solutions, prompt support, and exceptional service.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    text: "We foster a collaborative environment, promoting teamwork and open communication both internally and externally, to achieve mutual success with our customers, partners, and suppliers.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "We are dedicated to providing reliable and durable equipment that meets the highest quality standards, ensuring long-term performance and customer satisfaction.",
  },
  {
    icon: HeartHandshake,
    title: "Social Responsibility",
    text: "We actively engage in initiatives that contribute to the well-being of society, supporting community development, education, and access to clean water and energy.",
  },
]

const specialties = ["Water Pumps", "Pools & Fountains", "Water Treatment", "Irrigation", "Solar Equipment", "Generators & Machinery"]

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden pb-24 pt-24 sm:pb-32 sm:pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro: image collage + story */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative mx-auto aspect-[4/5] max-w-md sm:max-w-lg">
              <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-gradient-to-br from-primary/25 to-accent/20" />
              <div className="relative h-full overflow-hidden rounded-[2rem] shadow-2xl">
                <Image src="/images/irrigation.jpg" alt="Irrigation project" fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              </div>
              <div className="absolute -bottom-8 right-3 w-36 overflow-hidden rounded-2xl border-4 border-background shadow-xl sm:-right-10 sm:w-56">
                <div className="relative aspect-square">
                  <Image src="/images/Water-Pumps.webp" alt="Water pump range" fill sizes="224px" className="object-cover" />
                </div>
              </div>
              <div className="absolute left-3 top-6 rounded-2xl border border-white/15 bg-gradient-to-br from-primary to-accent p-5 text-white shadow-xl shadow-primary/30 sm:-left-10 sm:top-10">
                <p className="font-display text-4xl font-bold">6</p>
                <p className="mt-1 text-sm text-white/80">
                  Specialist
                  <br />
                  services
                </p>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="About Electromech"
              title={
                <>
                  Leading water and <span className="text-gradient-brand">energy experts</span>
                </>
              }
              description="We are a registered and recognized business specialized in providing comprehensive water and energy solutions and maintenance of engineering equipment. With over 11 years of experience, we serve public, private, and NGO clients with unmatched expertise and reliability."
            />
            <Reveal delay={100}>
              <ul className="-mt-6 grid gap-3 sm:grid-cols-2">
                {specialties.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-medium">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Mission / Vision / Promise */}
        <div className="mt-28 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 100}>
              <div className="spotlight group relative h-full overflow-hidden rounded-2xl border bg-foreground/[0.02] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:bg-foreground/[0.04]">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent via-primary to-sky transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex size-14 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/[0.04] text-sky transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <pillar.icon className="size-6" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{pillar.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Core values */}
        <Reveal className="mt-24">
          <div className="dark relative overflow-hidden rounded-[2rem] border bg-ink p-8 sm:p-12 lg:p-16">
            <div className="bg-grid absolute inset-0 opacity-50" />
            <div className="absolute -right-32 -top-32 size-96 rounded-full bg-primary/50 blur-[100px]" />
            <div className="absolute -bottom-40 -left-20 size-96 rounded-full bg-accent/20 blur-[100px]" />
            <div className="relative">
              <div className="mb-12 max-w-2xl">
                <span className="eyebrow">Our core values</span>
                <h3 className="mt-5 text-3xl font-bold text-white sm:text-4xl">The principles behind every project</h3>
              </div>
              <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((value) => (
                  <div key={value.title} className="spotlight group bg-ink/80 p-6 transition-colors duration-300 hover:bg-white/[0.04]">
                    <value.icon className="size-6 text-sky transition-transform duration-300 group-hover:scale-110" />
                    <h4 className="mt-5 text-lg font-semibold text-white">{value.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{value.text}</p>
                  </div>
                ))}
                <div className="flex flex-col justify-between bg-gradient-to-br from-primary to-accent p-6">
                  <p className="text-lg font-semibold text-white">Ready to work with a partner you can rely on?</p>
                  <a href="#contact" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-105">
                    Talk to our team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
