export default function useImageLoader({
  src,
  width,
  quality
}: {
  src: string
  width: number
  quality: number | undefined
}) {
  return `https://www.digitalquatro.com.br/${src}?w=${width}&q=${quality || 25}`
}
