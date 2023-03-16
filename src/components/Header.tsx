import scrollTo from '@/hooks/scroll-to'
import useWindowDimensions from '@/hooks/get-windowDimension'
import Logo from '@/icons/Logo'
import Menu from '@/icons/Menu'
import { useEffect, useState } from 'react'
import TransparentButton from './TransparentButton'

export default function Header() {
  const { width, height } = useWindowDimensions()
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    width && width > 1023 && setShowMenu(false)
  }, [width])

  return (
    <div className="sticky top-0 z-50 flex h-fit flex-col items-center justify-center bg-slate-dark-1 py-5 text-slate-light-1 lg:h-[96px]">
      <div className="visible flex w-full items-center justify-between px-[5%] lg:invisible lg:hidden">
        <Logo className="w-[114px] fill-slate-light-1" />
        <button onClick={() => setShowMenu(!showMenu)}>
          <Menu className="w-12 fill-slate-light-1" />
        </button>
      </div>

      {showMenu && (
        <div className="visible grid w-full grid-cols-2 items-center justify-center space-y-5 py-5 lg:invisible lg:hidden">
          <TransparentButton
            onClick={() => {
              scrollTo('')
              setShowMenu(false)
            }}
            title="Home"
            classplus={undefined}
          />
          <TransparentButton
            onClick={() => {
              scrollTo('about')
              setShowMenu(false)
            }}
            title="Sobre"
            classplus={undefined}
          />
          <TransparentButton
            onClick={() => {
              scrollTo('services')
              setShowMenu(false)
            }}
            title="Serviços"
            classplus={undefined}
          />
          <TransparentButton
            onClick={() => {
              scrollTo('contact')
              setShowMenu(false)
            }}
            title="Fale Conosco"
            classplus={undefined}
          />
        </div>
      )}

      <div className="invisible hidden w-full items-center justify-center space-x-[12%] px-[10%] lg:visible lg:flex">
        <Logo className="w-[114px] fill-slate-light-1" />
        <TransparentButton onClick={() => scrollTo('')} title="Home" classplus={undefined} />
        <TransparentButton onClick={() => scrollTo('about')} title="Sobre" classplus={undefined} />
        <TransparentButton
          onClick={() => scrollTo('services')}
          title="Serviços"
          classplus={undefined}
        />
        <TransparentButton
          onClick={() => scrollTo('contact')}
          title="Fale Conosco"
          classplus={undefined}
        />
      </div>
    </div>
  )
}
