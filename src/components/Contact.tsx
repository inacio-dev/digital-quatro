import useWindowDimensions from '@/hooks/get-windowDimension'
import Email from '@/Icons/Email'
import Instagram from '@/Icons/Instagram'
import Messenger from '@/Icons/Messenger'
import Whatsapp from '@/Icons/Whatsapp'
import Image from 'next/image'

export default function Contact() {
  const { width, height } = useWindowDimensions()

  return (
    <div className="flex items-center justify-between px-[10%]">
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
          <button className="flex items-center justify-center gap-3 bg-brand-yellow py-2 px-10">
            <Whatsapp className="sticky left-0 w-9" />
            WHATSAPP
          </button>
          <button className="flex items-center justify-center gap-3 bg-brand-yellow py-2 px-10">
            <Email className="w-9" />
            EMAIL
          </button>
          <button className="flex items-center justify-center gap-3 bg-brand-yellow py-2 px-10">
            <Messenger className="w-9" />
            MESSENGER
          </button>
          <button className="flex items-center justify-center gap-3 bg-brand-yellow py-2 px-10">
            <Instagram className="w-9" />
            INSTAGRAM
          </button>
        </div>
      </div>
    </div>
  )
}
