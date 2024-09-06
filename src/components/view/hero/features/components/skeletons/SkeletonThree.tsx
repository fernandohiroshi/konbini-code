import Link from 'next/link'

export function SkeletonThree() {
  return (
    <Link
      href="https://www.cosmicjs.com"
      target="_blank"
      className="group/image relative flex h-full gap-10"
    >
      <div className="group mx-auto h-full w-full bg-transparent dark:bg-transparent">
        <div className="relative flex h-auto w-full flex-1 flex-col space-y-2">
          <video
            src="https://cdn.cosmicjs.com/7a1734b0-da64-11ee-b6bc-0f88b0862d1c-home-video.mp4"
            className="aspect-square h-full w-full object-cover pt-2"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </Link>
  )
}
