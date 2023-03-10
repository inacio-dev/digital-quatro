import { banners } from '@/arrays/banners'
import Square from '@/designs/Square'
import useWindowDimensions from '@/hooks/get-windowDimension'
import scrollTo from '@/hooks/scroll-to'
import ArrowLeft from '@/icons/ArrowLeft'
import ArrowRight from '@/icons/ArrowRight'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

export default function Banner({
  id,
  setBannerId
}: {
  id: number
  setBannerId: Dispatch<SetStateAction<number>>
}) {
  const { width, height } = useWindowDimensions()

  const banner = banners.find((banner) => {
    return banner.id === id
  })

  const styling = {
    backgroundImage: `url('/ellipse-person-6.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100%'
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="absolute top-[20%] left-[10%] text-5xl font-bold tracking-[.2em] lg:text-8xl">
          {banner?.name}
        </h1>

        <div className="absolute top-[55%] left-[10%] hidden max-w-[162px] items-center space-x-3 lg:left-[14%] lg:top-[60%] lg:flex">
          <Square className="h-2 w-2 fill-slate-light-1" />
          <p>{banner?.leftBanner}</p>
        </div>

        <button
          onClick={() => setBannerId(id === 0 ? 3 : id - 1)}
          className="absolute bottom-[35%] left-[10%] z-10 w-16 lg:left-[30%]"
        >
          <ArrowLeft className="fill-slate-light-1" />
        </button>
        {banner && (
          <Image
            style={styling}
            src={banner.image}
            width={height ? height * 0.46 : 0}
            quality={width && width > 1023 ? 100 : 50}
            alt={''}
            height={0}
            className="-z-10 opacity-20 lg:opacity-100"
          />
        )}
        <button
          onClick={() => setBannerId(id === 3 ? 0 : id + 1)}
          className="absolute bottom-[35%] right-[10%] z-10 w-16 lg:right-[30%]"
        >
          <ArrowRight className="fill-slate-light-1" />
        </button>

        <div className="absolute left-[10%] max-w-xs lg:left-auto lg:right-[10%] lg:max-w-sm">
          <h1 className="text-2xl font-medium">{banner?.title}</h1>
          <p className="pt-4">{banner?.description}</p>

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
          <p>{banner?.details[1]}</p>
          <p className="font-bold">{banner?.details['1.1']}</p>
        </div>
        <div>
          <p>{banner?.details[2]}</p>
          <p className="font-bold">{banner?.details['2.1']}</p>
        </div>
        <div>
          <p>{banner?.details[3]}</p>
          <p className="font-bold">{banner?.details['3.1']}</p>
        </div>
      </div>
    </>
  )
}
