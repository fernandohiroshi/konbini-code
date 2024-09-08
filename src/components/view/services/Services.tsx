import {
  IconFileText,
  IconPalette,
  IconArticle,
  IconSettings,
  IconCalendarEvent,
  IconBuildingSkyscraper,
} from '@tabler/icons-react'
import { useTranslations } from 'next-intl'

import { Service } from './Service'

export function Services() {
  const t = useTranslations('Services')

  const services = [
    {
      title: t('1.title'),
      description: t('1.description'),
      icon: <IconFileText />,
      className: 'col-span-1 lg:col-span-2',
    },
    {
      title: t('2.title'),
      description: t('2.description'),
      icon: <IconPalette />,
      className: 'col-span-1 lg:col-span-2',
    },
    {
      title: t('3.title'),
      description: t('3.description'),
      icon: <IconArticle />,
      className: 'col-span-1 lg:col-span-2',
    },
    {
      title: t('4.title'),
      description: t('4.description'),
      icon: <IconSettings />,
      className: 'col-span-1 lg:col-span-2',
    },
    {
      title: t('5.title'),
      description: t('5.description'),
      icon: <IconCalendarEvent />,
      className: 'col-span-1 lg:col-span-2',
    },
    {
      title: t('6.title'),
      description: t('6.description'),
      icon: <IconBuildingSkyscraper />,
    },
  ]
  return (
    <section>
      <h2 className="text-xl md:text-3xl">{t('section-title')}</h2>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Service key={service.title} {...service} index={index} />
        ))}
      </div>
    </section>
  )
}
