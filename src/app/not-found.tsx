import Link from "next/link"
import { siteConfig } from "./site-config"
import { Button } from "@/components/ui/outlinr-button"
import ArrowAnimated from "@/components/ui/arrow-animated"

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <p className="mt-6 text-4xl font-semibold text-[#1E4DFF] sm:text-5xl">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold text-gray-900 ">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-gray-600">
        Sorry, we couldn&rsquo;t find the page you&rsquo;re looking for.
      </p>
      <Button asChild className="group mt-8" variant="light">
        <Link href={siteConfig.baseLinks.home}>
          Go to the home page
          <ArrowAnimated
            className="stroke-gray-900"
            aria-hidden="true"
          />
        </Link>
      </Button>
    </div>
  )
}
