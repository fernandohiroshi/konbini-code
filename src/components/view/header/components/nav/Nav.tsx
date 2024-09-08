import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

import { ThemeToggle } from '@/components/themes/ThemeToggle'
import { LanguageToggle } from '@/components/view/languages/LanguageToggle'

export function Nav() {
  const t = useTranslations('Nav')
  return (
    <nav className="flex items-center justify-end gap-2">
      <Link
        className="rounded-md px-3 py-1 duration-500 ease-in-out hover:bg-accent"
        href="/#about"
      >
        {t('about')}
      </Link>
      <Link
        className="rounded-md px-3 py-1 duration-500 ease-in-out hover:bg-accent"
        href="/#services"
      >
        {t('services')}
      </Link>
      <Link
        className="rounded-md px-3 py-1 duration-500 ease-in-out hover:bg-accent"
        href="/templates"
      >
        {t('templates')}
      </Link>
      <Link
        className="rounded-md px-3 py-1 duration-500 ease-in-out hover:bg-accent"
        href="/#questions"
      >
        {t('questions')}
      </Link>
      <Link
        className="rounded-md px-3 py-1 duration-500 ease-in-out hover:bg-accent"
        href="#contact"
      >
        {t('contact')}
      </Link>
      <div className="flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </nav>
  )
}
