import useWindowDimensions from '@/hooks/get-windowDimension'
import Email from '@/icons/Email'
import Instagram from '@/icons/Instagram'
import Messenger from '@/icons/Messenger'
import Whatsapp from '@/icons/Whatsapp'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import ContactButton from './ContactButton'
import { variants } from './Opening'

export default function Contact() {
  const { width, height } = useWindowDimensions()
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    inView ? controls.start('visible') : controls.start('hidden')
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      id="contact"
      className="flex items-center justify-center px-[10%] pt-[13vh] lg:justify-between"
    >
      <Image
        src="/person-5.webp"
        width={height ? height * 0.512 : 0}
        alt="/person-5.webp"
        height={0}
        priority
        className="absolute -z-10 opacity-20 lg:relative lg:opacity-100"
      />

      <div className="flex flex-col items-center justify-center space-y-[5%] tracking-widest text-slate-light-1 lg:space-y-[10%]">
        <div className="flex flex-col items-center justify-center space-y-[4%]">
          <h1 className="text-center text-4xl font-bold lg:text-6xl ">CONTATE-NOS</h1>
          <h3 className="text-center text-2xl text-brand-yellow lg:text-4xl">
            FALE CONOSCO E TIRE SUAS DÚVIDAS
          </h3>
          <p className="max-w-md text-center">
            Escolha o método de sua preferência abaixo e entraremos em contato o mais breve
            possível.
          </p>
        </div>

        <div className="flex flex-col gap-3 space-y-3 fill-slate-light-1 pb-[10%] tracking-normal lg:pb-0">
          <ContactButton
            href="https://wa.me/message/KV7PBMLW2MUZD1"
            icon={<Whatsapp className="w-9 fill-slate-light-1" />}
            text="WHATSAPP"
          />
          <ContactButton
            href="mailto:contato@digitalquatro.com.br"
            icon={<Email className="w-8 fill-slate-light-1" />}
            text="EMAIL"
          />
          <ContactButton
            href="https://m.me/103825612478929"
            icon={<Messenger className="w-8 fill-slate-light-1" />}
            text="MESSENGER"
          />
          <ContactButton
            href="https://www.instagram.com/digitalquatro/"
            icon={<Instagram className="w-8 fill-slate-light-1" />}
            text="INSTAGRAM"
          />
        </div>
      </div>
    </motion.div>
  )
}
