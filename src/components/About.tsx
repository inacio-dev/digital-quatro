import OrbitEllipseMiddle from '@/Designs/OrbitEllipseMiddle'
import Square from '@/Designs/Square'
import useWindowDimensions from '@/hooks/get-windowDimension'
import LogoShort from '@/Icons/LogoShort'
import Image from 'next/image'

export default function About() {
  const { width, height } = useWindowDimensions()

  const styling = {
    backgroundImage: `url('/ellipse-desktop.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100%'
  }

  return (
    <div className="flex w-full items-center justify-between px-[18%] py-[19vh] text-slate-light-1">
      <OrbitEllipseMiddle className="absolute left-0 -z-10 object-cover" />
      <OrbitEllipseMiddle className="absolute right-0 -z-10 rotate-180" />

      <div>
        <div className="flex items-center justify-center">
          <LogoShort />
          <div className="flex items-center justify-center text-6xl">
            <h1 className="flex font-semibold tracking-widest">Sobre</h1>
            <h1 className="pl-3 font-light text-brand-yellow">a Digital</h1>
          </div>
        </div>
        <div className="space-y-8 pl-[20%]">
          <p className="max-w-md">
            Ei, que bom que você chegou à nossa agência de marketing digital! Nós somos as pessoas
            que podem ajudar sua empresa a crescer online. Com uma pitada de criatividade e muita
            experiência, criamos estratégias de marketing digital que se encaixam perfeitamente nas
            necessidades de cada cliente. Se você precisa de um site incrível, campanhas
            publicitárias matadoras ou uma presença impecável nas redes sociais, estamos aqui para
            ajudar. Vamos trabalhar juntos para levar o seu negócio para o próximo nível! Entre em
            contato com a gente agora e vamos conversar!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex max-w-[198px] items-center space-x-3">
              <Square className="h-2 w-2 fill-brand-yellow" />
              <p className="text-sm font-bold">PROFISSIONAIS QUALIFICADOS</p>
            </div>
            <div className="flex max-w-[198px] items-center space-x-3">
              <Square className="h-2 w-2 fill-brand-yellow" />
              <p className="text-sm font-bold">SUPORTE</p>
            </div>
            <div className="flex max-w-[198px] items-center space-x-3">
              <Square className="h-2 w-2 fill-brand-yellow" />
              <p className="text-sm font-bold">PROGRAMADORES</p>
            </div>
            <div className="flex max-w-[198px] items-center space-x-3">
              <Square className="h-2 w-2 fill-brand-yellow" />
              <p className="text-sm font-bold">DESIGNERS</p>
            </div>
          </div>
          <button className="bg-brand-yellow py-2 px-5">FALE CONOSCO</button>
        </div>
      </div>

      <Image
        style={styling}
        src="/desktop.png"
        width={height ? height * 0.4 : 0}
        alt={''}
        height={0}
        quality={100}
      />
    </div>
  )
}
