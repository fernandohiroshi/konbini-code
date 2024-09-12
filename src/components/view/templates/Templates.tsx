import { useTranslations } from 'next-intl'

import { FocusCards } from '@/components/ui/aceternity/focus-cards'

import { AnimateTitle } from './components/AnimateTitle'

export function Templates() {
  const t = useTranslations('Templates')
  const cards = [
    {
      title: t('1'),
      src: 'https://imgix.cosmicjs.com/eed0cd70-7118-11ef-a74a-0b2d32a43246-minimalist.jpg',
    },
    {
      title: t('2'),
      src: 'https://imgix.cosmicjs.com/ee8397d0-7118-11ef-a74a-0b2d32a43246-modern.jpg',
    },
    {
      title: t('3'),
      src: 'https://imgix.cosmicjs.com/eec89010-7118-11ef-a74a-0b2d32a43246-organic.jpg',
    },
    {
      title: t('4'),
      src: 'https://imgix.cosmicjs.com/eecef8b0-7118-11ef-a74a-0b2d32a43246-bentobox.jpg',
    },
    {
      title: t('5'),
      src: 'https://imgix.cosmicjs.com/eec7a5b0-7118-11ef-a74a-0b2d32a43246-anime_game.jpg',
    },
    {
      title: t('6'),
      src: 'https://imgix.cosmicjs.com/ee82fb90-7118-11ef-a74a-0b2d32a43246-illustration.jpg',
    },
    {
      title: t('7'),
      src: 'https://imgix.cosmicjs.com/eec90540-7118-11ef-a74a-0b2d32a43246-clean.jpg',
    },
    {
      title: t('8'),
      src: 'https://imgix.cosmicjs.com/eec6e260-7118-11ef-a74a-0b2d32a43246-underground.jpg',
    },
  ]

  return (
    <section className="mb-20 scroll-mt-24 md:mb-40" id="templates">
      <AnimateTitle />
      <FocusCards cards={cards} />
    </section>
  )
}
