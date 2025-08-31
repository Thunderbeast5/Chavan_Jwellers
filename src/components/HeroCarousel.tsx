import { useEffect, useState } from 'react'

type HeroCarouselProps = {
  images: { src: string; alt?: string; ctaHref?: string; ctaLabel?: string }[]
  intervalMs?: number
}

export function HeroCarousel({ images, intervalMs = 5000 }: HeroCarouselProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [images.length, intervalMs])

  const goTo = (i: number) => setIndex(i)
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  return (
    <div className="relative h-[520px] bg-gray-100 overflow-hidden">
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <a
            key={img.src}
            href={img.ctaHref ?? '#'}
            className="block absolute inset-0"
            style={{
              opacity: i === index ? 1 : 0,
              transform: `scale(${i === index ? 1 : 1.03})`,
              transition: 'opacity 700ms ease, transform 700ms ease',
            }}
          >
            <img src={img.src} alt={img.alt ?? ''} className="w-full h-full object-cover" />
          </a>
        ))}
      </div>

      {/* Controls */}
      <button aria-label="Previous" onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#4b0e55] rounded-full w-12 h-12 grid place-items-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
        ‹
      </button>
      <button aria-label="Next" onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#4b0e55] rounded-full w-12 h-12 grid place-items-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-[#4b0e55] w-8 shadow-lg' : 'bg-white/80 w-3 hover:bg-white'}`}
          />
        ))}
      </div>
    </div>
  )
}


