import React from 'react'

type SvgProps = React.ComponentPropsWithoutRef<'svg'>

export default function LogoShort(props: SvgProps) {
  return (
    <svg
      {...props}
      width="114"
      height="114"
      viewBox="0 0 114 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24.5767 89.9067L33.3592 72.1193H45.9249L54.6516 89.9067" fill="#FFBA08" />
      <path d="M34.8328 69.0709L39.6572 59.2988L44.4515 69.0709" fill="#FFBA08" />
      <path d="M89.542 24.0911L80.7594 41.8785H68.1943L59.467 24.0911" fill="#F26419" />
      <path d="M79.2866 44.9268L74.4615 54.6983L69.6672 44.9268" fill="#F26419" />
      <path d="M71.3225 56.0595L56.2374 25.5081L41.2476 56.0595" fill="#D00000" />
      <path d="M72.919 57.9519L57.8334 88.5039L42.8435 57.9519" fill="#032B43" />
    </svg>
  )
}
