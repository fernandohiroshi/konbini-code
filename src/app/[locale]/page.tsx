import { Footer } from '@/components/view/footer/Footer'
import { Features } from '@/components/view/hero/features/Features'
import { Questions } from '@/components/view/questions/Questions'
import { Services } from '@/components/view/services/Services'
import { Templates } from '@/components/view/templates/Templates'

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl scroll-mt-24 px-3 md:px-4">
      <Features />
      <Services />
      <Templates />
      <Questions />
      <Footer />
      <p className="mb:text-sm mb-8 text-center text-xs opacity-85">
        © 2024 Konbini Code. Developed by Fernando Hiroshi. All rights
        reserved.
      </p>
    </main>
  )
}
