import { cn } from '@/lib/utils'

export function FeatureDescription({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <p
      className={cn(
        'mx-auto max-w-4xl text-left text-sm md:text-base',
        'text-center font-normal text-neutral-500 dark:text-neutral-300',
        'mx-0 my-2 max-w-xl text-left md:text-sm',
      )}
    >
      {children}
    </p>
  )
}
