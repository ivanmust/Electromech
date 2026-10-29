"use client"

import { Fragment, useEffect, useRef, useState, type CSSProperties } from "react"
import Image from "next/image"
import { Award, ChevronDown, Clock, Droplets, ShieldCheck, Sun, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"

const highlights = [
  { icon: Award, title: "11+ Years", text: "Of proven excellence" },
  { icon: Wrench, title: "500+ Projects", text: "Successfully delivered" },
  { icon: ShieldCheck, title: "ISO Certified", text: "Quality assured" },
  { icon: Clock, title: "24/7 Support", text: "Always available" },
]

const slides = [
  { src: "/images/swimming-pool.webp", title: "Swimming Pools & Fountains" },
  { src: "/images/e334f4c19bd798cf07961f12c6c07cf1_soar-banner.avif", title: "Solar Equipment" },
  { src: "/images/irrigation.jpg", title: "Irrigation" },
  { src: "/images/water treatment.jpg", title: "Water Treatment" },
]

const SLIDE_MS = 6000

// Counts "11+ Years" up from 0 the first time it scrolls into view; other titles render as-is
function CountUpTitle({ title }: { title: string }) {
  const match = title.match(/^(\d+)(\+.*)$/)
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!match || !ref.current) return
    const target = Number(match[1])
    let frame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / 1600, 1)
        setValue(Math.round(target * (1 - Math.pow(1 - t, 3))))
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    })
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [])

  if (!match) return <>{title}</>
  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {match[2]}
    </span>
  )
}

