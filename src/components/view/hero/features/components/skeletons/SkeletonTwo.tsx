'use client'

import s2_01 from '@/images/hero/S2_01.png'
import s2_02 from '@/images/hero/s2_02.png'
import s2_03 from '@/images/hero/s2_03.png'
import s2_04 from '@/images/hero/s2_04.png'
import s2_05 from '@/images/hero/s2_05.png'
import s2_06 from '@/images/hero/s2_06.png'
import s2_07 from '@/images/hero/s2_07.png'
import s2_08 from '@/images/hero/s2_08.png'
import s2_09 from '@/images/hero/s2_09.png'
import s2_10 from '@/images/hero/s2_10.png'
import s2_11 from '@/images/hero/s2_11.png'
import s2_12 from '@/images/hero/s2_12.png'
import s2_13 from '@/images/hero/s2_13.png'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function SkeletonTwo() {
  const images = [s2_01, s2_02, s2_03, s2_04, s2_05, s2_06, s2_07]

  const images2 = [s2_08, s2_09, s2_10, s2_11, s2_12, s2_13]

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  }

  return (
    <div className="relative flex h-full flex-col items-start gap-10 overflow-hidden p-8">
      <div className="-ml-20 flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={`images-first-${idx}`}
            variants={imageVariants}
            style={{ rotate: `${Math.random() * 20 - 10}deg` }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="-mr-4 mt-4 flex-shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <Image
              src={image}
              alt="Gallery Image"
              width={500}
              height={500}
              className="h-20 w-20 flex-shrink-0 rounded-lg object-cover md:h-40 md:w-40"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images2.map((image, idx) => (
          <motion.div
            key={`images-second-${idx}`}
            variants={imageVariants}
            style={{ rotate: `${Math.random() * 20 - 10}deg` }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="-mr-4 mt-4 flex-shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <Image
              src={image}
              alt="Gallery Image"
              width={500}
              height={500}
              className="h-20 w-20 flex-shrink-0 rounded-lg object-cover md:h-40 md:w-40"
            />
          </motion.div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[100] h-full w-20 bg-gradient-to-r from-white to-transparent dark:from-black" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[100] h-full w-20 bg-gradient-to-l from-white to-transparent dark:from-black" />
    </div>
  )
}
