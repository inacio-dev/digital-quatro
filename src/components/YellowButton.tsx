import clsx from 'clsx'
import { ReactElement } from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
  titlehover: string | undefined
  iconhover: ReactElement<any, any> | undefined
  classplus: string | undefined
  backgroundhover: string | undefined
}

export default function YellowButton(props: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'group relative overflow-hidden bg-brand-yellow py-2 px-5 leading-none',
        props.classplus
      )}
    >
      <span
        className={clsx(
          'absolute inset-0 -translate-x-full transition-transform group-hover:translate-x-0 group-hover:delay-100 group-hover:duration-300',
          props.backgroundhover
        )}
      ></span>
      <span className="absolute inset-0 flex -translate-x-full items-center justify-center font-bold transition-transform group-hover:translate-x-0 group-hover:delay-100 group-hover:duration-300">
        <>
          {props.iconhover}
          {props.titlehover}
        </>
      </span>
      {props.title}
    </button>
  )
}
