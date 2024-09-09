import { Globe } from '../globe/Globe'

export function SkeletonFour() {
  return (
    <div className="relative mt-10 hidden h-60 flex-col items-center bg-transparent dark:bg-transparent md:flex md:h-60">
      <Globe className="absolute -bottom-80 -right-10 md:-bottom-72 md:-right-10" />
    </div>
  )
}
