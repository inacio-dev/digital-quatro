import OrbitEllipse from '@/designs/OrbitEllipse'
import Square from '@/designs/Square'
import ArrowDown from '@/icons/ArrowDown'

export default function Raise() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-[34vh] text-slate-light-1">
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

      <ArrowDown className="absolute w-6 fill-slate-light-1 pt-[35%]" />
    </div>
  )
}
