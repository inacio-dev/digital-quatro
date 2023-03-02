import React from 'react'

type SvgProps = React.ComponentPropsWithoutRef<'svg'>

export default function ArrowDown(props: SvgProps) {
  return (
    <svg {...props} viewBox="0 0 24 71" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.9393 70.0607C11.5251 70.6464 12.4749 70.6464 13.0607 70.0607L22.6066 60.5147C23.1924 59.9289 23.1924 58.9792 22.6066 58.3934C22.0208 57.8076 21.0711 57.8076 20.4853 58.3934L12 66.8787L3.51472 58.3934C2.92893 57.8076 1.97918 57.8076 1.3934 58.3934C0.807609 58.9792 0.807609 59.9289 1.3934 60.5147L10.9393 70.0607ZM10.5 -6.55671e-08L10.5 69L13.5 69L13.5 6.55671e-08L10.5 -6.55671e-08Z" />
    </svg>
  )
}
