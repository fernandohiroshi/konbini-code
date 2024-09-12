import { Copyright } from '@/components/view/copy/Copy'
import { Footer } from '@/components/view/footer/Footer'
import { MenuMobile } from '@/components/view/header/components/menuMobile/MenuMobile'
import { Header } from '@/components/view/header/Header'
import { Features } from '@/components/view/hero/features/Features'
import { Questions } from '@/components/view/questions/Questions'
import { ScrollUpToggle } from '@/components/view/scrollUpToggle/ScrollUpToggle'
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
        <Copyright />
        <MenuMobile />
      </main>
      <ScrollUpToggle />
    </>
  )
}
