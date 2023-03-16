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
    <div className="flex h-fit w-full flex-col items-center justify-center text-slate-light-1 lg:h-[70vh]">
      <div className="flex w-full flex-row items-end justify-center space-x-[1%] pb-20 tracking-widest">
        <h1 className="text-4xl font-bold tracking-widest lg:text-8xl">{service?.name[1]}</h1>
        <p className="text-xl font-light tracking-widest lg:text-3xl">{service?.name[2]}</p>
      </div>

      {!showFullText && service ? (
        <div className="flex h-fit flex-col items-center justify-center lg:grid lg:h-[40vh] lg:grid-cols-2 lg:items-start lg:justify-items-center">
          <div className="space-y-[3%] px-[10%] text-base lg:text-lg">
            {service.minText.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {height && (
            <Image
              src={service.imageDetail}
              width={height * setImageHeight(service.imageDetail)}
              height={0}
              alt=""
              className="invisible -z-10 hidden justify-self-center object-cover lg:visible lg:flex"
              quality={100}
            />
          )}
        </div>
      ) : (
        <div className="flex h-fit w-full flex-col items-center justify-center text-base lg:grid lg:grid-cols-2 lg:items-start lg:justify-items-center lg:pb-[5%] lg:text-lg">
          {service?.text.map((text, index) => (
            <div key={index} className="space-y-[3%] px-[10%]">
              {text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
