import Image from "next/image"

export default function HeroImage({ imageSrc }: { imageSrc: string }) {
  return (
    <section aria-label="Hero Image of the website" className="flow-root">
      <Image
        src={imageSrc}
        alt="A preview of live polling"
        width={2400}
        height={1600}
      />
    </section>
  )
}
