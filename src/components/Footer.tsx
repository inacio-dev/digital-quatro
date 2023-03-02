import ArrowUp from '@/Icons/ArrowUp'
import Facebook from '@/Icons/Facebook'
import Instagram from '@/Icons/Instagram'
import Logo from '@/Icons/Logo'
import Whatsapp from '@/Icons/Whatsapp'

export default function Footer() {
  const scrollToTop = () => {
    console.log('deu certo')
  }

  return (
    <div className="flex h-[468px] w-full flex-col items-center justify-center space-y-8 bg-[#FFB401] tracking-[.1em] text-slate-light-1">
      <div className="flex items-start justify-center gap-40 pb-12">
        <div className="flex flex-col space-y-8">
          <Logo className="w-[304px] fill-slate-light-1" />
          <span>
            Digital Quatro 2023<br></br>Todos os direitos reservados
          </span>
        </div>
        <ul className="flex flex-col items-center space-y-3">
          <span className="text-xl font-bold">Serviços</span>
          <hr className="h-[2px] w-[62px] rounded border-0 bg-slate-light-1"></hr>
          <li>Tráfego Pago</li>
          <li>Design Gráfico</li>
          <li>Mídia Social</li>
          <li>Desenvolvimento Web</li>
        </ul>
        <ul className="flex flex-col items-center space-y-3">
          <span className="text-xl font-bold">Sobre</span>
          <hr className="h-[2px] w-[62px] rounded border-0 bg-slate-light-1"></hr>
          <li>História</li>
          <li>Direitos autorais</li>
          <li>Políticas de privacidade</li>
        </ul>
        <ul className="flex flex-col items-center space-y-3">
          <span className="text-xl font-bold">Dúvidas</span>
          <hr className="h-[2px] w-[62px] rounded border-0 bg-slate-light-1"></hr>
          <li>Fale conosco</li>
        </ul>
      </div>
      <hr className="h-[2px] w-[80%] rounded border-0 bg-slate-light-1"></hr>
      <div className="flex items-center space-x-7 fill-slate-light-1">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-dark-8 bg-opacity-40">
          <Whatsapp className="w-9" />
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-dark-8 bg-opacity-40">
          <Instagram className="w-7" />
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-dark-8 bg-opacity-40">
          <Facebook className="w-8" />
        </div>

        <button onClick={scrollToTop} className="absolute right-[10%] flex items-center space-x-3">
          <p className="font-medium">VOLTAR AO TOPO</p>
          <ArrowUp className="w-6" />
        </button>
      </div>
    </div>
  )
}
