import OrbitEllipseMiddle from '@/designs/OrbitEllipseMiddle'
import Square from '@/designs/Square'
import useWindowDimensions from '@/hooks/get-windowDimension'
import scrollTo from '@/hooks/scroll-to'
import LogoShort from '@/icons/LogoShort'
import Phone from '@/icons/Phone'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { variants } from './Opening'
import TransparentButton from './TransparentButton'
import YellowButton from './YellowButton'

const styling = {
  backgroundImage: `url('/ellipse-desktop.svg')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '100%'
}

export default function About() {
  const { width, height } = useWindowDimensions()
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    inView ? controls.start('visible') : controls.start('hidden')
  }, [controls, inView])

  return (
    <div
      id="about"
      className="flex w-full items-center justify-center px-[18%] py-[9vh] text-slate-light-1 lg:justify-between"
    >
      <OrbitEllipseMiddle className="invisible absolute left-0 -z-10 hidden object-cover lg:visible lg:flex" />
      <OrbitEllipseMiddle className="invisible absolute right-0 -z-10 hidden rotate-180 lg:visible lg:flex" />

      <motion.div ref={ref} animate={controls} initial="hidden" variants={variants}>
        <div className="-ml-[20%] flex items-center justify-center">
          <LogoShort />
          <div className="flex flex-col items-center justify-center text-4xl lg:flex-row lg:text-6xl">
            <h1 className="flex font-semibold tracking-widest">Sobre</h1>
            <h1 className="pl-3 font-light text-brand-yellow">a Digital</h1>
          </div>
        </div>
        <div className="space-y-8 lg:pl-[20%]">
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
          <div className="flex items-center space-x-5">
            <YellowButton
              onClick={() => scrollTo('contact')}
              title="FALE CONOSCO"
              iconhover={<Phone className="w-8 fill-slate-light-1" />}
              backgroundhover="bg-slate-dark-1"
            />
            <TransparentButton onClick={() => scrollTo('services')} title="SERVIÇOS" />
          </div>
        </div>
      </motion.div>

      <motion.div ref={ref} animate={controls} initial="hidden" variants={variants}>
        <Image
          style={styling}
          src="/desktop.webp"
          width={height ? height * 0.4 : 0}
          alt="/desktop.webp"
          height={0}
          priority
          className="invisible hidden lg:visible lg:flex"
        />
      </motion.div>
    </div>
  )
}
