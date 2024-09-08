import ContactForm from './components/contactForm/ContactForm'
import { Socials } from './components/socials/Socials'

export function Footer() {
  return (
    <footer
      className="mx-auto mb-20 grid w-full max-w-7xl scroll-mt-28 grid-cols-1 gap-4 lg:grid-cols-[1fr_2fr]"
      id="contact"
    >
      <Socials />
      <ContactForm />
    </footer>
  )
}
