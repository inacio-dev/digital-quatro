import scrollTo from '@/hooks/scroll-to'
import ArrowUp from '@/icons/ArrowUp'
import Facebook from '@/icons/Facebook'
import Instagram from '@/icons/Instagram'
import Logo from '@/icons/Logo'
import Whatsapp from '@/icons/Whatsapp'
import Link from 'next/link'
import TransparentButton from './TransparentButton'

export default function Footer() {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center space-y-5 bg-[#FFB401] px-[5%] py-8 tracking-[.1em] text-slate-light-1 lg:space-y-8">
      <div className="flex flex-col items-center justify-center space-y-8 pb-12 lg:flex-row lg:items-start lg:gap-40">
        <div className="flex flex-col space-y-4 lg:space-y-8">
          <Logo className="w-[304px] fill-slate-light-1" />
          <span>
            Digital Quatro 2023<br></br>Todos os direitos reservados
          </span>
        </div>
        <div className="grid grid-cols-2 gap-10 text-center lg:flex lg:gap-40">
          <ul className="flex flex-col items-center space-y-3">
            <span className="text-xl font-bold">Serviços</span>
            <hr className="h-[2px] w-[62px] rounded border-0 bg-slate-light-1"></hr>
            <li>
              <TransparentButton
                onClick={() => scrollTo('services')}
                title="Tráfego Pago"
                classplus="tracking-[.1em]"
              />
            </li>
            <li>
              <TransparentButton
                onClick={() => scrollTo('services')}
                title="Design Gráfico"
                classplus="tracking-[.1em]"
              />
            </li>
            <li>
              <TransparentButton
                onClick={() => scrollTo('services')}
                title="Mídia Social"
                classplus="tracking-[.1em]"
              />
            </li>
            <li>
              <TransparentButton
                onClick={() => scrollTo('services')}
                title="Desenvolvimento Web"
                classplus="tracking-[.1em]"
              />
            </li>
          </ul>
          <ul className="flex flex-col items-center space-y-3">
            <span className="text-xl font-bold">Sobre</span>
            <hr className="h-[2px] w-[62px] rounded border-0 bg-slate-light-1"></hr>
            <li>
              <TransparentButton
                onClick={() => scrollTo('about')}
                title="História"
                classplus="tracking-[.1em]"
              />
            </li>
            <li>
              <TransparentButton
                onClick={() => scrollTo('')}
                title="Direitos autorais"
                classplus="tracking-[.1em]"
              />
            </li>
            <li>
              <TransparentButton
                onClick={() => scrollTo('')}
                title="Políticas de privacidade"
                classplus="tracking-[.1em]"
              />
            </li>
          </ul>
          <ul className="flex flex-col items-center space-y-3">
            <span className="text-xl font-bold">Dúvidas</span>
            <hr className="h-[2px] w-[62px] rounded border-0 bg-slate-light-1"></hr>
            <li>
              <TransparentButton
                onClick={() => scrollTo('contact')}
                title="Fale conosco"
                classplus="tracking-[.1em]"
              />
            </li>
          </ul>
        </div>
      </div>
      <hr className="h-[2px] w-[80%] rounded border-0 bg-slate-light-1"></hr>
      <div className="flex flex-col items-center space-x-7 fill-slate-light-1 lg:flex-row">
        <div className="flex items-center space-x-7">
          <Link
            target="_blank"
            href="https://wa.me/message/KV7PBMLW2MUZD1"
            className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-dark-8 bg-opacity-40 transition-all hover:bg-transparent hover:delay-100 hover:duration-200"
          >
            <Whatsapp className="w-9 fill-slate-light-1" />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/digitalquatro/"
            className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-dark-8 bg-opacity-40 transition-all hover:bg-transparent hover:delay-100 hover:duration-200"
          >
            <Instagram className="w-7 fill-slate-light-1" />
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/digitalquatro/"
            className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-dark-8 bg-opacity-40 transition-all hover:bg-transparent hover:delay-100 hover:duration-200"
          >
            <Facebook className="w-8 fill-slate-light-1" />
          </Link>
        </div>

        <button
          onClick={() => scrollTo('')}
          className="group relative flex items-center justify-center space-x-3 overflow-hidden px-2 py-3 leading-none lg:absolute lg:right-[10%]"
        >
          <span className="absolute inset-0 -translate-x-full transition-transform group-hover:translate-x-0 group-hover:border-y-2 group-hover:delay-100 group-hover:duration-300"></span>
          <p className="font-medium">VOLTAR AO TOPO</p>
          <ArrowUp className="w-6" />
        </button>
      </div>
    </div>
  )
}
