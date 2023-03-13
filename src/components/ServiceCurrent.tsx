import { services } from '@/arrays/services'
import useWindowDimensions from '@/hooks/get-windowDimension'
import Image from 'next/image'

function setImageHeight(image: string) {
  if (image.includes('1')) {
    return 0.4
  }
  if (image.includes('3')) {
    return 0.37
  }
  if (image.includes('4')) {
    return 0.53
  }
  if (image.includes('9')) {
    return 0.6
  }

  return 0
}

export default function ServiceCurrent({
  id,
  showFullText
}: {
  id: number
  showFullText: boolean
}) {
  const service = services.find((service) => {
    return service.id === id
  })

  const { width, height } = useWindowDimensions()

  return (
    <div className="flex h-[70vh] w-full flex-col items-center justify-center text-slate-light-1">
      <div className="flex w-full flex-row items-end justify-center space-x-[1%] pb-20 tracking-widest">
        <h1 className="text-8xl font-bold">{service?.name[1]}</h1>
        <p className="text-4xl font-light">{service?.name[2]}</p>
      </div>

      {!showFullText && service ? (
        <div className="grid h-[40vh] grid-cols-2 items-start justify-items-center">
          <p className="max-w-[60%]">{service.minText}</p>
          {height && (
            <Image
              src={service.imageDetail}
              width={height * setImageHeight(service.imageDetail)}
              height={0}
              alt=""
              className="-z-10 justify-self-center object-cover brightness-[30%] lg:brightness-100"
              quality={100}
            />
          )}
        </div>
      ) : (
        <div className="grid h-[40vh] grid-cols-2 items-start justify-items-center">
          <p className="max-w-[60%]">{service?.text[1]}</p>
          <p className="max-w-[60%]">{service?.text[1]}</p>
        </div>
      )}
    </div>
  )
}
