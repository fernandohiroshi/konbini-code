import { useTranslations } from 'next-intl'

import { FocusCards } from '@/components/ui/aceternity/focus-cards'

import { AnimateTitle } from './components/AnimateTitle'

export function Templates() {
  const t = useTranslations('Templates')
  const cards = [
    {
      title: t('1'),
      src: 'https://imgix.cosmicjs.com/30b853b0-748a-11ef-98d9-cbcb72f3073e-minimalist.jpg',
    },
    {
      title: t('2'),
      src: 'https://imgix.cosmicjs.com/30ba7690-748a-11ef-98d9-cbcb72f3073e-modern.jpg',
    },
    {
      title: t('3'),
      src: 'https://imgix.cosmicjs.com/30ee7ee0-748a-11ef-98d9-cbcb72f3073e-organic.jpg',
    },
    {
      title: t('4'),
      src: 'https://imgix.cosmicjs.com/30ef9050-748a-11ef-98d9-cbcb72f3073e-bentobox.jpg',
    },
    {
      title: t('5'),
      src: 'https://imgix.cosmicjs.com/30f20150-748a-11ef-98d9-cbcb72f3073e-anime_game.jpg',
    },
    {
      title: t('6'),
      src: 'https://imgix.cosmicjs.com/30c17b70-748a-11ef-98d9-cbcb72f3073e-illustration.jpg',
    },
    {
      title: t('7'),
      src: 'https://imgix.cosmicjs.com/30f312c0-748a-11ef-98d9-cbcb72f3073e-clean.jpg',
    },
    {
      title: t('8'),
      src: 'https://imgix.cosmicjs.com/30f02c90-748a-11ef-98d9-cbcb72f3073e-underground.jpg',
    },
  ]

  return (
    <section className="mb-20 scroll-mt-24 md:mb-40" id="templates">
      <AnimateTitle />
      <FocusCards cards={cards} />
    </section>
  )
}
