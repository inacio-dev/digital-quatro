import { motion, useAnimation } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Banner from './Banner'

export const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
  hidden: { opacity: 0, y: 30 }
}

export default function Opening() {
  const [bannerId, setBannerId] = useState(1)
  const router = useRouter()
  const { model } = router.query
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    model && setBannerId(Number(model))
  }, [model])

  useEffect(() => {
    inView ? controls.start('visible') : controls.start('hidden')
  }, [controls, inView])

  return (
    <div className="flex h-fit w-full flex-col text-slate-light-1 lg:h-[100vh] lg:min-h-[100vh] lg:pt-0">
      <motion.div ref={ref} animate={controls} initial="hidden" variants={variants}>
        <Banner id={bannerId} setBannerId={setBannerId} controls={controls} />
      </motion.div>
    </div>
  )
}
