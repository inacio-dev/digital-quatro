import React from 'react'

type SvgProps = React.ComponentPropsWithoutRef<'svg'>

export default function EllipseCircleMiddle(props: SvgProps) {
  return (
    <svg
      {...props}
      width="458"
      height="580"
      viewBox="0 0 458 580"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_662_5"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="-56"
        width="458"
        height="636"
      >
        <rect y="-56" width="458" height="636" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_662_5)">
        <path
          d="M142.766 83.1204C149.894 95.4677 148.83 111.869 140.617 131.06C132.408 150.241 117.096 172.111 95.9057 195.298C53.5303 241.667 -12.2702 293.214 -91.4546 338.931C-170.639 384.648 -248.18 415.859 -309.524 429.373C-340.2 436.131 -366.796 438.456 -387.512 435.975C-408.238 433.493 -422.974 426.214 -430.103 413.866C-437.232 401.519 -436.167 385.118 -427.954 365.927C-419.745 346.746 -404.433 324.875 -383.243 301.689C-340.868 255.32 -275.067 203.773 -195.883 158.056C-116.698 112.339 -39.1574 81.1272 22.187 67.6135C52.8622 60.8559 79.4589 58.5301 100.174 61.0115C120.901 63.4941 135.637 70.7731 142.766 83.1204Z"
          stroke="#FBFCFD"
        />
        <path
          d="M105 61.5C105 67.8513 99.8513 73 93.5 73C87.1487 73 82 67.8513 82 61.5C82 55.1487 87.1487 50 93.5 50C99.8513 50 105 55.1487 105 61.5Z"
          fill="#FFBA08"
        />
      </g>
    </svg>
  )
}
