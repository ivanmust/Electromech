"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import { useState } from "react"
import { CheckCircle, ShoppingCart, Package, Phone, Mail, MapPin } from "lucide-react"

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

  // Generate array of product images from 1 to 28
  const products = Array.from({ length: 28 }, (_, index) => ({
    id: index + 1,
    image: `/images/${index + 1}.jpg`,
    title: `Product ${index + 1}`,
    description: `High-quality water engineering equipment and solutions - Product ${index + 1}`,
    category: index < 8 ? "Water Pumps" : index < 16 ? "Treatment Systems" : index < 24 ? "Irrigation Equipment" : "General Machinery"
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

  return (
    <main className="min-h-screen scroll-smooth">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Our Products
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 px-4">
              Professional Water Engineering
              <span className="block text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                Equipment & Solutions
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-pretty max-w-4xl mx-auto leading-relaxed px-4">
              Explore our comprehensive range of high-quality water engineering equipment, pumps, 
              treatment systems, and industrial machinery designed for reliability and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance mb-4 px-4">
              Our Product Catalog
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground text-pretty max-w-3xl mx-auto px-4 mb-6">
              Browse through our extensive collection of professional water engineering equipment and solutions. 
              Select products you're interested in and place an order.
            </p>
            {selectedProducts.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  {selectedProducts.length} product{selectedProducts.length !== 1 ? 's' : ''} selected
                </div>
                <Button 
                  onClick={() => setShowOrderForm(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Place Order
                </Button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product) => (
              <Card 
                key={product.id} 
                className={`group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 cursor-pointer ${
                  selectedProducts.includes(product.id)
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => handleProductToggle(product.id)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-bold text-primary">#{product.id}</span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Checkbox
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => handleProductToggle(product.id)}
                      className="w-5 h-5 bg-white/90"
                    />
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    {product.description}
                  </p>
                  <p className="text-xs text-primary font-medium">{product.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 sm:mt-20">
            <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-8 sm:p-12 border border-primary/10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Interested in Our Products?</h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact our expert team for detailed product information, specifications, and pricing. 
                We're here to help you find the perfect solution for your water engineering needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setShowOrderForm(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Place Order
                </Button>
                <a
                  href="tel:+250788406109"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Call Now: +250 788 406 109
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Modal */}
      {showOrderForm && !isSubmitted && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold flex items-center">
                  <ShoppingCart className="w-6 h-6 mr-3 text-primary" />
                  Place Your Order
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowOrderForm(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </Button>
              </div>
              <p className="text-muted-foreground mt-2">
                Complete the form below and we'll contact you within 24 hours
              </p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Selected Products */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Package className="w-5 h-5 mr-2 text-primary" />
                    Selected Products ({selectedProducts.length})
                  </h3>
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {selectedProductsData.map((product) => (
                      <div key={product.id} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={60}
                          height={60}
                          className="rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold">{product.title}</h4>
                          <p className="text-sm text-muted-foreground">{product.category}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleProductToggle(product.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Form */}
                <div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={orderForm.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={orderForm.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={orderForm.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        placeholder="+250 788 123 456"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        value={orderForm.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Delivery Address *</Label>
                      <Input
                        id="address"
                        value={orderForm.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        required
                        placeholder="Street address"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={orderForm.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          required
                          placeholder="City"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country *</Label>
                        <Select value={orderForm.country} onValueChange={(value) => handleInputChange("country", value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Rwanda">Rwanda</SelectItem>
                            <SelectItem value="Uganda">Uganda</SelectItem>
                            <SelectItem value="Kenya">Kenya</SelectItem>
                            <SelectItem value="Tanzania">Tanzania</SelectItem>
                            <SelectItem value="Burundi">Burundi</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quantity">Estimated Quantity</Label>
                      <Input
                        id="quantity"
                        value={orderForm.quantity}
                        onChange={(e) => handleInputChange("quantity", e.target.value)}
                        placeholder="e.g., 5 units, 1 set"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="urgency">Urgency Level</Label>
                      <Select value={orderForm.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - No rush</SelectItem>
                          <SelectItem value="medium">Medium - Within 2 weeks</SelectItem>
                          <SelectItem value="high">High - Within 1 week</SelectItem>
                          <SelectItem value="urgent">Urgent - ASAP</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range (Optional)</Label>
                      <Select value={orderForm.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1000">Under $1,000</SelectItem>
                          <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                          <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10000-50000">$10,000 - $50,000</SelectItem>
                          <SelectItem value="over-50000">Over $50,000</SelectItem>
                          <SelectItem value="discuss">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialRequirements">Special Requirements</Label>
                      <Textarea
                        id="specialRequirements"
                        value={orderForm.specialRequirements}
                        onChange={(e) => handleInputChange("specialRequirements", e.target.value)}
                        placeholder="Any specific requirements, customizations, or additional information..."
                        rows={3}
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        type="submit"
                        className="flex-1"
                        disabled={isSubmitting || selectedProducts.length === 0}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Order"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowOrderForm(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl max-w-2xl w-full">
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">Order Submitted Successfully!</h2>
              <p className="text-green-700 text-lg mb-6">
                Thank you for your order! We've sent your order details to our WhatsApp (+250 788 315 337) and our team will contact you within 24 hours to confirm details and provide pricing information.
              </p>
              <div className="space-y-4 mb-8">
                <p className="text-green-600 font-semibold">What happens next?</p>
                <ul className="text-green-700 text-left max-w-md mx-auto space-y-2">
                  <li>• We'll review your product selection</li>
                  <li>• Our expert will contact you for specifications</li>
                  <li>• We'll provide detailed pricing and delivery timeline</li>
                  <li>• Order confirmation and payment details</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => {
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
                  }}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Place Another Order
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.href = '/#contact'}
                  className="border-green-600 text-green-600 hover:bg-green-50"
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
