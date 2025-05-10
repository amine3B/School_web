"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
        <nav className="flex flex-col gap-6 mt-10">
          <Link
            href="#approche"
            className="text-lg font-medium text-[#0A3B5B] hover:text-[#1EAAA5] transition-colors"
            onClick={() => setOpen(false)}
          >
            Notre Approche
          </Link>
          <Link
            href="#infos"
            className="text-lg font-medium text-[#0A3B5B] hover:text-[#1EAAA5] transition-colors"
            onClick={() => setOpen(false)}
          >
            Infos Pratiques
          </Link>
          <Link
            href="#activites"
            className="text-lg font-medium text-[#0A3B5B] hover:text-[#1EAAA5] transition-colors"
            onClick={() => setOpen(false)}
          >
            Activités
          </Link>
          <Link
            href="#infrastructure"
            className="text-lg font-medium text-[#0A3B5B] hover:text-[#1EAAA5] transition-colors"
            onClick={() => setOpen(false)}
          >
            Infrastructure
          </Link>
          <Link
            href="#actualites"
            className="text-lg font-medium text-[#0A3B5B] hover:text-[#1EAAA5] transition-colors"
            onClick={() => setOpen(false)}
          >
            Actualités
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium text-[#0A3B5B] hover:text-[#1EAAA5] transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Button className="mt-4 rounded-full bg-[#1EAAA5] hover:bg-[#1EAAA5]/90 text-white">Inscription</Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
