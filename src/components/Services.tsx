import useWindowDimensions from '@/hooks/get-windowDimension'
import scrollTo from '@/hooks/scroll-to'
import ArrowLeft from '@/icons/ArrowLeft'
import Phone from '@/icons/Phone'
import clsx from 'clsx'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { variants } from './Opening'
import ServiceCurrent from './ServiceCurrent'
import ServicesGrid from './ServicesGrid'
import TransparentButton from './TransparentButton'
import YellowButton from './YellowButton'

export default function Services() {
  const [currentService, setCurrentService] = useState<number | undefined>()
  const [showFullText, setShowFullText] = useState(false)
  const [blockChangeHeight, setBlockChangeHeight] = useState(false)

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlockChangeHeight(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [blockChangeHeight])

  useEffect(() => {
    inView
      ? controls.start('visible')
      : (controls.start('hidden'),
        !blockChangeHeight && (setCurrentService(undefined), setShowFullText(false)))
  }, [blockChangeHeight, controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      id="services"
      className={clsx(
        'flex h-fit w-full flex-col items-center justify-center text-slate-light-1 lg:h-[90vh]',
        currentService ? 'py-[5vh]' : 'space-y-[5%] py-[5vh] lg:py-[10vh]'
      )}
    >
      {currentService === undefined ? (
        <ServicesGrid
          setCurrentService={setCurrentService}
          setBlockChangeHeight={setBlockChangeHeight}
          controls={controls}
        />
      ) : (
        <>
          <ServiceCurrent id={currentService} showFullText={showFullText} />

          <div className="flex h-[18vh] min-h-[18vh] w-full items-center justify-between bg-[#0B0B0B] px-[5%] text-sm tracking-[.1em] drop-shadow-upper lg:h-[20vh] lg:min-h-[20vh] lg:px-[20%] lg:text-xl">
            <button
              onClick={async () => {
                await controls.start('hidden')
                setCurrentService(undefined)
                setShowFullText(false)
                controls.start('visible')
              }}
              className="group relative flex items-center justify-center gap-3 overflow-hidden py-2 px-5 leading-none"
            >
              <span className="absolute inset-0 translate-x-full transition-transform group-hover:translate-x-0 group-hover:border-b-2 group-hover:delay-100 group-hover:duration-300"></span>
              <ArrowLeft className="w-8 fill-slate-light-1" /> VOLTAR
            </button>

            <div className="flex items-center justify-center space-x-5">
              <YellowButton
                onClick={() => scrollTo('contact')}
                title="FALE CONOSCO"
                titlehover={undefined}
                iconhover={<Phone className="w-8 fill-slate-light-1" />}
                classplus={undefined}
                backgroundhover="bg-[#0B0B0B]"
              />
              <TransparentButton
                onClick={async () => {
                  await controls.start('hidden')
                  setShowFullText(!showFullText)
                  scrollTo('services')
                  setBlockChangeHeight(true)
                  controls.start('visible')
                }}
                title={showFullText ? 'RESUMIR TEXTO' : 'EXPANDIR TEXTO'}
                classplus={undefined}
              />
            </div>
          </div>
        </>
      )}
    </motion.div>
  )
}
