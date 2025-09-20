import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { phone, message } = await request.json()
    
    // WhatsApp Business API integration
    // You can use services like:
    // 1. WhatsApp Business API
    // 2. Twilio WhatsApp API
    // 3. MessageBird WhatsApp API
    // 4. 360Dialog WhatsApp API
    
    const whatsappApiUrl = process.env.WHATSAPP_API_URL
    const whatsappToken = process.env.WHATSAPP_TOKEN
    
    if (!whatsappApiUrl || !whatsappToken) {
      // Fallback: Return WhatsApp direct link
      const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
      return NextResponse.json({ 
        success: true, 
        method: 'direct_link',
        url: whatsappUrl,
        message: 'WhatsApp API not configured, using direct link'
      })
    }
    
    // Send via WhatsApp Business API
    const response = await fetch(whatsappApiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${whatsappToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: phone,
        type: 'text',
        text: { body: message }
      })
    })
    
    if (!response.ok) {
      throw new Error(`WhatsApp API error: ${response.statusText}`)
    }
    
    const result = await response.json()
    
    return NextResponse.json({ 
      success: true, 
      method: 'api',
      messageId: result.messages?.[0]?.id,
      message: 'WhatsApp message sent successfully'
    })
    
  } catch (error) {
    console.error('WhatsApp API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send WhatsApp message',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
