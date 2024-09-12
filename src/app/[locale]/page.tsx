import { Footer } from '@/components/view/footer/Footer'
import { MenuMobile } from '@/components/view/header/components/menuMobile/MenuMobile'
import { Header } from '@/components/view/header/Header'
import { Features } from '@/components/view/hero/features/Features'
import { Questions } from '@/components/view/questions/Questions'
import { Services } from '@/components/view/services/Services'
import { Templates } from '@/components/view/templates/Templates'

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl scroll-mt-24 px-4">
        <Features />
        <Services />
        <Templates />
        <Questions />
        <Footer />
        <p className="mb:text-sm mb-8 text-xs opacity-85 md:text-center">
          © {`${new Date().getFullYear()}`} Konbini Code. All rights reserved.
        </p>
        <MenuMobile />
      </main>
    </>
  )
}
