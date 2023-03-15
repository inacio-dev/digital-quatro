import clsx from 'clsx'
import { ReactElement } from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
  classplus: string | undefined
}

export default function TransparentButton(props: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx('group relative overflow-hidden py-2 px-5 leading-none', props.classplus)}
    >
      <span className="absolute inset-0 -translate-x-full transition-transform group-hover:translate-x-0 group-hover:border-b-2 group-hover:delay-100 group-hover:duration-300"></span>
      {props.title}
    </button>
  )
}
