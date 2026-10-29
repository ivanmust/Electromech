"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, CheckCircle2, Clock, Send, Loader2 } from "lucide-react"
import { Reveal, SectionHeading } from "@/components/reveal"

const fieldClass =
  "h-12 rounded-xl border-input bg-foreground/[0.03] px-4 text-base shadow-none transition-colors focus-visible:bg-foreground/[0.05] focus-visible:border-primary focus-visible:ring-primary/20"

const WHATSAPP_NUMBER = "250788315337"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const requestText = () =>
    [
      "*New quote request (website)*",
      "",
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
      `*Project type:* ${formData.subject}`,
      "",
      "*Project details:*",
      formData.message,
    ].join("\n")

  // The site has no mail server, so the request is handed to WhatsApp with everything filled in.
  // window.open must run synchronously in the submit handler or popup blockers will stop it.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(requestText())}`
    const opened = window.open(url, "_blank", "noopener,noreferrer")
    if (!opened) window.location.href = url

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 10000)
  }

  const mailtoHref = `mailto:info@electromech.co.rw?subject=${encodeURIComponent(
    `Quote request: ${formData.subject || "New project"}`,
  )}&body=${encodeURIComponent(requestText().replace(/\*/g, ""))}`

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in touch"
          title="Ready to start your project?"
          description="Tell us what you need and our engineers will get back to you within 24 hours with a free, no-obligation quote."
        />

        <Reveal>
          <div className="grid overflow-hidden rounded-[2rem] border bg-card shadow-[0_30px_80px_-30px_rgb(0_0_0/0.9)] lg:grid-cols-5">
            {/* Contact Information */}
            <div className="dark relative min-w-0 overflow-hidden bg-ink p-6 text-white sm:p-10 lg:col-span-2">
              <div className="bg-grid absolute inset-0 opacity-40" />
              <div className="absolute -bottom-24 -right-24 size-72 rounded-full bg-primary/60 blur-[90px]" />
              <div className="relative flex h-full flex-col">
                <h3 className="text-2xl font-bold">Contact information</h3>
                <p className="mt-2 text-white/60">Reach us directly, or visit our head office in Kigali.</p>

                <div className="mt-10 space-y-7">
                  <div className="flex gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-sky ring-1 ring-white/10">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Head office</p>
                      <p className="mt-0.5 font-medium">Kigali City, Gisozi Business Center</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-sky ring-1 ring-white/10">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Phone numbers</p>
                      <a href="tel:+250788406109" className="mt-0.5 block font-medium transition-colors hover:text-sky">
                        +250 788 406 109
                      </a>
                      <a href="tel:+250788315337" className="block font-medium transition-colors hover:text-sky">
                        +250 788 315 337
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-sky ring-1 ring-white/10">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Email address</p>
                      <a href="mailto:info@electromech.co.rw" className="mt-0.5 block text-sm font-medium [overflow-wrap:anywhere] sm:text-base transition-colors hover:text-sky">
                        info@electromech.co.rw
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-sky ring-1 ring-white/10">
                      <Clock className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Response time</p>
                      <p className="mt-0.5 font-medium">Within 24 hours · 24/7 support</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/250788315337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex w-fit items-center gap-2 btn-outline px-5 py-3 lg:mt-auto"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="min-w-0 p-6 sm:p-10 lg:col-span-3 lg:p-12">
              <h3 className="text-2xl font-bold">Get a free quote</h3>
              <p className="mt-2 text-muted-foreground">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

              {isSubmitted && (
                <div className="animate-in fade-in slide-in-from-top-2 mt-6 flex items-center gap-3 rounded-xl border border-success/30 bg-success/10 p-4">
                  <CheckCircle2 className="size-5 shrink-0 text-success" />
                  <p className="font-semibold text-success">
                    Thank you! WhatsApp has opened with your request. Just press send and our team will reply within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-semibold">Full name *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required className={fieldClass} placeholder="Jane Doe" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-semibold">Email address *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className={fieldClass} placeholder="you@company.com" />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="subject" className="font-semibold">Project type *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                    placeholder="e.g., Water Pump Installation, Pool Construction"
                  />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message" className="font-semibold">Project details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`${fieldClass} h-auto min-h-36 py-3`}
                    placeholder="Please describe your project requirements, location, and any specific needs..."
                  />
                </div>

                <Button
                  type="submit"
                  variant={null} className="btn-glow group h-14 text-base rounded-full sm:col-span-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" /> Sending message...
                    </>
                  ) : (
                    <>
                      Send quote request
                      <Send className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </Button>
                <p className="-mt-1 text-center text-sm text-muted-foreground sm:col-span-2">
                  Your request opens in WhatsApp. Prefer email?{" "}
                  <a href={mailtoHref} className="font-medium text-foreground underline-offset-4 hover:underline">
                    Send it to info@electromech.co.rw
                  </a>
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
