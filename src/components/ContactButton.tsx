import ArrowRight from '@/icons/ArrowRight'
import Link from 'next/link'
import { ReactElement } from 'react'

export default function ContactButton({
  href,
  icon,
  text
}: {
  href: string
  icon: ReactElement<any, any>
  text: string
}) {
  return (
    <Link
      target="_blank"
      href={href}
      className="group relative flex h-[46px] w-[200px] items-center gap-5 overflow-hidden bg-brand-yellow px-5 leading-none"
    >
      <span className="absolute inset-0 -translate-x-full bg-slate-dark-1 transition-transform group-hover:translate-x-0 group-hover:delay-100 group-hover:duration-300"></span>
      <span className="absolute inset-0 flex -translate-x-full items-center justify-center space-x-4 font-bold transition-transform group-hover:translate-x-0 group-hover:delay-100 group-hover:duration-300">
        <>
          {icon}
          <ArrowRight className="w-8 fill-slate-light-1" />
        </>
      </span>
      {icon}
      <span>{text}</span>
    </Link>
  )
}
