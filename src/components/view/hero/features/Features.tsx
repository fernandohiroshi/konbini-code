import React from 'react'

import { FeatureCard } from './components/FeatureCard'
import { FeatureDescription } from './components/FeatureDescription'
import { FeatureTitle } from './components/FeatureTitle'
import { SkeletonFour } from './components/skeletons/SkeletonFour'
import { SkeletonOne } from './components/skeletons/SkeletonOne'
import { SkeletonThree } from './components/skeletons/SkeletonThree'
import { SkeletonTwo } from './components/skeletons/SkeletonTwo'

export function Features() {
  const features = [
    {
      title: 'What We Do?',
      description:
        'We create unique websites that combine simplicity, style, and modern front-end technologies. See how our innovative approach can transform your online presence.',
      skeleton: <SkeletonOne />,
      className:
        'col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800',
    },
    {
      title: 'Ideas and Design Consulting',
      description:
        'Consulting to turn your ideas into websites. Bring your concepts to life with our creative support.',
      skeleton: <SkeletonTwo />,
      className: 'border-b col-span-1 lg:col-span-2 dark:border-neutral-800',
    },
    {
      title: 'Simplicity and Control with Integrated CMS',
      description:
        'We create websites with Cosmic JS CMS for easy editing of titles, descriptions, and images. Enjoy full control with an intuitive interface.',
      skeleton: <SkeletonThree />,
      className:
        'col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800',
    },
    {
      title: 'Flexible Solutions',
      description:
        'We offer multilingual websites, from budget-friendly options to complex projects. Our focus is on delivering fast and simple sites with quality.',
      skeleton: <SkeletonFour />,
      className: 'col-span-1 lg:col-span-3 border-b lg:border-none',
    },
  ]
  return (
    <div className="relative z-20 mx-auto max-w-7xl py-10 lg:py-40">
      <div className="px-8">
        <h1 className="mx-auto max-w-5xl animate-pulse text-center text-3xl font-medium tracking-tight text-purple-500 lg:text-7xl lg:leading-tight">
          Transform Your Digital Presence with Unique Design Websites
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
