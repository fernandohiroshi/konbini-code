'use client'

import { Link } from '@/i18n/routing'
import { AlignJustify, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
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
  const { theme } = useTheme()
  const t = useTranslations('Nav')

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
            <Link href="/#about" onClick={closeMenu}>
              <MenubarItem> {t('about')}</MenubarItem>
            </Link>
            <Link href="/#services" onClick={closeMenu}>
              <MenubarItem>{t('services')}</MenubarItem>
            </Link>
            <Link href="/templates" onClick={closeMenu}>
              <MenubarItem>{t('templates')}</MenubarItem>
            </Link>
            <Link href="/#questions" onClick={closeMenu}>
              <MenubarItem> {t('questions')}</MenubarItem>
            </Link>
            <Link href="#contact" onClick={closeMenu}>
              <MenubarItem> {t('contact')}</MenubarItem>
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
