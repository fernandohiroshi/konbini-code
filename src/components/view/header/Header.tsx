import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { ThemeToggle } from '@/components/themes/ThemeToggle'

import { LanguageToggle } from '../languages/LanguageToggle'
import { Nav } from './components/nav/Nav'

export function Header() {
  const t = useTranslations('Project')
  return (
    <header className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-2xl dark:bg-black/60">
      <div className="mx-auto hidden max-w-7xl items-center justify-between px-8 py-4 lg:flex">
        <Link href="/" title="Home" className="flex items-center gap-2">
          <Image
            src="https://cdn.cosmicjs.com/ad0052f0-711b-11ef-9f27-0d70a946df1f-logo.png"
            quality={100}
            width={32}
            height={32}
            alt="Konbini Code Logo"
            className="duration-500 ease-in-out hover:brightness-125 md:hover:scale-125"
          />
          <span className="text-xl font-semibold lowercase duration-500 ease-in-out hover:text-purple-500">
            {t('name')}
          </span>
        </Link>
        <Nav />
      </div>

      {/* MOBILE */}
      <Link
        href="#"
        title="Home"
        className="flex items-center justify-between px-4 py-4 lg:hidden"
      >
        <div className="flex items-center gap-2">
          <Image
            src="https://cdn.cosmicjs.com/ad0052f0-711b-11ef-9f27-0d70a946df1f-logo.png"
            quality={100}
            width={32}
            height={32}
            alt="Konbini Code Logo"
            className="duration-500 ease-in-out hover:brightness-125"
          />
          <span className="text-xl font-semibold lowercase">{t('name')}</span>
        </div>
        <div>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </Link>
    </header>
  )
}
