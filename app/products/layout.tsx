import type { Metadata } from "next"

// The products page is a client component, so its metadata lives here
export const metadata: Metadata = {
  title: "Products",
  description:
    "Water pumps, pool equipment, fountains and water features, water treatment systems and generators. Select products and request a quote from Electromech.",
  alternates: { canonical: "/products" },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children
}
