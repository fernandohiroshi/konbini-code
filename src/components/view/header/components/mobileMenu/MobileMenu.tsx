'use client'

import { AlignJustify, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import { ThemeToggle } from '@/components/themes/ThemeToggle'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/shadcn/menubar'
import { LanguageToggle } from '@/components/view/languages/LanguageToggle'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme() // Hook para capturar o tema atual

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    setIsOpen(false)
  }, [theme])

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger onClick={toggleMenu} className="cursor-pointer">
          {isOpen ? <X size={30} /> : <AlignJustify size={30} />}
        </MenubarTrigger>
        {isOpen && (
          <MenubarContent className="lg:hidden">
            <Link href="#services" onClick={closeMenu}>
              <MenubarItem>Services</MenubarItem>
            </Link>
            <Link href="#templates" onClick={closeMenu}>
              <MenubarItem>Templates</MenubarItem>
            </Link>
            <Link href="#questions" onClick={closeMenu}>
              <MenubarItem>Questions</MenubarItem>
            </Link>
            <Link href="#contact" onClick={closeMenu}>
              <MenubarItem>Contact</MenubarItem>
            </Link>
            <MenubarSeparator />
            <MenubarItem className="flex items-center justify-evenly">
              <LanguageToggle />
              <ThemeToggle />
            </MenubarItem>
          </MenubarContent>
        )}
      </MenubarMenu>
    </Menubar>
  )
}
