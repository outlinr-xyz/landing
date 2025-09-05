import Link from "next/link"
import { Button } from "@/components/ui/outlinr-button"
import ArrowAnimated from "@/components/ui/arrow-animated"
import { siteConfig } from "../site-config"

export default function NotReady() {
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <p className="mt-6 text-4xl font-semibold text-[#1E4DFF] sm:text-5xl">
                Coming Soon
            </p>
            <h1 className="mt-4 text-2xl font-semibold text-gray-900 ">
                🚧 Page Not Ready Yet
            </h1>
            <p className="mt-2 text-sm text-gray-600">
                In the meantime, check out what we&rsquo;ve already built:

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
