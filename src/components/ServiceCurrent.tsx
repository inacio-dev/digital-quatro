import { services } from '@/arrays/services'

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

  return (
    <div className="flex h-[40vh] w-full flex-col items-center justify-center text-slate-light-1">
      <div className="flex w-full flex-row items-end justify-center space-x-[1%] tracking-widest">
        <h1 className="text-8xl font-bold">{service?.name[1]}</h1>
        <p className="text-4xl font-light">{service?.name[2]}</p>
      </div>

      {!showFullText ? <></> : <></>}
    </div>
  )
}
