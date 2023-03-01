import Logo from '@/Icons/Logo'

export default function Header() {
  return (
    <div className="sticky top-0 z-50 flex h-[96px] w-full items-center justify-center space-x-40 bg-slate-dark-1 px-60 text-slate-light-1">
      <Logo className="w-[114px] fill-slate-light-1" />
      <p>Home</p>
      <p>Sobre</p>
      <p>Serviços</p>
      <p>Fale Conosco</p>
    </div>
  )
}
