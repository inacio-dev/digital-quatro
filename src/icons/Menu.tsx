import React from 'react'

type SvgProps = React.ComponentPropsWithoutRef<'svg'>

export default function Menu(props: SvgProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Zm-5 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm-4 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z" />
    </svg>
  )
}
