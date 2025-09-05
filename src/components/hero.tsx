import Link from "next/link"
import { Button } from "./ui/outlinr-button"
import HeroImage from "./hero-image"

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mt-32 flex flex-col items-center justify-center text-center sm:mt-40"
    >
      <h1
        className="inline-block animate-slide-up-fade font-space-grotesk bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text p-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-7xl"
        style={{ animationDuration: "700ms" }}
      >
        Make every presentation <br /> a conversation
      </h1>
      <p
        className="mt-6 max-w-lg animate-slide-up-fade max-md:px-4 text-lg md:text-xl text-gray-700"
        style={{ animationDuration: "900ms" }}
      >
        Design beautiful slides and bring your audience in with real-time engagement, all in one seamless flow.
      </p>
      <div
        className="mt-8 flex w-full animate-slide-up-fade flex-col items-center justify-center gap-3 px-3 sm:flex-row"
        style={{ animationDuration: "1100ms" }}
      >
        <Button className="h-12 p-4 font-semibold text-lg w-fit">
          <Link href="#cta-title">Get early access updates</Link>
        </Button>
      </div>
      <div
        className="relative mx-auto ml-3 mt-20 h-fit w-[40rem] max-w-6xl animate-slide-up-fade sm:ml-auto sm:w-full sm:px-2"
        style={{ animationDuration: "1400ms" }}
      >
        <HeroImage imageSrc="/images/word-clouds.webp" />
      </div>
    </section>
  )
}
