export function SkeletonThree() {
  return (
    <section className="group/image relative flex h-full gap-10">
      <div className="group mx-auto h-full w-full bg-transparent dark:bg-transparent">
        <div className="relative flex h-auto w-full flex-1 flex-col space-y-2">
          <video
            src="https://cdn.cosmicjs.com/606365f0-711a-11ef-a74a-0b2d32a43246-cms.mp4"
            className="aspect-square h-full w-full object-cover pt-2"
            autoPlay
            muted
            loop
            playsInline
            title="CosmicJs CMS Preview"
          />
        </div>
      </div>
    </section>
  )
}
