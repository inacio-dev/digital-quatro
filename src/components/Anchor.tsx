import { useEffect, useState } from 'react'

type AnchorProps = {
  name: string
  timing: number
  rotation: number
}

export default function Anchor({ name, timing, rotation }: AnchorProps) {
  const [isBooped, setIsBooped] = useState(false)

  const style = {
    transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    transition: `transform ${timing}ms`
  }

  useEffect(() => {
    console.log(isBooped)
    if (!isBooped) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setIsBooped(false)
    }, timing)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [isBooped, timing])

  return (
    <button onClick={() => console.log('deu certo')} style={style}>
      {name}
    </button>
  )
}
