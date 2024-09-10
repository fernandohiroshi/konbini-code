import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { MobileMenu } from './components/mobileMenu/MobileMenu'
import { Nav } from './components/nav/Nav'

export function Header() {
  const t = useTranslations('Project')
  return (
    <header className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-2xl dark:bg-black/60">
      <div className="mx-auto hidden max-w-7xl items-center justify-between px-8 py-4 lg:flex">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://cdn.cosmicjs.com/38ab92d0-6e1d-11ef-a492-5bdc7520fe60-logo.png"
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
      <div className="flex justify-between px-3 py-4 md:px-8 lg:hidden">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://cdn.cosmicjs.com/38ab92d0-6e1d-11ef-a492-5bdc7520fe60-logo.png"
            quality={100}
            width={32}
            height={32}
            alt="Konbini Code Logo"
            className="duration-700 ease-in-out hover:scale-125 hover:brightness-125"
          />
          <span className="text-xl font-semibold lowercase"> {t('name')}</span>
        </Link>
        <MobileMenu />
      </div>
    </header>
  )
}
