'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function SkeletonTwo() {
  const images = [
    'https://cdn.cosmicjs.com/7a2c7d90-7116-11ef-a74a-0b2d32a43246-s2_01.jpg',
    'https://cdn.cosmicjs.com/7a27c2a0-7116-11ef-a74a-0b2d32a43246-s2_02.jpg',
    'https://cdn.cosmicjs.com/7a346cd0-7116-11ef-a74a-0b2d32a43246-s2_03.jpg',
    'https://cdn.cosmicjs.com/7a2bba40-7116-11ef-a74a-0b2d32a43246-s2_04.jpg',
    'https://cdn.cosmicjs.com/7a12db10-7116-11ef-a74a-0b2d32a43246-s2_05.jpg',
    'https://cdn.cosmicjs.com/7a2ec780-7116-11ef-a74a-0b2d32a43246-s2_06.jpg',
    'https://cdn.cosmicjs.com/7a123ed0-7116-11ef-a74a-0b2d32a43246-s2_07.jpg',
  ]

  const images2 = [
    'https://cdn.cosmicjs.com/7a338270-7116-11ef-a74a-0b2d32a43246-s2_08.jpg',
    'https://cdn.cosmicjs.com/7a272660-7116-11ef-a74a-0b2d32a43246-s2_09.jpg',
    'https://cdn.cosmicjs.com/7a2db610-7116-11ef-a74a-0b2d32a43246-s2_10.jpg',
    'https://cdn.cosmicjs.com/7a25ede0-7116-11ef-a74a-0b2d32a43246-s2_11.jpg',
    'https://cdn.cosmicjs.com/7a0ee370-7116-11ef-a74a-0b2d32a43246-s2_12.jpg',
    'https://cdn.cosmicjs.com/7a08f000-7116-11ef-a74a-0b2d32a43246-s2_13.jpg',
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
