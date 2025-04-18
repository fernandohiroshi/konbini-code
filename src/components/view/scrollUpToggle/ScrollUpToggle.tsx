import Link from 'next/link'
import { CgChevronDoubleUpR } from 'react-icons/cg'

export function ScrollUpToggle() {
  return (
    <Link
      href="#"
      className="fixed bottom-4 right-4 hidden opacity-70 duration-300 hover:scale-90 hover:text-purple-500 hover:opacity-100 lg:block"
    >
      <CgChevronDoubleUpR size={32} />
    </Link>
  )
}
