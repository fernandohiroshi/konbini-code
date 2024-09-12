import { CircleArrowUp } from 'lucide-react'
import Link from 'next/link'

export function ScrollUpToggle() {
  return (
    <Link href="#" className="fixed bottom-4 right-4 hidden lg:block">
      <CircleArrowUp size={24} />
    </Link>
  )
}
