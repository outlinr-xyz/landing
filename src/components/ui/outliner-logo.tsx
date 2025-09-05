import { siteConfig } from "@/app/site-config";
import Link from "next/link";

export default function OutlinrLogo() {
    return (
        <Link className="flex gap-1 items-center text-2xl font-bold text-black w-28 md:w-32" href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="font-press-start text-[#1E4DFF] font-semibold">O</span>
            <span className="font-space-grotesk font-semi-bold">Outlinr</span>
        </Link>
    )
}
