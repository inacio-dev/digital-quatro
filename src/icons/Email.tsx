import React from 'react'

type SvgProps = React.ComponentPropsWithoutRef<'svg'>

export default function Email(props: SvgProps) {
  return (
    <svg {...props} viewBox="0 0 27 21" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.3 0H2.7C1.215 0 0.0135 1.18125 0.0135 2.625L0 18.375C0 19.8188 1.215 21 2.7 21H24.3C25.785 21 27 19.8188 27 18.375V2.625C27 1.18125 25.785 0 24.3 0ZM24.3 5.25L13.5 11.8125L2.7 5.25V2.625L13.5 9.1875L24.3 2.625V5.25Z" />
    </svg>
  )
}
