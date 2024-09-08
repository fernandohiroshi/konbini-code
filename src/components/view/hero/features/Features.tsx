import { useTranslations } from 'next-intl'
import React from 'react'

import { FeatureCard } from './components/FeatureCard'
import { FeatureDescription } from './components/FeatureDescription'
import { FeatureTitle } from './components/FeatureTitle'
import { SkeletonFour } from './components/skeletons/SkeletonFour'
import { SkeletonOne } from './components/skeletons/SkeletonOne'
import { SkeletonThree } from './components/skeletons/SkeletonThree'
import { SkeletonTwo } from './components/skeletons/SkeletonTwo'

export function Features() {
  const t = useTranslations('Features')

  const features = [
    {
      title: t('1.title'),
      description: t('1.description'),
      skeleton: <SkeletonOne />,
      className:
        'col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800',
    },
    {
      title: t('2.title'),
      description: t('2.description'),
      skeleton: <SkeletonTwo />,
      className: 'border-b col-span-1 lg:col-span-2 dark:border-neutral-800',
    },
    {
      title: t('3.title'),
      description: t('3.description'),
      skeleton: <SkeletonThree />,
      className: 'col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800',
    },
    {
      title: t('4.title'),
      description: t('4.description'),
      skeleton: <SkeletonFour />,
      className: 'col-span-1 lg:col-span-3 border-b lg:border-none',
    },
  ]
  return (
    <div className="relative z-20 mx-auto max-w-7xl py-10 lg:py-40">
      <div className="px-8">
        <h1 className="mx-auto max-w-4xl animate-pulse text-center text-2xl font-medium tracking-tight text-purple-500 md:text-4xl lg:text-5xl lg:leading-tight">
          {t('section-title')}
        </h1>
      </div>

      <section className="relative">
        <div className="mt-12 grid grid-cols-1 rounded-md dark:border-neutral-800 lg:grid-cols-6 xl:border">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </section>
    </div>
  )
}
