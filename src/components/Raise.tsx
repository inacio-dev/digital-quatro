import OrbitEllipse from '@/designs/OrbitEllipse'
import Square from '@/designs/Square'
import scrollTo from '@/hooks/scroll-to'
import ArrowDown from '@/icons/ArrowDown'

export default function Raise() {
  return (
    <div className="invisible hidden w-full flex-col items-center justify-center py-[34vh] text-slate-light-1 lg:visible lg:flex">
      <div className="flex flex-col items-center text-7xl tracking-[.2em]">
        <p className="font-semibold">ELEVE SUA</p>
        <p className="font-light">EMPRESA</p>
        <p className="font-semibold">A OUTRO PATAMAR</p>
      </div>

      <OrbitEllipse className="absolute -z-10" />

      <div className="absolute left-0 flex rotate-90 items-center space-x-3 pr-[30%] pt-[25%]">
        <Square className="h-2 w-2 fill-slate-light-1" />
        <p>COMECE IMEDIATAMENTE</p>
      </div>
      <div className="absolute right-0 flex -rotate-90 items-center space-x-3 pl-[30%] pt-[25%]">
        <Square className="h-2 w-2 fill-slate-light-1" />
        <p>COMECE IMEDIATAMENTE</p>
      </div>

      <button
        onClick={() => scrollTo('services')}
        className="group absolute mt-[35%] overflow-hidden px-2 py-3 leading-none"
      >
        <ArrowDown className="w-6 fill-slate-light-1" />
        <span className="absolute inset-0 -z-10 -translate-y-full rounded-md bg-slate-dark-3 transition-transform group-hover:translate-y-0 group-hover:delay-100 group-hover:duration-300"></span>
      </button>
    </div>
  )
}
