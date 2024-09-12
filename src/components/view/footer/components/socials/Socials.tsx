'use client'

import { animate, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useEffect } from 'react'

import { cn } from '@/lib/utils'

export function Socials() {
  const t = useTranslations('Socials')
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
      <CardTitle> {t('section-title')}</CardTitle>
      <CardDescription>{t('description')}</CardDescription>
    </Card>
  )
}

const circleAnimation = {
  scale: [1, 1.1, 1],
  y: [0, -4, 0],
  transition: { duration: 0.8, repeat: Infinity, repeatDelay: 1 },
}

const circleClassNames = ['circle-1', 'circle-2', 'circle-3']

const Skeleton = () => {
  useEffect(() => {
    circleClassNames.forEach((className) => {
      const element = document.querySelector(`.${className}`)
      if (element) {
        animate(element, circleAnimation)
      }
    })
  }, [])

  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden p-8">
      <div className="flex flex-shrink-0 flex-row items-center justify-center gap-4">
        <a
          href="https://wa.me/5545988311915"
          className="duration-300 ease-in-out hover:scale-125"
        >
          <Container className="circle-1 h-16 w-16">
            <Image
              src="https://imgix.cosmicjs.com/75ab21e0-711b-11ef-9f27-0d70a946df1f-whatsapp.png"
              alt="WhatsApp"
              title="WhatsApp"
              width={32}
              height={32}
              quality={100}
            />
          </Container>
        </a>

        <a
          href="https://www.instagram.com/fernando_hiroshi"
          className="duration-300 ease-in-out hover:scale-125"
        >
          <Container className="circle-2 h-24 w-24">
            <Image
              src="https://imgix.cosmicjs.com/75b4bed0-711b-11ef-9f27-0d70a946df1f-instagram.png"
              alt="Instagram"
              title="Instagram"
              width={40}
              height={40}
              quality={100}
            />
          </Container>
        </a>

        <a
          href="https://www.linkedin.com/in/fernando-hiroshi/"
          className="duration-300 ease-in-out hover:scale-125"
        >
          <Container className="circle-3 h-16 w-16">
            <Image
              src="https://imgix.cosmicjs.com/75b226c0-711b-11ef-9f27-0d70a946df1f-linkedin.png"
              alt="LinkedIn"
              title="Linkedin"
              width={32}
              height={32}
              quality={100}
            />
          </Container>
        </a>
      </div>

      <div className="absolute z-40 m-auto h-full w-px animate-move bg-gradient-to-b from-transparent via-purple-500 to-transparent">
        <div className="absolute -left-10 top-1/2 h-32 w-10 -translate-y-1/2">
          <Sparkles />
        </div>
      </div>
    </div>
  )
}

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1
  const randomOpacity = () => Math.random()
  const random = () => Math.random()

  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: '50%',
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'group w-full rounded-xl border bg-zinc-100 p-4 dark:bg-transparent md:p-8',
        className,
      )}
    >
      {children}
    </div>
  )
}

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <h3 className={cn('py-2 text-lg font-semibold', className)}>{children}</h3>
  )
}

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <p
      className={cn(
        'max-w-sm text-xs font-normal opacity-80 md:text-sm',
        className,
      )}
    >
      {children}
    </p>
  )
}

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string
  children: React.ReactNode
  showGradient?: boolean
}) => {
  return (
    <div
      className={cn(
        'z-40 h-[18rem] rounded-xl',
        className,
        showGradient &&
          'bg-zinc-200 [mask-image:radial-gradient(80%_80%_at_50%_50%,white_0%,transparent_100%)] dark:bg-transparent',
      )}
    >
      {children}
    </div>
  )
}

const Container = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        `flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(248,248,248,0.80)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] dark:bg-[rgba(248,248,248,0)]`,
        className,
      )}
    >
      {children}
    </div>
  )
}
