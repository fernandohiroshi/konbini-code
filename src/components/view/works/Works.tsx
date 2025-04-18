'use client'

import { Carousel } from '@/components/ui/aceternity/corousel'
import { useTranslations } from 'next-intl'

export function Works() {
  const t = useTranslations('Works')

  const slideData = [
    {
      title: 'Caroline Portfolio',
      button: t('visitSite'),
      src: 'https://imgix.cosmicjs.com/97b5d5e0-ae39-11ef-8a63-eb57d6c77a36-profilesite.png',
      buttonUrl: 'https://carolinesouza.art',
    },
    {
      title: 'Vip Tech Store',
      button: t('visitSite'),
      src: 'https://imgix.cosmicjs.com/943a8210-1c27-11f0-89bb-33da281fd3f1-Macbook-Air-viptechstore-vercel-app.png',
      buttonUrl: 'https://viptechstore.vercel.app/',
    },
    {
      title: 'Dr Hair',
      button: t('visitSite'),
      src: 'https://imgix.cosmicjs.com/25a13b20-1c20-11f0-89bb-33da281fd3f1-w3.png',
      buttonUrl: 'https://drhairtransplantecapilar.com.br/pt',
    },
  ]

  return (
    <div className="relative h-full w-full overflow-hidden pb-20">
      <h2 className="animate-pulse text-xl md:text-4xl">{t('lastWorks')}</h2>
      <Carousel slides={slideData} />
    </div>
  )
}
