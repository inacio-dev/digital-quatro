import scrollTo from '@/hooks/scroll-to'
import ArrowUp from '@/icons/ArrowUp'
import Facebook from '@/icons/Facebook'
import Instagram from '@/icons/Instagram'
import Logo from '@/icons/Logo'
import Whatsapp from '@/icons/Whatsapp'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center space-y-8 bg-[#FFB401] py-8 tracking-[.1em] text-slate-light-1">
      <div className="flex flex-col items-start justify-center gap-40 pb-12 lg:flex-row">
        <div className="flex flex-col space-y-8">
          <Logo className="w-[304px] fill-slate-light-1" />
          <span>
            Digital Quatro 2023<br></br>Todos os direitos reservados
          </span>
        </div>
        <ul className="flex flex-col items-center space-y-3">
          <span className="text-xl font-bold">Serviços</span>
          <hr className="h-[2px] w-[62px] rounded border-0 bg-slate-light-1"></hr>
          <li>Tráfego Pago</li>
          <li>Design Gráfico</li>
          <li>Mídia Social</li>
          <li>Desenvolvimento Web</li>
        </ul>
        <ul className="flex flex-col items-center space-y-3">
          <span className="text-xl font-bold">Sobre</span>
          <hr className="h-[2px] w-[62px] rounded border-0 bg-slate-light-1"></hr>
          <li>
            <button className="tracking-[.1em]" onClick={() => scrollTo('about')}>
              História
            </button>
          </li>
          <li>Direitos autorais</li>
          <li>Políticas de privacidade</li>
        </ul>
        <ul className="flex flex-col items-center space-y-3">
          <span className="text-xl font-bold">Dúvidas</span>
          <hr className="h-[2px] w-[62px] rounded border-0 bg-slate-light-1"></hr>
          <li>
            <button className="tracking-[.1em]" onClick={() => scrollTo('contact')}>
              Fale conosco
            </button>
          </li>
        </ul>
      </div>
      <hr className="h-[2px] w-[80%] rounded border-0 bg-slate-light-1"></hr>
      <div className="flex items-center space-x-7 fill-slate-light-1">
        <Link
          target="_blank"
          href="https://wa.me/message/KV7PBMLW2MUZD1"
          className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-dark-8 bg-opacity-40"
        >
          <Whatsapp className="w-9 fill-slate-light-1" />
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/digitalquatro/"
          className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-dark-8 bg-opacity-40"
        >
          <Instagram className="w-7 fill-slate-light-1" />
        </Link>
        <Link
          target="_blank"
          href="https://www.facebook.com/digitalquatro/"
          className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-dark-8 bg-opacity-40"
        >
          <Facebook className="w-8 fill-slate-light-1" />
        </Link>

        <button
          onClick={() => scrollTo('')}
          className="absolute right-[10%] flex items-center space-x-3"
        >
          <p className="font-medium">VOLTAR AO TOPO</p>
          <ArrowUp className="w-6" />
        </button>
      </div>
    </div>
  )
}
