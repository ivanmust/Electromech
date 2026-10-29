"use client"

import { useEffect } from "react"

// Page-wide interaction effects that only need one listener each:
// - feeds the cursor position to the nearest `.spotlight` card (used by its glow in globals.css)
// - drives the scroll progress bar via the --scroll CSS variable on <html>
export function SiteEffects() {
  useEffect(() => {
    const root = document.documentElement

    const onPointerMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.(".spotlight") as HTMLElement | null
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`)
      card.style.setProperty("--my", `${e.clientY - rect.top}px`)
    }

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const max = root.scrollHeight - window.innerHeight
        root.style.setProperty("--scroll", max > 0 ? String(window.scrollY / max) : "0")
      })
    }

    onScroll()
    document.addEventListener("pointermove", onPointerMove, { passive: true })
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return null
}
