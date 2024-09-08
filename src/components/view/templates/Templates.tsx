import anime from '@/images/templates/anime-game.jpg'
import bentobox from '@/images/templates/bentobox.png'
import clean from '@/images/templates/clean.png'
import illustration from '@/images/templates/illustration.png'
import minimalist from '@/images/templates/minimalist.png'
import modern from '@/images/templates/modern.png'
import organic from '@/images/templates/organic.png'
import underground from '@/images/templates/underground.png'
import { useTranslations } from 'next-intl'

import { FocusCards } from '@/components/ui/aceternity/focus-cards'

export function Templates() {
  const t = useTranslations('Templates')
  const cards = [
    {
      title: t('1'),
      src: minimalist,
    },
    {
      title: t('2'),
      src: modern,
    },
    {
      title: t('3'),
      src: organic,
    },
    {
      title: t('4'),
      src: bentobox,
    },
    {
      title: t('5'),
      src: anime,
    },
    {
      title: t('6'),
      src: illustration,
    },
    {
      title: t('7'),
      src: clean,
    },
    {
      title: t('8'),
      src: underground,
    },
  ]

  return (
    <section className="mb-20">
      <FocusCards cards={cards} />
    </section>
  )
}
