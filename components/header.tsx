"use client"

import { useEffect, useState } from "react"
import { Menu, Phone, X } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "products", label: "Products", href: "/products" },
  { id: "team", label: "Team", href: "/team" },
  { id: "contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [active, setActive] = useState("home")
  const [isHome, setIsHome] = useState(false)

  useEffect(() => {
    if (window.location.pathname.startsWith("/products")) setActive("products")
    if (window.location.pathname.startsWith("/team")) setActive("team")
    setIsHome(window.location.pathname === "/")

    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Highlight the nav item for whichever home-page section is in view
  useEffect(() => {
    if (window.location.pathname !== "/") return
    const sections = navItems
      .filter((item) => !item.href)
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      window.location.href = `/#${sectionId}`
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        isScrolled || isMenuOpen
          ? "border-foreground/[0.08] bg-background/70 backdrop-blur-xl"
          : "border-transparent bg-transparent",
        // Over the always-dark home hero, use light text in both themes
        isHome && !isScrolled && !isMenuOpen && "dark text-foreground",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            aria-label="Electromech home"
            className="rounded-md bg-white px-1.5 py-0.5 ring-1 ring-black/5 transition-opacity duration-200 hover:opacity-85"
            onClick={() => (window.location.pathname === "/" ? scrollToSection("home") : (window.location.href = "/"))}
          >
            <Image
              src="/images/electromech-logo.jpg"
              alt="Electromech - Your Engineering Solutions"
              width={200}
              height={70}
              className="h-9 w-auto object-contain"
              priority
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="mx-auto hidden items-center gap-6 px-4 lg:flex xl:gap-8">
            {navItems.map((item) => {
              const isActive = active === item.id
              const classes = cn(
                "text-xs font-medium uppercase tracking-[0.14em] transition-colors",
                isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground",
              )
              return item.href ? (
                <a key={item.id} href={item.href} className={classes}>
                  {item.label}
                </a>
              ) : (
                <button key={item.id} onClick={() => scrollToSection(item.id)} className={classes}>
                  {item.label}
                </button>
              )
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-4 lg:flex xl:gap-5">
            <ThemeToggle className="size-8 border-transparent bg-transparent" />
            <a
              href="tel:+250788406109"
              className="hidden items-center gap-1.5 whitespace-nowrap text-xs font-medium tracking-[0.06em] text-foreground/60 transition-colors hover:text-foreground xl:flex"
            >
              <Phone className="size-3.5" />
              +250 788 406 109
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-full border border-foreground/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile theme toggle + menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle className="size-10" />
            <button
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="flex size-10 items-center justify-center rounded-lg bg-foreground/[0.06] text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll progress */}
      <div className="scroll-progress absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-accent via-primary to-sky" />

      {/* Mobile Navigation */}
      <div
        className={cn(
          "overflow-hidden border-t bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-out lg:hidden",
          isMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 border-transparent opacity-0",
        )}
      >
        <div className="container mx-auto space-y-1 px-4 pb-6 pt-3 sm:px-6">
          {navItems.map((item) => {
            const classes = cn(
              "block w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors",
              active === item.id ? "bg-foreground/[0.07] text-foreground" : "text-foreground/70 hover:bg-foreground/[0.04] hover:text-foreground",
            )
            return item.href ? (
              <a key={item.id} href={item.href} className={classes}>
                {item.label}
              </a>
            ) : (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className={classes}>
                {item.label}
              </button>
            )
          })}
          <div className="grid gap-3 pt-4 sm:grid-cols-2">
            <a href="tel:+250788406109" className="btn-outline h-12 py-0">
              <Phone className="size-4" /> Call us
            </a>
            <button
              className="btn-glow h-12 py-0"
              onClick={() => scrollToSection("contact")}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
