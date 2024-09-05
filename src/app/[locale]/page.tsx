import { useTranslations } from 'next-intl'

import { ThemeToggle } from '@/components/themes/ThemeToggle'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <main>
      <h1>{t('title')}</h1>
      <br />
      <ThemeToggle />
    </main>
  )
}
