import Logo from '@/Icons/Logo'
import Anchor from './Anchor'

export default function Header() {
  return (
    <div className="flex h-[96px] w-full items-center justify-center space-x-40 px-60 text-slate-light-1">
      <Logo className="w-[114px] fill-slate-light-1" />
      <p>Home</p>
      <p>Sobre</p>
      <p>Serviços</p>
      <p>Fale Conosco</p>
    </div>
  )
}
