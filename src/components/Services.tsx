import { services } from '@/arrays/services'

export default function Services() {
  return (
    <div
      id="services"
      className="flex w-full flex-col items-center justify-center space-y-[5%] py-[10vh] text-slate-light-1"
    >
      <div className="flex flex-col items-center space-x-4 lg:flex-row lg:items-end">
        <h1 className="text-4xl font-bold tracking-widest lg:text-8xl">ENCONTRE</h1>
        <h2 className="text-xl font-light tracking-widest lg:text-3xl">
          O SERVIÇO QUE VOCÊ PRECISA
        </h2>
      </div>

      <div className="flex w-full flex-col items-center justify-center space-y-[3%] font-medium lg:flex-row lg:space-y-0 lg:space-x-[5%]">
        {services.map((service, index) => (
          <div key={index} className="h-[400px] w-[280px] border-2 border-slate-light-1">
            <div className="flex h-14 w-14 items-center justify-center self-baseline bg-slate-light-1 text-3xl tracking-widest text-slate-dark-1">
              {Number(service.id) < 10 ? <>.0{service.id}</> : <>.{service.id}</>}
            </div>

            <div className="flex flex-col items-center justify-center space-y-10">
              <div className="flex flex-col items-center justify-center space-y-4">
                <h1 className="text-3xl tracking-wide">{service.title}</h1>
                <hr className="h-[3px] w-[5vw] rounded border-0 bg-brand-yellow"></hr>
              </div>

              <p className="max-w-[220px] text-center">{service.description}</p>
              <button className="bg-brand-yellow py-2 px-5 font-normal">SAIBA MAIS</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
