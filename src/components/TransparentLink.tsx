import clsx from 'clsx'
import Link from 'next/link'

type LinkProps = {
  title: string
  classplus?: string
  href: string
}

export default function TransparentLink(props: LinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        'group relative flex overflow-hidden py-2 px-5 leading-none',
        props.classplus
      )}
    >
      <span className="absolute inset-0 -translate-x-full transition-transform group-hover:translate-x-0 group-hover:border-b-2 group-hover:delay-100 group-hover:duration-300"></span>
      {props.title}
    </Link>
  )
}
