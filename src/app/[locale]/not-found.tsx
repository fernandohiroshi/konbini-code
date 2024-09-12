import { House } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { BackgroundGradientAnimation } from '@/components/ui/aceternity/bg-gradient'

export default function NotFound() {
  return (
    <main>
      <BackgroundGradientAnimation>
        <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl">
          <p className="bg-gradient-to-b from-white/80 to-white/20 bg-clip-text text-transparent drop-shadow-2xl">
            ERROR 404
          </p>
        </div>
      </BackgroundGradientAnimation>
      <Link
        href="/"
        title="Back to Home"
        className="absolute bottom-8 right-8 rounded-full bg-black/60 p-4 text-white shadow-2xl duration-500 ease-in-out hover:scale-90 hover:bg-white/80 hover:text-black"
      >
        <House size={30} />
      </Link>
    </main>
  )
}
