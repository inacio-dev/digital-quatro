import useWindowDimensions from '@/hooks/get-windowDimension'
import scrollTo from '@/hooks/scroll-to'
import ArrowLeft from '@/icons/ArrowLeft'
import Phone from '@/icons/Phone'
import clsx from 'clsx'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ServiceCurrent from './ServiceCurrent'
import ServicesGrid from './ServicesGrid'
import TransparentButton from './TransparentButton'
import YellowButton from './YellowButton'

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.25 } },
  hidden: { opacity: 0, y: 30 }
}

export default function Services() {
  const [currentService, setCurrentService] = useState<number | undefined>()
  const [showFullText, setShowFullText] = useState(false)
  const [blockChangeHeight, setBlockChangeHeight] = useState(false)

  const { width, height } = useWindowDimensions()
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const listenToScroll = () => {
    const heightToHideFrom = document.getElementById('services')?.scrollHeight
    const heightToHideTo = document.getElementById('services')?.scrollWidth
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop

    if (width && width > 1023) {
      if (heightToHideFrom && heightToHideTo) {
        if (
          winScroll < heightToHideFrom - 200 ||
          winScroll > heightToHideTo + heightToHideFrom + 200
        ) {
          setCurrentService(undefined)
          setShowFullText(false)
        }
      }
    } else {
      if (!blockChangeHeight) {
        if (heightToHideFrom && heightToHideTo) {
          if (winScroll < 200 || winScroll > heightToHideTo + heightToHideFrom + 200) {
            setCurrentService(undefined)
            setShowFullText(false)
          }
        }
      }
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlockChangeHeight(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [blockChangeHeight])

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () => window.removeEventListener('scroll', listenToScroll)
  })

  useEffect(() => {
    inView ? controls.start('visible') : controls.start('hidden')
  }, [controls, inView])

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
        />
      ) : (
        <>
          <ServiceCurrent id={currentService} showFullText={showFullText} />

          <div className="flex h-[18vh] min-h-[18vh] w-full items-center justify-between bg-[#0B0B0B] px-[5%] text-sm tracking-[.1em] drop-shadow-upper lg:h-[20vh] lg:min-h-[20vh] lg:px-[20%] lg:text-xl">
            <button
              onClick={() => {
                setCurrentService(undefined)
                setShowFullText(false)
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
                onClick={() => {
                  setShowFullText(!showFullText)
                  scrollTo('services')
                  setBlockChangeHeight(true)
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
