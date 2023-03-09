import Square from '@/designs/Square'
import useWindowDimensions from '@/hooks/get-windowDimension'
import scrollTo from '@/hooks/scroll-to'
import ArrowLeft from '@/icons/ArrowLeft'
import ArrowRight from '@/icons/ArrowRight'
import Image from 'next/image'

export default function Banners() {
  const { width, height } = useWindowDimensions()

  const styling = {
    backgroundImage: `url('/ellipse-person-6.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100%'
  }

  return (
    <div className="flex w-full flex-col text-slate-light-1 lg:pt-0">
      <div className="flex flex-col items-center justify-center">
        <h1 className="absolute top-[20%] left-[10%] text-5xl font-bold tracking-[.2em] lg:text-8xl">
          TRÁFEGO
        </h1>

        <div className="absolute top-[55%] left-[10%] hidden max-w-[162px] items-center space-x-3 lg:left-[14%] lg:top-[60%] lg:flex">
          <Square className="h-2 w-2 fill-slate-light-1" />
          <p>INCREMENTE O DESIGN DA SUA EMPRESA</p>
        </div>

        <button className="absolute bottom-[35%] left-[10%] z-10 w-16 lg:left-[30%]">
          <ArrowLeft className="fill-slate-light-1" />
        </button>
        <Image
          style={styling}
          src="/person-6.png"
          width={height ? height * 0.46 : 0}
          quality={100}
          alt={''}
          height={0}
          className="-z-10 opacity-20 lg:opacity-100"
        />
        <button className="absolute bottom-[35%] right-[10%] z-10 w-16 lg:right-[30%]">
          <ArrowRight className="fill-slate-light-1" />
        </button>

        <div className="absolute left-[10%] max-w-xs lg:left-auto lg:right-[10%] lg:max-w-sm">
          <h1 className="text-2xl font-medium">DESEJA INICIAR O TRÁFEGO PAGO NA SUA EMPRESA?</h1>
          <p className="pt-4">
            Potencialize suas vendas e conquiste novos clientes com a poderosa combinação do Google
            Ads e Meta Ads.
          </p>

          <div className="space-x-5 pt-9">
            <button onClick={() => scrollTo('contact')} className="bg-brand-yellow py-2 px-5">
              FALE CONOSCO
            </button>
            <button onClick={() => scrollTo('services')} className="py-2 px-5">
              SAIBA MAIS
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-[18vh] w-full items-center justify-between bg-[#0B0B0B] px-[10%] text-sm tracking-[.1em] drop-shadow-upper lg:h-[29vh] lg:px-[20%] lg:text-xl">
        <div>
          <p>CLIENTES</p>
          <p className="font-bold">SATISFEITOS</p>
        </div>
        <div>
          <p>CERTIFICADOS</p>
          <p className="font-bold">PELO GOOGLE</p>
        </div>
        <div>
          <p>CONSULTORIA</p>
          <p className="font-bold">GRATUITA</p>
        </div>
      </div>
    </div>
  )
}
