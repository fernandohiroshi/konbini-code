import { useTranslations } from 'next-intl'
import React from 'react'

import { Cover } from '@/components/ui/aceternity/cover'

export function AnimateTitle() {
  const t = useTranslations('Templates')
  return (
    <div className="mb-8">
      <div className="relative z-20 mx-auto max-w-7xl bg-clip-text text-start text-sm md:text-base">
        <Cover>
          <h1 className="text-2xl md:text-4xl">{t('section-title')}</h1>
        </Cover>{' '}
        <br />
        <p> {t('description')} </p>
      </div>
    </div>
  )
}
