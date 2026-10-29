import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistMono } from "geist/font/mono"
import { Poppins } from "next/font/google"
import { Suspense } from "react"
import { ThemeProvider } from "next-themes"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SiteEffects } from "@/components/site-effects"
import "./globals.css"

// Poppins: the clean geometric face used across headings and body text
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-poppins", display: "swap" })

const description =
  "Leading water and energy solutions provider in Africa. Specializing in water pumps, irrigation, water treatment, swimming pools, fountains, and machinery supply."

export const metadata: Metadata = {
  // Used to build absolute URLs for the share image; change if the site is hosted on another domain
  metadataBase: new URL("https://electromech.co.rw"),
  title: {
    default: "Electromech - Water and Energy Solutions Provider",
    template: "%s | Electromech",
  },
  description,
  keywords: [
    "water pumps Rwanda",
    "solar water pumping",
    "irrigation Rwanda",
    "water treatment",
    "swimming pools Kigali",
    "fountains",
    "generators",
    "Electromech",
  ],
  openGraph: {
    type: "website",
    siteName: "Electromech",
    title: "Electromech - Water and Energy Solutions Provider",
    description,
    locale: "en_RW",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electromech - Water and Energy Solutions Provider",
    description,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8faff" },
    { media: "(prefers-color-scheme: dark)", color: "#080c1f" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${poppins.variable} ${GeistMono.variable}`}>
        {/* Dark by default; the header toggle switches to light and remembers the choice */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Suspense fallback={null}>{children}</Suspense>
          <WhatsAppButton />
          <SiteEffects />
        </ThemeProvider>
      </body>
    </html>
  )
}
