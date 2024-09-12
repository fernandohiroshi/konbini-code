import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

import { ThemeToggle } from '@/components/themes/ThemeToggle'
import { Button } from '@/components/ui/shadcn/button'
import { LanguageToggle } from '@/components/view/languages/LanguageToggle'

export function Nav() {
  const t = useTranslations('Nav')
  return (
    <nav className="flex items-center justify-end gap-2">
      <Link title="About Us" href="#about">
        <Button variant="ghost">{t('about')}</Button>
      </Link>
      <Link title="Services" href="#services">
        <Button variant="ghost"> {t('services')}</Button>
      </Link>
      <Link title="Templates" href="#templates">
        <Button variant="ghost">{t('templates')}</Button>
      </Link>
      <Link title="Questions" href="#questions">
        <Button variant="ghost">{t('questions')}</Button>
      </Link>
      <Link title="Contact" href="#contact">
        <Button variant="ghost">{t('contact')}</Button>
      </Link>
      <div className="flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </nav>
  )
}
