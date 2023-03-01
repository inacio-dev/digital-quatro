import React from 'react'

type SvgProps = React.ComponentPropsWithoutRef<'svg'>

export default function ArrowRight(props: SvgProps) {
  return (
    <svg {...props} viewBox="0 0 71 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M70.0607 13.0607C70.6464 12.4749 70.6464 11.5251 70.0607 10.9393L60.5147 1.3934C59.9289 0.807611 58.9792 0.807611 58.3934 1.3934C57.8076 1.97919 57.8076 2.92893 58.3934 3.51472L66.8787 12L58.3934 20.4853C57.8076 21.0711 57.8076 22.0208 58.3934 22.6066C58.9792 23.1924 59.9289 23.1924 60.5147 22.6066L70.0607 13.0607ZM0 13.5H69V10.5H0V13.5Z" />
    </svg>
  )
}
