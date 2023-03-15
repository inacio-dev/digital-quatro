import clsx from 'clsx'
import { ReactElement } from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
  titleHover: string | undefined
  iconHover: ReactElement<any, any> | undefined
  classPlus: string | undefined
  backgroundHover: string | undefined
}

export default function YellowButton(props: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'group relative overflow-hidden bg-brand-yellow py-2 px-5 leading-none',
        props.classPlus
      )}
    >
      <span
        className={clsx(
          'absolute inset-0 -translate-x-full transition-transform group-hover:translate-x-0 group-hover:delay-100 group-hover:duration-300',
          props.backgroundHover
        )}
      ></span>
      <span className="absolute inset-0 flex -translate-x-full items-center justify-center font-bold transition-transform group-hover:translate-x-0 group-hover:delay-100 group-hover:duration-300">
        <>
          {props.iconHover}
          {props.titleHover}
        </>
      </span>
      {props.title}
    </button>
  )
}
