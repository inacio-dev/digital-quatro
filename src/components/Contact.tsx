import useWindowDimensions from '@/hooks/get-windowDimension'
import Email from '@/Icons/Email'
import Instagram from '@/Icons/Instagram'
import Messenger from '@/Icons/Messenger'
import Whatsapp from '@/Icons/Whatsapp'
import Image from 'next/image'

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
          <button className="flex h-[46px] w-[200px] items-center bg-brand-yellow px-5">
            <Whatsapp className="w-9" />
            <span className="flex-1">WHATSAPP</span>
          </button>
          <button className="flex h-[46px] w-[200px] items-center bg-brand-yellow px-5">
            <Email className="w-8" />
            <span className="flex-1">EMAIL</span>
          </button>
          <button className="flex h-[46px] w-[200px] items-center bg-brand-yellow px-5">
            <Messenger className="w-8" />
            <span className="flex-1">MESSENGER</span>
          </button>
          <button className="flex h-[46px] w-[200px] items-center bg-brand-yellow px-5">
            <Instagram className="w-8" />
            <span className="flex-1">INSTAGRAM</span>
          </button>
        </div>
      </div>
    </div>
  )
}
