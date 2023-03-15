import { services } from '@/arrays/services'
import useWindowDimensions from '@/hooks/get-windowDimension'
import scrollTo from '@/hooks/scroll-to'
import ArrowRight from '@/icons/ArrowRight'
import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import YellowButton from './YellowButton'

export default function ServicesGrid({
  setCurrentService,
  setBlockChangeHeight
}: {
  setCurrentService: Dispatch<SetStateAction<number | undefined>>
  setBlockChangeHeight: Dispatch<SetStateAction<boolean>>
}) {
  const { width, height } = useWindowDimensions()

  return (
    <>
      <div className="flex flex-col items-center space-x-4 lg:flex-row lg:items-end">
        <h1 className="text-4xl font-bold tracking-widest lg:text-8xl">ENCONTRE</h1>
        <h2 className="text-xl font-light tracking-widest lg:text-3xl">
          O SERVIÇO QUE VOCÊ PRECISA
        </h2>
      </div>

      <div
        className={clsx(
          'grid w-full items-center justify-center justify-items-center space-y-[3%] px-4 font-medium lg:flex lg:flex-row lg:space-y-0 lg:space-x-[5%]',
          width && width < 700 ? 'grid-cols-1' : 'grid-cols-2'
        )}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex h-[400px] w-[280px] flex-col border-2 border-slate-light-1"
          >
            <div className="flex h-14 w-14 items-center justify-center self-baseline bg-slate-light-1 text-3xl tracking-widest text-slate-dark-1">
              {service.id < 10 ? <>.0{service.id + 1}</> : <>.{service.id}</>}
            </div>

            <div className="flex flex-col items-center justify-center space-y-10">
              <div className="flex flex-col items-center justify-center space-y-4">
                <h1 className="text-3xl tracking-wide">{service.title}</h1>
                <hr className="h-[3px] w-[5vw] rounded border-0 bg-brand-yellow"></hr>
              </div>

              <p className="max-w-[220px] text-center">{service.description}</p>
            </div>

            <YellowButton
              onClick={() => {
                setBlockChangeHeight(true)
                setCurrentService(Number(service.id))
                scrollTo('services')
              }}
              title={'SAIBA MAIS'}
              titlehover={undefined}
              iconhover={<ArrowRight className="w-8 fill-slate-light-1" />}
              classplus="mx-auto mt-auto mb-10"
              backgroundhover="bg-slate-dark-1"
            />
          </div>
        ))}
      </div>
    </>
  )
}
