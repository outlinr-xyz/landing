import React from "react"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface BadgeProps extends React.ComponentPropsWithoutRef<"span"> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, ...props }: BadgeProps, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className="z-10 block w-fit rounded-lg border border-blue-200/20 bg-blue-50/50 px-3 py-1.5 font-semibold uppercase leading-4 tracking-tighter sm:text-sm font-space-grotesk"
        {...props}
      >
        <span className="bg-gradient-to-b from-blue-500 to-blue-600 bg-clip-text text-transparent">
          {children}
        </span>
      </span>
    )
  },
)

Badge.displayName = "Badge"

export { Badge, type BadgeProps }
