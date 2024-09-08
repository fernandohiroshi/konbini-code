import { useTranslations } from 'next-intl'
import React from 'react'

import { Cover } from '@/components/ui/aceternity/cover'

export function AnimateTitle() {
  const t = useTranslations('Templates')
  return (
    <div className="pb-20">
      <h1 className="relative z-20 mx-auto max-w-7xl bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-700 bg-clip-text text-center text-xl font-semibold text-transparent dark:from-zinc-800 dark:via-white dark:to-white md:text-xl">
        <Cover>
          <span className="text-4xl lg:text-7xl">{t('section-title')}</span>
        </Cover>{' '}
        <br />
        {t('description')}{' '}
      </h1>
    </div>
  )
}
