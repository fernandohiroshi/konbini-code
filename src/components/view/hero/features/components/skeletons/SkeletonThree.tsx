export function SkeletonThree() {
  return (
    <section className="group/image relative flex h-full gap-10">
      <div className="group mx-auto h-full w-full bg-transparent dark:bg-transparent">
        <div className="relative flex h-auto w-full flex-1 flex-col space-y-2">
          <video
            src="https://cdn.cosmicjs.com/3f65a6b0-748a-11ef-98d9-cbcb72f3073e-cms.mp4"
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
