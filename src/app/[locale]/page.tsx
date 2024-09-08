import { Footer } from '@/components/view/footer/Footer'
import { Features } from '@/components/view/hero/features/Features'
import { Questions } from '@/components/view/questions/Questions'
import { Services } from '@/components/view/services/Services'

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl scroll-mt-24 px-3 md:px-4">
      <Features />
      <Services />
      <Questions />
      <Footer />
    </main>
  )
}
