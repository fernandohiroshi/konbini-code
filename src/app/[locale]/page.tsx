import { Features } from '@/components/view/hero/features/Features'
import { Services } from '@/components/view/services/Services'

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-8">
      <Features />
      <Services />
    </main>
  )
}
