"use client"

import { useEffect, useState, type MouseEvent } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

type ViewTransitionDocument = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> }
}

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const isDark = !mounted || resolvedTheme === "dark"

  // Switch theme with a circle that grows out of the button (falls back to an instant switch)
  const toggle = (e: MouseEvent<HTMLButtonElement>) => {
    const next = isDark ? "light" : "dark"
    const doc = document as ViewTransitionDocument
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!doc.startViewTransition || reduceMotion) return setTheme(next)

    const x = e.clientX || window.innerWidth / 2
    const y = e.clientY || 0
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
    const transition = doc.startViewTransition(() => setTheme(next))
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" },
      )
    })
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative flex size-10 items-center justify-center overflow-hidden rounded-full border border-foreground/10 bg-foreground/[0.03] text-foreground/75 transition-colors hover:border-foreground/25 hover:text-foreground",
        className,
      )}
    >
      <Sun className={cn("absolute size-4 transition-all duration-500", isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100")} />
      <Moon className={cn("absolute size-4 transition-all duration-500", isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0")} />
    </button>
  )
}
