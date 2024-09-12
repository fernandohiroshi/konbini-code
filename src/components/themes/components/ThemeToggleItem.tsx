import { useTranslations } from 'next-intl'

export function DarkModeItem() {
  const t = useTranslations('ThemeToggle')
  return <p>{t('dark')}</p>
}

export function LightModeItem() {
  const t = useTranslations('ThemeToggle')
  return <p>{t('light')}</p>
}

export function SystemModeItem() {
  const t = useTranslations('ThemeToggle')
  return <p>{t('system')}</p>
}
