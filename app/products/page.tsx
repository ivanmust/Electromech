"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { useState } from "react"
import { Check, CheckCircle2, ShoppingCart, Package, Phone, X, ArrowRight, Loader2, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"

const categoryOrder = ["Water Pumps", "Pool Equipment", "Fountains & Water Features", "Treatment Systems", "General Machinery"]

// In the same order as the photos 1.jpg … 28.jpg
const productCatalog = [
  { title: "Diesel Fire Pump Set", category: "Water Pumps", description: "Skid-mounted diesel fire pump set with control panel for fire protection systems." },
  { title: "Illuminated Dome Fountain", category: "Fountains & Water Features", description: "Glass-dome fountain with underwater lighting for gardens, ponds and lobbies." },
  { title: "Pool Lifebuoy Ring", category: "Pool Equipment", description: "Floating lifebuoy ring for poolside safety and rescue." },
  { title: "Aluminium Pool Vacuum Head", category: "Pool Equipment", description: "Weighted aluminium vacuum head for cleaning pool floors." },
  { title: "Pool Cleaning Kit", category: "Pool Equipment", description: "Complete set with vacuum head, hose, telescopic pole and leaf skimmer." },
  { title: "Pool Vacuum Brush Head", category: "Pool Equipment", description: "Brush-edged vacuum head for removing dirt from pool floors and walls." },
  { title: "Vacuum Head & Hose Set", category: "Pool Equipment", description: "Vacuum head supplied with a flexible floating vacuum hose." },
  { title: "Flexible Pool Vacuum Head", category: "Pool Equipment", description: "Flexible-body vacuum head that follows curved pool surfaces." },
  { title: "Triangular Pool Vacuum Head", category: "Pool Equipment", description: "Triangular vacuum head for corners, steps and tight spaces." },
  { title: "Leaf Skimmer Net", category: "Pool Equipment", description: "Fine-mesh skimmer net for removing leaves and debris from the surface." },
  { title: "Stainless Steel Pool Ladder", category: "Pool Equipment", description: "Corrosion-resistant stainless steel ladder with non-slip steps." },
  { title: "In-Ground Pool Ladder", category: "Pool Equipment", description: "Stainless steel ladder with handrails for in-ground pools." },
  { title: "Mushroom Fountain Nozzle", category: "Fountains & Water Features", description: "Creates a smooth, dome-shaped water bell for pools and ponds." },
  { title: "Brass Foam Jet Nozzle", category: "Fountains & Water Features", description: "Brass nozzle producing a white, aerated foam column of water." },
  { title: "Jet Fountain Nozzles", category: "Fountains & Water Features", description: "Straight-jet nozzles in stainless steel and brass for vertical water jets." },
  { title: "Stainless Steel Foam Nozzle", category: "Fountains & Water Features", description: "Stainless steel aerating nozzle for bright, foamy fountain jets." },
  { title: "Multi-Jet Flower Nozzle", category: "Fountains & Water Features", description: "Brass multi-jet nozzle that sprays water in a flower pattern." },
  { title: "Stainless Steel Pool Waterfall", category: "Fountains & Water Features", description: "Arched stainless steel cascade that pours a clear sheet of water." },
  { title: "LED Wall Waterfall", category: "Fountains & Water Features", description: "Wall-mounted sheet waterfall with built-in LED lighting." },
  { title: "Sheer Descent Waterfall", category: "Fountains & Water Features", description: "Smooth sheet-water cascade that blends into pool walls." },
  { title: "Cascade Water Feature", category: "Fountains & Water Features", description: "Multi-spout wall cascades combined with fountain jets." },
  { title: "Borehole Submersible Pumps", category: "Water Pumps", description: "Stainless steel submersible pumps for boreholes and deep wells." },
  { title: "Submersible & Surface Pump Range", category: "Water Pumps", description: "Submersible, booster and surface pumps for homes, farms and industry." },
  { title: "Sewage & Drainage Pumps", category: "Water Pumps", description: "Submersible pumps for wastewater, sewage and site drainage." },
  { title: "Borehole, Booster & Surface Pumps", category: "Water Pumps", description: "Full range of borehole, pressure booster and surface water pumps." },
  { title: "Reverse Osmosis Treatment Plant", category: "Treatment Systems", description: "Skid-mounted reverse osmosis plant for purified water production." },
  { title: "3-Stage Water Filter with UV", category: "Treatment Systems", description: "Three-stage filtration with UV sterilisation for safe drinking water." },
  { title: "Silent Diesel Generator", category: "General Machinery", description: "Soundproof canopy diesel generator for reliable backup power." },
]

export default function ProductsPage() {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])
  const [orderForm, setOrderForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    country: "Rwanda",
    quantity: "",
    urgency: "",
    specialRequirements: "",
    budget: "",
    preferredContact: "phone"
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")

  // Product photos live at /images/{id}.jpg
  const products = productCatalog.map((product, index) => ({
    id: index + 1,
    image: `/images/${index + 1}.jpg`,
    ...product,
  }))

  const handleProductToggle = (productId: number) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const handleInputChange = (field: string, value: string) => {
    setOrderForm(prev => ({ ...prev, [field]: value }))
  }

  const sendWhatsAppNotification = async (orderData: any) => {
    const phoneNumber = "250788315337" // Your WhatsApp number
    const message = `🛒 *NEW ORDER RECEIVED* 🛒

📋 *Order ID:* ${orderData.orderId}
📅 *Date:* ${orderData.orderDate}

👤 *Customer Information:*
• Name: ${orderData.customerInfo.name}
• Email: ${orderData.customerInfo.email}
• Phone: ${orderData.customerInfo.phone}
• Company: ${orderData.customerInfo.company || 'Not provided'}

📍 *Delivery Address:*
• Address: ${orderData.customerInfo.address}
• City: ${orderData.customerInfo.city}
• Country: ${orderData.customerInfo.country}

🛍️ *Selected Products (${orderData.selectedProducts.length}):*
${orderData.selectedProducts.map((product: any, index: number) => 
  `${index + 1}. ${product.title} - ${product.category}`
).join('\n')}

📦 *Order Details:*
• Quantity: ${orderData.customerInfo.quantity || 'Not specified'}
• Urgency: ${orderData.customerInfo.urgency || 'Not specified'}
• Budget: ${orderData.customerInfo.budget || 'Not specified'}

📝 *Special Requirements:*
${orderData.customerInfo.specialRequirements || 'None'}

⏰ *Please contact customer within 24 hours*
📞 Call: ${orderData.customerInfo.phone}
📧 Email: ${orderData.customerInfo.email}

---
Electromech Order System`

    try {
      // Try to send via API first
      const response = await fetch('/api/send-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: phoneNumber, message })
      })
      
      const result = await response.json()
      
      if (result.success && result.method === 'direct_link') {
        // If API returns direct link, open WhatsApp
        window.open(result.url, '_blank')
      }
      
      console.log('WhatsApp notification sent:', result)
    } catch (error) {
      console.log('WhatsApp API error, using direct link:', error)
      
      // Fallback: Create WhatsApp URL and open
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Prepare order data
      const orderData = {
        selectedProducts: selectedProductsData,
        customerInfo: orderForm,
        orderDate: new Date().toLocaleString(),
        orderId: `ORD-${Date.now()}`
      }

      console.log('Order Data:', orderData)
      
      // Send WhatsApp notification
      await sendWhatsAppNotification(orderData)
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSubmitting(false)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Order submission error:', error)
      setIsSubmitting(false)
      // You could show an error message here
    }
  }

  const selectedProductsData = products.filter(product => selectedProducts.includes(product.id))
  const categories = ["All", ...categoryOrder]
  const visibleProducts = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory)

  const resetOrder = () => {
    setIsSubmitted(false)
    setShowOrderForm(false)
    setSelectedProducts([])
    setOrderForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      address: "",
      city: "",
      country: "Rwanda",
      quantity: "",
      urgency: "",
      specialRequirements: "",
      budget: "",
      preferredContact: "phone"
    })
  }

  const fieldClass = "h-11 rounded-xl bg-foreground/[0.03] shadow-none focus-visible:bg-background focus-visible:border-primary"
  const selectTriggerClass = "w-full rounded-xl bg-foreground/[0.03] shadow-none data-[size=default]:h-11 focus-visible:border-primary"

  return (
    <main className="min-h-screen overflow-x-clip">
      <Header />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-44">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/images/water_pump.webp')] bg-cover bg-center opacity-15 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/90 to-background" />
          <div className="bg-grid mask-fade-b absolute inset-0 opacity-60" />
          <div className="absolute -top-20 left-1/2 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <span className="eyebrow animate-in fade-in duration-700">Our Products</span>
          <h1 className="animate-in fade-in slide-in-from-bottom-4 mx-auto mt-6 max-w-4xl text-[2.35rem] font-medium uppercase leading-[1.08] tracking-[0.01em] text-foreground duration-700 sm:text-6xl lg:text-7xl">
            Professional water &amp; energy <span className="text-gradient-brand">equipment</span>
          </h1>
          <p className="animate-in fade-in slide-in-from-bottom-4 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground duration-700 [animation-delay:150ms] [animation-fill-mode:both]">
            Explore our range of pumps, treatment systems, irrigation equipment and industrial machinery. Select the
            products you need and request a quote in minutes.
          </p>
          <div className="animate-in fade-in mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground duration-700 [animation-delay:300ms] [animation-fill-mode:both]">
            {["Genuine equipment", "Expert installation", "After-sales support"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check className="size-4 text-success" strokeWidth={3} /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Product catalog</h2>
              <p className="mt-2 text-muted-foreground">
                Tap any product to add it to your order · {visibleProducts.length} items
              </p>
            </div>
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                    activeCategory === category
                      ? "border-foreground bg-foreground text-background"
                      : "bg-foreground/[0.02] text-foreground/70 hover:border-foreground/25 hover:text-foreground",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {visibleProducts.map((product, index) => {
              const isSelected = selectedProducts.includes(product.id)
              return (
                <button
                  type="button"
                  // Keyed by category so the grid re-animates in when the filter changes
                  key={`${activeCategory}-${product.id}`}
                  aria-pressed={isSelected}
                  onClick={() => handleProductToggle(product.id)}
                  style={{ animationDelay: `${Math.min(index, 14) * 40}ms` }}
                  className={cn(
                    "spotlight group animate-in fade-in zoom-in-95 slide-in-from-bottom-3 relative flex flex-col overflow-hidden rounded-2xl border-2 bg-card text-left duration-500 [animation-fill-mode:both] transition-[transform,box-shadow,border-color] hover:-translate-y-1 hover:shadow-xl",
                    isSelected ? "border-primary shadow-[0_0_30px_-8px_oklch(0.66_0.19_248/0.6)]" : "border-transparent ring-1 ring-border hover:ring-foreground/20",
                  )}
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    />
                    <div className={cn("absolute inset-0 transition-colors duration-300", isSelected ? "bg-primary/15" : "bg-transparent group-hover:bg-black/10")} />
                    <span
                      className={cn(
                        "absolute right-3 top-3 flex size-8 items-center justify-center rounded-full border-2 transition-all duration-300",
                        isSelected
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-white bg-white/70 text-transparent backdrop-blur group-hover:text-primary/40",
                      )}
                    >
                      <Check className="size-4" strokeWidth={3} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-sky">{product.category}</span>
                    <h3 className="mt-1 font-semibold transition-colors group-hover:text-sky">{product.title}</h3>
                    <p className="mt-1 hidden line-clamp-2 text-sm text-muted-foreground sm:block">{product.description}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="dark relative mt-20 overflow-hidden rounded-[2rem] border bg-ink p-8 text-center sm:p-14">
            <div className="bg-grid absolute inset-0 opacity-40" />
            <div className="absolute -right-24 -top-24 size-80 rounded-full bg-primary/60 blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 size-80 rounded-full bg-accent/25 blur-[100px]" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-white sm:text-4xl">Not sure which product fits?</h3>
              <p className="mx-auto mt-4 max-w-2xl text-white/70 sm:text-lg">
                Our engineers will help you pick the right equipment, with full specifications and pricing for your project.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  onClick={() => setShowOrderForm(true)}
                  variant={null} className="btn-glow h-13 px-8 text-base rounded-full"
                >
                  <ShoppingCart className="size-5" />
                  Place Order
                </Button>
                <a
                  href="tel:+250788406109"
                  className="btn-outline h-13 px-8 py-0"
                >
                  <Phone className="size-4" /> +250 788 406 109
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky selection bar */}
      <div
        className={cn(
          "fixed bottom-4 left-4 right-24 z-40 transition-all duration-500 sm:bottom-8 sm:left-1/2 sm:right-auto sm:w-[28rem] sm:-translate-x-1/2 md:w-[32rem]",
          selectedProducts.length > 0 && !showOrderForm ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0",
        )}
      >
        <div className="dark flex items-center justify-between gap-3 rounded-full border border-white/10 bg-ink/90 p-2 pl-4 text-white shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="hidden -space-x-3 sm:flex">
              {selectedProductsData.slice(0, 3).map((p) => (
                <Image key={p.id} src={p.image} alt="" width={36} height={36} className="size-9 rounded-full border-2 border-ink object-cover" />
              ))}
            </div>
            <p className="text-sm font-medium">
              <span className="text-lg font-bold">{selectedProducts.length}</span> selected
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" onClick={() => setSelectedProducts([])} className="hidden text-white/70 hover:bg-white/10 hover:text-white sm:inline-flex">
              Clear
            </Button>
            <Button onClick={() => setShowOrderForm(true)} variant={null} className="btn-glow h-11 px-5 py-0 rounded-full">
              Place Order <ArrowRight />
            </Button>
          </div>
        </div>
      </div>

      {/* Order Form Modal */}
      {showOrderForm && !isSubmitted && (
        <div
          className="animate-in fade-in fixed inset-0 z-[60] flex items-end justify-center bg-black/70 backdrop-blur-sm duration-200 sm:items-center sm:p-4"
          onClick={(e) => e.target === e.currentTarget && setShowOrderForm(false)}
        >
          <div className="animate-in slide-in-from-bottom-8 flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-t-3xl border bg-background shadow-2xl duration-300 sm:rounded-3xl">
            <div className="flex items-start justify-between gap-4 border-b p-6">
              <div>
                <h2 className="flex items-center gap-3 text-2xl font-bold">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ShoppingCart className="size-5" />
                  </span>
                  Place your order
                </h2>
                <p className="mt-2 text-muted-foreground">Complete the form below and we&apos;ll contact you within 24 hours.</p>
              </div>
              <button
                aria-label="Close"
                onClick={() => setShowOrderForm(false)}
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="grid flex-1 overflow-y-auto lg:grid-cols-5">
              {/* Selected Products */}
              <div className="border-b bg-muted/40 p-6 lg:col-span-2 lg:border-b-0 lg:border-r">
                <h3 className="mb-4 flex items-center gap-2 font-semibold">
                  <Package className="size-5 text-primary" />
                  Selected products
                  <span className="rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">{selectedProducts.length}</span>
                </h3>
                {selectedProductsData.length === 0 ? (
                  <div className="rounded-2xl border-2 border-dashed p-8 text-center text-sm text-muted-foreground">
                    No products selected yet. Close this window and tap products in the catalog to add them.
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {selectedProductsData.map((product) => (
                      <div key={product.id} className="flex items-center gap-3 rounded-xl border bg-card p-2.5">
                        <Image src={product.image} alt={product.title} width={56} height={56} className="size-14 rounded-lg object-cover" />
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate font-semibold">{product.title}</h4>
                          <p className="truncate text-xs text-muted-foreground">{product.category}</p>
                        </div>
                        <button
                          type="button"
                          aria-label={`Remove ${product.title}`}
                          onClick={() => handleProductToggle(product.id)}
                          className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Order Form */}
              <form onSubmit={handleSubmit} className="grid content-start gap-4 p-6 sm:grid-cols-2 lg:col-span-3">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" value={orderForm.name} onChange={(e) => handleInputChange("name", e.target.value)} required placeholder="Enter your full name" className={fieldClass} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" value={orderForm.email} onChange={(e) => handleInputChange("email", e.target.value)} required placeholder="Enter your email" className={fieldClass} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" value={orderForm.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required placeholder="+250 788 123 456" className={fieldClass} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input id="company" value={orderForm.company} onChange={(e) => handleInputChange("company", e.target.value)} placeholder="Your company name" className={fieldClass} />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="address">Delivery Address *</Label>
                  <Input id="address" value={orderForm.address} onChange={(e) => handleInputChange("address", e.target.value)} required placeholder="Street address" className={fieldClass} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" value={orderForm.city} onChange={(e) => handleInputChange("city", e.target.value)} required placeholder="City" className={fieldClass} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Select value={orderForm.country} onValueChange={(value) => handleInputChange("country", value)}>
                    <SelectTrigger id="country" className={selectTriggerClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="z-[70]">
                      <SelectItem value="Rwanda">Rwanda</SelectItem>
                      <SelectItem value="Uganda">Uganda</SelectItem>
                      <SelectItem value="Kenya">Kenya</SelectItem>
                      <SelectItem value="Tanzania">Tanzania</SelectItem>
                      <SelectItem value="Burundi">Burundi</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Estimated Quantity</Label>
                  <Input id="quantity" value={orderForm.quantity} onChange={(e) => handleInputChange("quantity", e.target.value)} placeholder="e.g., 5 units, 1 set" className={fieldClass} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency Level</Label>
                  <Select value={orderForm.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                    <SelectTrigger id="urgency" className={selectTriggerClass}>
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent className="z-[70]">
                      <SelectItem value="low">Low - No rush</SelectItem>
                      <SelectItem value="medium">Medium - Within 2 weeks</SelectItem>
                      <SelectItem value="high">High - Within 1 week</SelectItem>
                      <SelectItem value="urgent">Urgent - ASAP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="budget">Budget Range (Optional)</Label>
                  <Select value={orderForm.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger id="budget" className={selectTriggerClass}>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent className="z-[70]">
                      <SelectItem value="under-1000">Under $1,000</SelectItem>
                      <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                      <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10000-50000">$10,000 - $50,000</SelectItem>
                      <SelectItem value="over-50000">Over $50,000</SelectItem>
                      <SelectItem value="discuss">Let&apos;s discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="specialRequirements">Special Requirements</Label>
                  <Textarea
                    id="specialRequirements"
                    value={orderForm.specialRequirements}
                    onChange={(e) => handleInputChange("specialRequirements", e.target.value)}
                    placeholder="Any specific requirements, customizations, or additional information..."
                    rows={3}
                    className="rounded-xl bg-foreground/[0.03] shadow-none focus-visible:border-primary focus-visible:bg-background"
                  />
                </div>

                <div className="flex gap-3 pt-2 sm:col-span-2">
                  <Button
                    type="submit"
                    variant={null} className="btn-glow h-12 flex-1 py-0 text-base rounded-full"
                    disabled={isSubmitting || selectedProducts.length === 0}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" /> Submitting...
                      </>
                    ) : (
                      "Submit Order"
                    )}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowOrderForm(false)} className="h-12 rounded-full px-6 hover:bg-muted hover:text-foreground">
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSubmitted && (
        <div className="animate-in fade-in fixed inset-0 z-[60] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm duration-200">
          <div className="animate-in zoom-in-95 w-full max-w-xl overflow-hidden rounded-3xl border bg-background shadow-2xl duration-300">
            <div className="bg-gradient-to-br from-primary to-accent px-8 pb-10 pt-12 text-center text-white">
              <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-white/20 ring-8 ring-white/10">
                <CheckCircle2 className="size-10" />
              </div>
              <h2 className="mt-6 text-2xl font-bold sm:text-3xl">Order submitted successfully!</h2>
              <p className="mx-auto mt-3 max-w-md text-white/90">
                We&apos;ve sent your order details to our WhatsApp (+250 788 315 337). Our team will contact you within 24 hours to confirm details and provide pricing.
              </p>
            </div>
            <div className="p-8">
              <p className="font-semibold">What happens next?</p>
              <ol className="mt-4 space-y-3">
                {[
                  "We'll review your product selection",
                  "Our expert will contact you for specifications",
                  "We'll provide detailed pricing and delivery timeline",
                  "Order confirmation and payment details",
                ].map((step, i) => (
                  <li key={step} className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-sky">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button onClick={resetOrder} variant={null} className="btn-glow h-12 flex-1 py-0 rounded-full">
                  Place Another Order
                </Button>
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = "/#contact")}
                  className="h-12 flex-1 rounded-full hover:bg-muted hover:text-foreground"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
