import ContactForm from './components/contactForm/ContactForm'
import { Socials } from './components/socials/Socials'

export function Footer() {
  return (
    <footer
      className="mb-10 grid w-full scroll-mt-28 grid-cols-1 gap-4 lg:grid-cols-[1fr_2fr]"
      id="contact"
    >
      <Socials />
      <ContactForm />
    </footer>
  )
}
