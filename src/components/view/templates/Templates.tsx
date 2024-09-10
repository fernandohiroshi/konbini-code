import { useTranslations } from 'next-intl'

import { FocusCards } from '@/components/ui/aceternity/focus-cards'

import { AnimateTitle } from './components/AnimateTitle'

export function Templates() {
  const t = useTranslations('Templates')
  const cards = [
    {
      title: t('1'),
      src: 'https://cdn.cosmicjs.com/cdb5fb50-6e1c-11ef-a492-5bdc7520fe60-minimalist.png',
    },
    {
      title: t('2'),
      src: 'https://cdn.cosmicjs.com/cdb31520-6e1c-11ef-a492-5bdc7520fe60-modern.png',
    },
    {
      title: t('3'),
      src: 'https://cdn.cosmicjs.com/cdb22ac0-6e1c-11ef-a492-5bdc7520fe60-organic.png',
    },
    {
      title: t('4'),
      src: 'https://cdn.cosmicjs.com/cda4e450-6e1c-11ef-a492-5bdc7520fe60-bentobox.png',
    },
    {
      title: t('5'),
      src: 'https://cdn.cosmicjs.com/cdb0f240-6e1c-11ef-a492-5bdc7520fe60-anime-game.jpg',
    },
    {
      title: t('6'),
      src: 'https://cdn.cosmicjs.com/cd817dd0-6e1c-11ef-a492-5bdc7520fe60-illustration.png',
    },
    {
      title: t('7'),
      src: 'https://cdn.cosmicjs.com/cdb3b160-6e1c-11ef-a492-5bdc7520fe60-clean.png',
    },
    {
      title: t('8'),
      src: 'https://cdn.cosmicjs.com/cdb69790-6e1c-11ef-a492-5bdc7520fe60-underground.png',
    },
  ]

  return (
    <section className="mb-20 scroll-mt-24 md:mb-40" id="templates">
      <AnimateTitle />
      <FocusCards cards={cards} />
    </section>
  )
}
