import scrollTo from '@/hooks/scroll-to'
import ArrowLeft from '@/icons/ArrowLeft'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import ServiceCurrent from './ServiceCurrent'
import ServicesGrid from './ServicesGrid'

export default function Services() {
  const [currentService, setCurrentService] = useState<number | undefined>()
  const [showFullText, setShowFullText] = useState(false)

  useEffect(() => {}, [])

  return (
    <div
      id="services"
      className={clsx(
        'flex h-fit w-full flex-col items-center justify-center text-slate-light-1 lg:h-[90vh]',
        currentService ? '' : 'space-y-[5%] py-[5vh] lg:py-[10vh]'
      )}
    >
      {currentService === undefined ? (
        <ServicesGrid setCurrentService={setCurrentService} />
      ) : (
        <>
          <ServiceCurrent id={currentService} showFullText={showFullText} />
          <div className="flex h-[18vh] min-h-[18vh] w-full items-center justify-between bg-[#0B0B0B] px-[5%] text-sm tracking-[.1em] drop-shadow-upper lg:h-[20vh] lg:min-h-[20vh] lg:px-[20%] lg:text-xl">
            <button
              onClick={() => {
                setCurrentService(undefined)
                setShowFullText(false)
              }}
              className="flex items-center justify-center gap-3"
            >
              <ArrowLeft className="w-8 fill-slate-light-1" /> VOLTAR
            </button>

            <div className="flex items-center justify-center space-x-5">
              <button onClick={() => scrollTo('contact')} className="bg-brand-yellow py-2 px-5">
                FALE CONOSCO
              </button>
              <button onClick={() => setShowFullText(!showFullText)} className="py-2 px-5">
                {showFullText ? <>RESUMIR TEXTO</> : <>EXPANDIR TEXTO</>}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
