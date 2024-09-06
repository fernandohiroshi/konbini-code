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
      title: t('Service1.title'),
      description: t('Service1.description'),
      icon: <IconFileText />,
      className: 'col-span-1 lg:col-span-2',
    },
    {
      title: t('Service2.title'),
      description: t('Service2.description'),
      icon: <IconPalette />,
      className: 'col-span-1 lg:col-span-2',
    },
    {
      title: t('Service3.title'),
      description: t('Service3.description'),
      icon: <IconArticle />,
      className: 'col-span-1 lg:col-span-2',
    },
    {
      title: t('Service4.title'),
      description: t('Service4.description'),
      icon: <IconSettings />,
      className: 'col-span-1 lg:col-span-2',
    },
    {
      title: t('Service5.title'),
      description: t('Service5.description'),
      icon: <IconCalendarEvent />,
      className: 'col-span-1 lg:col-span-2',
    },
    {
      title: t('Service6.title'),
      description: t('Service6.description'),
      icon: <IconBuildingSkyscraper />,
    },
  ]
  return (
    <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <Service key={service.title} {...service} index={index} />
      ))}
    </section>
  )
}
