import { banners } from '@/arrays/banners'
import Square from '@/designs/Square'
import useWindowDimensions from '@/hooks/get-windowDimension'
import scrollTo from '@/hooks/scroll-to'
import ArrowLeft from '@/icons/ArrowLeft'
import ArrowRight from '@/icons/ArrowRight'
import Phone from '@/icons/Phone'
import clsx from 'clsx'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import TransparentButton from './TransparentButton'
import YellowButton from './YellowButton'

function setImageHeight(image: string) {
  if (image.includes('6')) {
    return 0.46
  }
  if (image.includes('2')) {
    return 0.37
  }
  if (image.includes('7')) {
    return 0.53
  }
  if (image.includes('8')) {
    return 0.47
  }

  return 0
}

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
    backgroundImage: `url('/ellipse-person.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '40vh'
  }

  return (
    <>
      <div className="flex h-[61vh] flex-col items-center justify-center">
        <h1
          className={clsx(
            'absolute top-[120px] left-[10%] text-[5vh] font-bold tracking-[.2em] lg:top-[20%] lg:text-8xl',
            width && width < 330 ? 'top-[90px]' : 'top-[120px]'
          )}
        >
          {banner?.name}
        </h1>

        <button onClick={() => setBannerId(id === 0 ? 3 : id - 1)} className="group">
          <div className="group invisible absolute top-[55%] left-[10%] hidden max-w-[200px] items-center space-x-3 overflow-hidden py-4 text-left leading-none lg:visible lg:left-[14%] lg:top-[60%] lg:flex">
            <Square className="h-2 w-2 fill-slate-light-1" />
            <p>{banner?.leftBanner}</p>
            <span className="absolute inset-0 translate-x-full transition-transform group-hover:translate-x-0 group-hover:border-b-2 group-hover:delay-100 group-hover:duration-300"></span>
          </div>

          <ArrowLeft
            className={clsx(
              'absolute left-[10%] z-10 w-16 fill-slate-light-1 px-2 py-3 transition-all delay-100 duration-300 group-hover:rounded-xl group-hover:bg-slate-dark-3 lg:left-[30%] lg:w-20',
              height && height < 770 ? 'bottom-[30%]' : 'bottom-[35%]'
            )}
          />
        </button>

        {banner && (
          <Image
            src={banner.image}
            width={height ? height * setImageHeight(banner.image) : 0}
            alt={banner.image}
            height={0}
            priority
            className="-z-10 flex-1 justify-self-end object-cover brightness-[30%] lg:brightness-100"
          />
        )}
        <Image
          src="/ellipse-person.svg"
          width={height ? height * 0.45 : 0}
          alt={''}
          height={0}
          priority
          quality={30}
          className="absolute -z-20 justify-self-center object-cover opacity-20 lg:opacity-100"
        />

        <button
          onClick={() => setBannerId(id === 3 ? 0 : id + 1)}
          className={clsx(
            'group absolute right-[10%] lg:right-[30%]',
            height && height < 770 ? 'bottom-[30%]' : 'bottom-[35%]'
          )}
        >
          <ArrowRight className="z-10 w-16 fill-slate-light-1 px-2 py-3 transition-all delay-100 duration-300 group-hover:rounded-xl group-hover:bg-slate-dark-3 lg:w-20" />
        </button>

        <div className="absolute left-[10%] max-w-lg pr-[10%] lg:left-auto lg:right-[10%] lg:max-w-sm lg:pr-0">
          <h1 className="text-[3vh] font-medium lg:text-2xl">{banner?.title}</h1>
          <p className="pt-4 text-[2vh]">{banner?.description}</p>

          <div className="space-x-5 pt-9">
            <YellowButton
              onClick={() => scrollTo('contact')}
              title="FALE CONOSCO"
              titlehover={undefined}
              iconhover={<Phone className="w-8 fill-slate-light-1" />}
              classplus={undefined}
              backgroundhover="bg-slate-dark-1"
            />
            <TransparentButton
              onClick={() => scrollTo('services')}
              title="SAIBA MAIS"
              classplus={undefined}
            />
          </div>
        </div>
      </div>

      <div className="flex h-[18vh] min-h-[18vh] w-full items-center justify-between bg-[#0B0B0B] px-[5%] text-sm tracking-[.1em] drop-shadow-upper lg:h-[29vh] lg:px-[20%] lg:text-xl">
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