export function HeroSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const id = setTimeout(() => setSlide((s) => (s + 1) % slides.length), SLIDE_MS)
    return () => clearTimeout(id)
  }, [slide])

  const headline = ["Expert", "Water", "&", "Energy"]
  const glowWords = ["Solutions", "In", "Rwanda"]

  return (
    // Always dark (in both themes) so the white text reads well over the photos
    <section id="home" className="dark relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-background pt-16 text-foreground">
      {/* Backdrop: full-width project photos under a navy shade, a blue glow at the top, and faint vertical lines */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {slides.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={cn(
              "object-cover object-center transition-opacity duration-[1500ms]",
              i === slide ? "ken-burns opacity-100" : "opacity-0",
            )}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklch,var(--background)_72%,transparent)_0%,color-mix(in_oklch,var(--background)_45%,transparent)_38%,color-mix(in_oklch,var(--background)_60%,transparent)_70%,var(--background)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,color-mix(in_oklch,var(--background)_50%,transparent),transparent_75%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(130%_90%_at_50%_40%,transparent_55%,oklch(0.08_0.04_268/0.85))]" />
        <div className="absolute inset-x-0 top-0 h-[60%] bg-[radial-gradient(50%_60%_at_50%_0%,color-mix(in_oklch,var(--primary)_30%,transparent),transparent_75%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklch,var(--foreground)_5%,transparent)_1px,transparent_1px)] bg-[size:72px_100%] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      </div>

      <div className="container relative mx-auto flex flex-1 flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <div className="flex flex-1 flex-col items-center justify-center pb-10 pt-28 sm:pt-36">
          <p className="eyebrow [text-shadow:0_1px_10px_var(--background)] animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="hidden h-px w-6 bg-current opacity-60 sm:block" />
            Water &amp; energy engineers in Kigali
            <span className="hidden h-px w-6 bg-current opacity-60 sm:block" />
          </p>

          <h1 className="mt-6 max-w-5xl text-[2.35rem] font-medium uppercase leading-[1.08] tracking-[0.01em] text-foreground [text-shadow:0_4px_40px_color-mix(in_oklch,var(--background)_80%,transparent)] sm:text-6xl lg:text-7xl">
            {[...headline, ...glowWords].map((word, i) => (
              <Fragment key={word}>
                <span
                  className={cn("word-in", i >= headline.length && "text-gradient-brand")}
                  style={{ "--i": i } as CSSProperties}
                >
                  {word}
                </span>{" "}
              </Fragment>
            ))}
          </h1>

          <p className="animate-in fade-in slide-in-from-bottom-4 mt-6 max-w-xl text-base font-light leading-relaxed text-foreground/80 [text-shadow:0_1px_12px_var(--background)] duration-1000 [animation-delay:550ms] [animation-fill-mode:both] sm:text-lg">
            Reliable water pumps, solar, irrigation, treatment and pool solutions for residential, commercial and
            public clients, backed by over 11 years of experience.
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-4 mt-9 flex w-full flex-col items-center justify-center gap-3 duration-1000 [animation-delay:700ms] [animation-fill-mode:both] sm:w-auto sm:flex-row">
            <button onClick={() => scrollTo("contact")} className="btn-glow w-full sm:w-auto">
              Get a Quote
            </button>
            <button onClick={() => scrollTo("services")} className="btn-outline w-full sm:w-auto">
              Our Services
            </button>
          </div>

          {/* Stats */}
          <dl className="[text-shadow:0_1px_10px_var(--background)] mt-14 grid w-full max-w-3xl grid-cols-2 gap-y-6 sm:grid-cols-4 sm:divide-x sm:divide-foreground/10">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className="animate-in fade-in slide-in-from-bottom-3 flex flex-col items-center gap-1 px-3 duration-700 [animation-fill-mode:both]"
                style={{ animationDelay: `${850 + i * 90}ms` }}
              >
                <item.icon className="size-4 text-sky" />
                <dt className="mt-1 text-sm font-semibold text-foreground">
                  <CountUpTitle title={item.title} />
                </dt>
                <dd className="text-xs font-light text-foreground/70">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Photo indicator + scroll cue */}
        <div className="animate-in fade-in flex flex-col items-center gap-4 pb-8 duration-1000 [animation-delay:1100ms] [animation-fill-mode:both]">
          <div className="flex items-center gap-3">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Show ${s.title}`}
                onClick={() => setSlide(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === slide ? "w-8 bg-primary shadow-[0_0_12px_var(--glow)]" : "w-1.5 bg-foreground/30 hover:bg-foreground/60",
                )}
              />
            ))}
          </div>
          <p key={slide} className="animate-in fade-in text-[11px] uppercase tracking-[0.22em] text-muted-foreground duration-700">
            {slides[slide].title}
          </p>
          <button
            type="button"
            aria-label="Scroll to about"
            onClick={() => scrollTo("about")}
            className="flex size-9 items-center justify-center rounded-full border border-foreground/20 text-foreground/70 transition-colors hover:border-foreground/50 hover:text-foreground"
          >
            <ChevronDown className="size-4 animate-bounce" />
          </button>
        </div>

        {/* Floating info chips beside the horizon */}
        <div className="glass animate-float absolute left-4 top-[44%] hidden items-center gap-3 rounded-2xl px-4 py-3 text-left xl:flex 2xl:left-0">
          <span className="flex size-9 items-center justify-center rounded-full bg-[oklch(0.82_0.15_85/0.15)] text-[oklch(0.78_0.16_80)]">
            <Sun className="size-4" />
          </span>
          <span>
            <span className="block text-[13px] font-semibold text-foreground">Solar-powered pumping</span>
            <span className="block text-xs font-light text-muted-foreground">Clean energy, lower costs</span>
          </span>
        </div>
        <div className="glass animate-float absolute right-4 top-[58%] hidden items-center gap-3 rounded-2xl px-4 py-3 text-left [animation-delay:-3s] xl:flex 2xl:right-0">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-sky">
            <Droplets className="size-4" />
          </span>
          <span>
            <span className="block text-[13px] font-semibold text-foreground">Water where it&apos;s needed</span>
            <span className="block text-xs font-light text-muted-foreground">Homes, farms &amp; industry</span>
          </span>
        </div>
      </div>
    </section>
  )
}
