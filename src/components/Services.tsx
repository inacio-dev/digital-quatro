export default function Services() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-[5%] py-[19vh] text-slate-light-1">
      <div className="flex items-end space-x-4">
        <h1 className="text-8xl font-bold tracking-widest">ENCONTRE</h1>
        <h2 className="text-3xl font-light tracking-widest">O SERVIÇO QUE VOCÊ PRECISA</h2>
      </div>

      <div className="flex w-full items-center justify-center space-x-[5%] font-medium">
        <div className="h-[400px] w-[280px] border-2 border-slate-light-1">
          <div className="flex h-14 w-14 items-center justify-center self-baseline bg-slate-light-1 text-3xl tracking-widest text-slate-dark-1">
            .01
          </div>

          <div className="flex flex-col items-center justify-center space-y-10">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h1 className="text-3xl tracking-wide">SITE</h1>
              <hr className="h-[3px] w-[5vw] rounded border-0 bg-brand-yellow"></hr>
            </div>

            <p className="max-w-[220px] text-center">
              Oferecemos soluções personalizadas para o desenvolvimento de sites, aplicativos e
              sistemas de gerenciamento de conteúdo.
            </p>
            <button className="bg-brand-yellow py-2 px-5 font-normal">SAIBA MAIS</button>
          </div>
        </div>

        <div className="h-[400px] w-[280px] border-2 border-slate-light-1">
          <div className="flex h-14 w-14 items-center justify-center self-baseline bg-slate-light-1 text-3xl tracking-widest text-slate-dark-1">
            .02
          </div>

          <div className="flex flex-col items-center justify-center space-y-10">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h1 className="text-3xl tracking-wide">DESIGN GRÁFICO</h1>
              <hr className="h-[3px] w-[5vw] rounded border-0 bg-brand-yellow"></hr>
            </div>

            <p className="max-w-[220px] text-center">
              Desde a criação de logotipos e identidade visual até a produção de peças gráficas para
              impressão e web, estamos prontos para dar vida à sua marca.
            </p>
            <button className="bg-brand-yellow py-2 px-5 font-normal">SAIBA MAIS</button>
          </div>
        </div>

        <div className="h-[400px] w-[280px] border-2 border-slate-light-1">
          <div className="flex h-14 w-14 items-center justify-center self-baseline bg-slate-light-1 text-3xl tracking-widest text-slate-dark-1">
            .03
          </div>

          <div className="flex flex-col items-center justify-center space-y-10">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h1 className="text-3xl tracking-wide">TRÁFEGO PAGO</h1>
              <hr className="h-[3px] w-[5vw] rounded border-0 bg-brand-yellow"></hr>
            </div>

            <p className="max-w-[220px] text-center">
              Aumente sua visibilidade e conquiste mais clientes com anúncios estratégicos em
              plataformas como Google e Facebook.
            </p>
            <button className="bg-brand-yellow py-2 px-5 font-normal">SAIBA MAIS</button>
          </div>
        </div>

        <div className="h-[400px] w-[280px] border-2 border-slate-light-1">
          <div className="flex h-14 w-14 items-center justify-center self-baseline bg-slate-light-1 text-3xl tracking-widest text-slate-dark-1">
            .04
          </div>

          <div className="flex flex-col items-center justify-center space-y-10">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h1 className="text-3xl tracking-wide">MÍDIA SOCIAL</h1>
              <hr className="h-[3px] w-[5vw] rounded border-0 bg-brand-yellow"></hr>
            </div>

            <p className="max-w-[220px] text-center">
              Obtenha uma criação de conteúdo envolvente e o gerenciamento completo da sua presença
              nas mídias sociais.
            </p>
            <button className="bg-brand-yellow py-2 px-5 font-normal">SAIBA MAIS</button>
          </div>
        </div>
      </div>
    </div>
  )
}
