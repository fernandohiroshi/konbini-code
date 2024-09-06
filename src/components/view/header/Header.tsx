import { Link } from '@/i18n/routing'
import logo from '@/images/logo.png'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Nav } from './components/nav/Nav'

export function Header() {
  const t = useTranslations('Project')
  return (
    <header className="sticky top-0 w-full bg-background/60 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            quality={100}
            width={32}
            height={32}
            alt="Konbini Code Logo"
            className="duration-700 ease-in-out hover:scale-125 hover:brightness-125"
          />
          <span className="text-xl font-semibold lowercase"> {t('name')}</span>
        </Link>
        <Nav />
      </div>
    </header>
  )
}
