"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Form submitted:", formData)
      setIsSubmitted(true)

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Contact our expert team for professional water engineering solutions. We're here to help bring your vision to life with reliable, efficient, and sustainable systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Head Office</h4>
                    <p className="text-muted-foreground">Kigali City, Gisozi Business Center</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Phone Numbers</h4>
                    <a href="tel:+250788406109" className="block text-muted-foreground hover:text-primary transition-colors mb-1">
                      +250 788 406 109
                    </a>
                    <a href="tel:+250788315337" className="block text-muted-foreground hover:text-primary transition-colors">
                      +250 788 315 337
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email Address</h4>
                    <a
                      href="mailto:info@electromech.africa"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@electromech.africa
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-2 hover:border-primary/20 transition-all duration-300 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-t-lg">
              <CardTitle className="text-2xl font-bold">Get A Free Quote</CardTitle>
              <CardDescription className="text-base">Fill out the form below and we'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 p-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-semibold">Full Name *</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="h-12 text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold">Email Address *</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="h-12 text-base"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-base font-semibold">Project Type *</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    className="h-12 text-base"
                    placeholder="e.g., Water Pump Installation, Pool Construction"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base font-semibold">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="text-base"
                    placeholder="Please describe your project requirements, location, and any specific needs..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending Message..." : "Send Free Quote Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
