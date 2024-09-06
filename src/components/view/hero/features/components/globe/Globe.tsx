'use client'

import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 0

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [138 / 255, 43 / 255, 226 / 255],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // Foz do Iguaçu, Brazil
        { location: [-25.5163, -54.5854], size: 0.05 },
        // New York, USA
        { location: [40.7128, -74.006], size: 0.1 },
        // Tokyo, Japan
        { location: [35.6762, 139.6503], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.01
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: 1 }}
      className={className}
    />
  )
}
