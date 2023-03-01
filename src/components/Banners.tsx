import Square from '@/Designs/Square'
import useWindowDimensions from '@/hooks/get-windowDimension'
import ArrowLeft from '@/Icons/ArrowLeft'
import ArrowRight from '@/Icons/ArrowRight'
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
    <div className={`h-[${height}] flex w-full flex-col text-slate-light-1`}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="absolute top-[20%] left-[10%] text-8xl font-bold tracking-[.2em]">
          TRÁFEGO
        </h1>

        <div className="absolute top-[60%] left-[14%] flex max-w-[162px] items-center space-x-3">
          <Square className="h-2 w-2 fill-slate-light-1" />
          <p>INCREMENTE O DESIGN DA SUA EMPRESA</p>
        </div>

        <button className="absolute left-[30%] bottom-[30%] z-10 w-16">
          <ArrowLeft className="fill-slate-light-1" />
        </button>
        <Image
          style={styling}
          src="/person-6.png"
          width={height ? height * 0.503 : 0}
          quality={100}
          alt={''}
          height={0}
        />
        <button className="absolute right-[30%] bottom-[30%] z-10 w-16">
          <ArrowRight className="fill-slate-light-1" />
        </button>

        <div className="absolute right-[15%] max-w-sm">
          <h1 className="text-2xl font-medium">DESEJA INICIAR O TRÁFEGO PAGO NA SUA EMPRESA?</h1>
          <p className="pt-4">
            Potencialize suas vendas e conquiste novos clientes com a poderosa combinação do Google
            Ads e Meta Ads.
          </p>

          <div className="space-x-5 pt-9">
            <button className="bg-brand-yellow py-2 px-5">FALE CONOSCO</button>
            <button className="py-2 px-5">SAIBA MAIS</button>
          </div>
        </div>
      </div>
      <div className="flex h-52 w-full items-center justify-between bg-[#0B0B0B] px-[20%] text-xl tracking-[.1em] drop-shadow-upper">
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
