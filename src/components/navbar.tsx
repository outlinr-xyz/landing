"use client"

import useScroll from "@/lib/use-scroll"
import { cx } from "@/lib/utils"
import Link from "next/link"
import React from "react"
import { Button } from "./ui/outlinr-button"
import OutlinrLogo from "./ui/outliner-logo"

export default function Navigation() {
    const scrolled = useScroll(15)
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 768px)")
        const handleMediaQueryChange = () => {
            setOpen(false)
        }

        mediaQuery.addEventListener("change", handleMediaQueryChange)
        handleMediaQueryChange()

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange)
        }
    }, [])

    return (
        <header
            className={cx(
                "fixed inset-x-3 top-4 z-50 mx-auto flex max-w-6xl transform-gpu animate-slide-down-fade justify-center overflow-hidden rounded-xl border border-transparent px-3 py-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
                open === true ? "h-52" : "h-16",
                scrolled || open === true
                    ? "backdrop-blur-nav max-w-3xl border-gray-100 bg-white/80 shadow-xl shadow-black/5"
                    : "bg-white/0",
            )}
        >
            <div className="w-full md:my-auto">
                <div className="relative flex items-center justify-between">
                    <span>
                        <span className="sr-only">Outlinr logo</span>
                        <OutlinrLogo />
                    </span>
                    <Button className="h-10 font-semibold flex">
                        <Link href="mailto:bakaredavid007@gmail.com"> Contact Us </Link>
                    </Button>
                </div>
            </div>
        </header >
    )
}
