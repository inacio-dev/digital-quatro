import useWindowDimensions from '@/hooks/get-windowDimension'
import Email from '@/icons/Email'
import Instagram from '@/icons/Instagram'
import Messenger from '@/icons/Messenger'
import Whatsapp from '@/icons/Whatsapp'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
  const { width, height } = useWindowDimensions()

  return (
    <div id="contact" className="flex items-center justify-between px-[10%]">
      <Image
        src="/person-5.png"
        width={width ? width * 0.29 : 0}
        alt={''}
        height={0}
        quality={100}
      />

      <div className="flex flex-col items-center justify-center space-y-20 tracking-widest text-slate-light-1">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h1 className="text-6xl font-bold ">CONTATE-NOS</h1>
          <h3 className="text-4xl text-brand-yellow">FALE CONOSCO E TIRE SUAS DÚVIDAS</h3>
          <p className="max-w-md text-center">
            Escolha o método de sua preferência abaixo e entraremos em contato o mais breve
            possível.
          </p>
        </div>

        <div className="flex flex-col gap-3 space-y-3 fill-slate-light-1 tracking-normal">
          <Link
            target="_blank"
            href="https://wa.me/message/KV7PBMLW2MUZD1"
            className="flex h-[46px] w-[200px] items-center gap-5 bg-brand-yellow px-5"
          >
            <Whatsapp className="w-9 fill-slate-light-1" />
            <span>WHATSAPP</span>
          </Link>
          <Link
            target="_blank"
            href="mailto:contato@digitalquatro.com.br"
            className="flex h-[46px] w-[200px] items-center gap-6 bg-brand-yellow px-5"
          >
            <Email className="w-8 fill-slate-light-1" />
            <span>EMAIL</span>
          </Link>
          <Link
            target="_blank"
            href="https://m.me/103825612478929"
            className="flex h-[46px] w-[200px] items-center gap-6 bg-brand-yellow px-5"
          >
            <Messenger className="w-8 fill-slate-light-1" />
            <span>MESSENGER</span>
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/digitalquatro/"
            className="flex h-[46px] w-[200px] items-center gap-6 bg-brand-yellow px-5"
          >
            <Instagram className="w-8 fill-slate-light-1" />
            <span>INSTAGRAM</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
