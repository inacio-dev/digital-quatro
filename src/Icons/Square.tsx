import React from 'react'

type SvgProps = React.ComponentPropsWithoutRef<'svg'>

export default function Square(props: SvgProps) {
  return (
    <svg {...props} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="10" fill="#D9D9D9" />
    </svg>
  )
}
