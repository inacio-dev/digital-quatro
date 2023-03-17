import scrollTo from '@/hooks/scroll-to'
import useWindowDimensions from '@/hooks/get-windowDimension'
import Logo from '@/icons/Logo'
import Menu from '@/icons/Menu'
import { useEffect, useState } from 'react'
import TransparentButton from './TransparentButton'
import { useRouter } from 'next/router'

export default function Header() {
  const { width, height } = useWindowDimensions()
  const [showMenu, setShowMenu] = useState(false)

  const [homePage, setHomePage] = useState(true)
  const router = useRouter()

  useEffect(() => {
    router.pathname && router.pathname === '/' ? setHomePage(true) : setHomePage(false)
  }, [router])

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
            onClick={async () => {
              homePage
                ? (scrollTo(''), setShowMenu(false))
                : (await router.push('/'), scrollTo(''), setShowMenu(false))
            }}
            title="Home"
          />
          <TransparentButton
            onClick={async () => {
              homePage
                ? (scrollTo('about'), setShowMenu(false))
                : (await router.push('/'), scrollTo('about'), setShowMenu(false))
            }}
            title="Sobre"
          />
          <TransparentButton
            onClick={async () => {
              homePage
                ? (scrollTo('services'), setShowMenu(false))
                : (await router.push('/'), scrollTo('services'), setShowMenu(false))
            }}
            title="Serviços"
          />
          <TransparentButton
            onClick={async () => {
              homePage
                ? (scrollTo('contact'), setShowMenu(false))
                : (await router.push('/'), scrollTo('contact'), setShowMenu(false))
            }}
            title="Fale Conosco"
          />
        </div>
      )}

      <div className="invisible hidden w-full items-center justify-center space-x-[12%] px-[10%] lg:visible lg:flex">
        <Logo className="w-[114px] fill-slate-light-1" />
        <TransparentButton
          onClick={async () => {
            homePage ? scrollTo('') : (await router.push('/'), scrollTo(''))
          }}
          title="Home"
        />
        <TransparentButton
          onClick={async () => {
            homePage ? scrollTo('about') : (await router.push('/'), scrollTo('about'))
          }}
          title="Sobre"
        />
        <TransparentButton
          onClick={async () => {
            homePage ? scrollTo('services') : (await router.push('/'), scrollTo('services'))
          }}
          title="Serviços"
        />
        <TransparentButton
          onClick={async () => {
            homePage ? scrollTo('contact') : (await router.push('/'), scrollTo('contact'))
          }}
          title="Fale Conosco"
        />
      </div>
    </div>
  )
}
