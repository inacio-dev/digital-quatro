import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Banner from './Banner'

export default function Opening() {
  const [bannerId, setBannerId] = useState(1)
  const router = useRouter()
  const { model } = router.query

  useEffect(() => {
    model && setBannerId(Number(model))
  }, [model])

  return (
    <div className="flex h-fit w-full flex-col text-slate-light-1 lg:h-[100vh] lg:min-h-[100vh] lg:pt-0">
      <Banner id={bannerId} setBannerId={setBannerId} />
    </div>
  )
}
