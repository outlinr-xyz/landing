import { RiArrowRightUpLine } from "@remixicon/react"
import Link from "next/link"
import OutlinrLogo from "./ui/outliner-logo"

const navigation = {
  product: [
    { name: "Enterprise", href: "/not-ready", external: false },
    { name: "Pricing", href: "/not-ready", external: false },
    { name: "Docs", href: "/not-ready", external: false },
    { name: "Changelog", href: "/not-ready", external: false },
  ],
  resources: [
    { name: "FAQs", href: "/not-ready", external: false },
    { name: "GitHub", href: "/not-ready", external: false },
    { name: "Discord", href: "/not-ready", external: false },
    { name: "YouTube", href: "/not-ready", external: false },
  ],
  company: [
    { name: "About", href: "/not-ready", external: false },
    { name: "Careers", href: "/not-ready", external: false },
    { name: "Contact", href: "/not-ready", external: false },
    { name: "Status", href: "/not-ready", external: false },
  ],
  legal: [
    { name: "Imprint", href: "/not-ready", external: false },
    { name: "Privacy", href: "/not-ready", external: false },
    { name: "Terms", href: "/not-ready", external: false },
    { name: "DPA", href: "/not-ready", external: false },
  ],
}

export default function Footer() {
  return (
    <footer id="footer">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-20">
          <div className="space-y-8">
            <OutlinrLogo />
            <p className="text-sm leading-6 text-gray-6000">
              Redefining presentations. Built in Nigeria, made for the world.
            </p>
            <div className="flex space-x-6">
            </div>
            <div></div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-14 sm:gap-8 md:grid-cols-2 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Product
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Product"
                >
                  {navigation.product.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px ">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Resources
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Resources"
                >
                  {navigation.resources.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-0.5 aspect-square size-3 rounded-full bg-gray-100 p-px">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 ">
                  Company
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Company"
                >
                  {navigation.company.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Legal
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Legal"
                >
                  {navigation.legal.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:mt-20 sm:flex-row lg:mt-24 ">
          <p className="text-sm leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Outlinr, Inc. All rights
            reserved.
          </p>
          <div className="rounded-full border border-gray-200 py-1 pl-1 pr-2 ">
            <div className="flex items-center gap-1.5">
              <div className="relative size-4 shrink-0">
                <div className="absolute inset-[1px] rounded-full bg-emerald-500/20" />
                <div className="absolute inset-1 rounded-full bg-emerald-600 animate-pulse" />
              </div>
              <span className="text-xs text-gray-700 ">
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
