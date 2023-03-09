import scrollTo from '@/hooks/scroll-to'
import useWindowDimensions from '@/hooks/get-windowDimension'
import Logo from '@/icons/Logo'
import Menu from '@/icons/Menu'
import { useEffect, useState } from 'react'

export default function Header() {
  const { width, height } = useWindowDimensions()
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    width && width > 1023 && setShowMenu(false)
  }, [width])

  return (
    <div className="sticky top-0 z-50 flex h-[96px] flex-col items-center justify-center bg-slate-dark-1 text-slate-light-1">
      <div className="flex w-full items-center justify-between px-[5%] lg:hidden">
        <Logo className="w-[114px] fill-slate-light-1" />
        <button onClick={() => setShowMenu(!showMenu)}>
          <Menu className="w-12 fill-slate-light-1" />
        </button>
      </div>

      <div className="hidden w-full items-center justify-center space-x-[12%] px-[10%] lg:flex">
        <Logo className="w-[114px] fill-slate-light-1" />
        <button onClick={() => scrollTo('')}>Home</button>
        <button onClick={() => scrollTo('about')}>Sobre</button>
        <button onClick={() => scrollTo('services')}>Serviços</button>
        <button onClick={() => scrollTo('contact')}>Fale Conosco</button>
      </div>
    </div>
  )
}
