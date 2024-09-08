'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function SkeletonTwo() {
  const images = [
    'https://cdn.cosmicjs.com/efd70300-6e1c-11ef-a492-5bdc7520fe60-S2_01.png',
    'https://cdn.cosmicjs.com/f0651230-6e1c-11ef-a492-5bdc7520fe60-s2_02.png',
    'https://cdn.cosmicjs.com/f01df710-6e1c-11ef-a492-5bdc7520fe60-s2_03.png',
    'https://cdn.cosmicjs.com/effa9090-6e1c-11ef-a492-5bdc7520fe60-s2_04.png',
    'https://cdn.cosmicjs.com/f0cb7520-6e1c-11ef-a492-5bdc7520fe60-s2_05.png',
    'https://cdn.cosmicjs.com/f086f210-6e1c-11ef-a492-5bdc7520fe60-s2_06.png',
    'https://cdn.cosmicjs.com/f0b6b4a0-6e1c-11ef-a492-5bdc7520fe60-s2_07.png',
  ]

  const images2 = [
    'https://cdn.cosmicjs.com/f0429610-6e1c-11ef-a492-5bdc7520fe60-s2_08.png',
    'https://cdn.cosmicjs.com/f0415d90-6e1c-11ef-a492-5bdc7520fe60-s2_09.png',
    'https://cdn.cosmicjs.com/f0b52e00-6e1c-11ef-a492-5bdc7520fe60-s2_10.png',
    'https://cdn.cosmicjs.com/f0b2e410-6e1c-11ef-a492-5bdc7520fe60-s2_11.png',
    'https://cdn.cosmicjs.com/f0ae2920-6e1c-11ef-a492-5bdc7520fe60-s2_12.png',
    'https://cdn.cosmicjs.com/f0ad17b0-6e1c-11ef-a492-5bdc7520fe60-s2_13.png',
  ]

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
