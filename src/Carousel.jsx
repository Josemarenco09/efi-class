import { useCallback, useEffect, useRef, useState } from 'react'
import { getCarousel } from './carousels'
import './Carousel.css'

function Chevron({ dir }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d={dir === 'left' ? 'M19 12H5M11 6l-6 6 6 6' : 'M5 12h14M13 6l6 6-6 6'} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * Carrusel de fotos. `name` es la clave definida en carousels.js.
 * `wide` muestra 2 fotos a la vez en escritorio (para carruseles de ancho completo).
 */
export default function Carousel({ name, wide = false }) {
  const { label, title, alt, images } = getCarousel(name)
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [atEnd, setAtEnd] = useState(false)

  const step = useCallback(() => {
    const track = trackRef.current
    const slide = track?.children[0]
    if (!slide) return 0
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    return slide.offsetWidth + gap
  }, [])

  const update = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const end = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
    setAtEnd(end)
    setIndex(end ? images.length - 1 : Math.round(track.scrollLeft / (step() || 1)))
  }, [images.length, step])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [update])

  const goTo = (i) => trackRef.current?.scrollTo({ left: i * step(), behavior: 'smooth' })
  const move = (dir) => trackRef.current?.scrollBy({ left: dir * step(), behavior: 'smooth' })

  if (images.length === 0) return null

  return (
    <section
      className={`carousel${wide ? ' carousel--wide' : ''}`}
      aria-roledescription="carrusel"
      aria-label={title}
    >
      <header className="carousel__head">
        <div>
          <p className="carousel__label">{label}</p>
          <h3 className="carousel__title">{title}</h3>
        </div>
        <div className="carousel__controls">
          <span className="carousel__count" aria-live="polite">
            {String(index + 1).padStart(2, '0')} <i>/</i> {String(images.length).padStart(2, '0')}
          </span>
          <button type="button" className="carousel__btn" onClick={() => move(-1)} disabled={index === 0} aria-label="Foto anterior">
            <Chevron dir="left" />
          </button>
          <button type="button" className="carousel__btn" onClick={() => move(1)} disabled={atEnd} aria-label="Foto siguiente">
            <Chevron dir="right" />
          </button>
        </div>
      </header>

      <div
        className="carousel__track"
        ref={trackRef}
        onScroll={update}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') move(1)
          if (e.key === 'ArrowLeft') move(-1)
        }}
      >
        {images.map((src, i) => (
          <figure className="carousel__slide" key={src}>
            <img src={src} alt={`${alt} (${i + 1} de ${images.length})`} loading="lazy" draggable="false" />
          </figure>
        ))}
      </div>

      <div className="carousel__dots" role="tablist" aria-label="Seleccionar foto">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Ir a la foto ${i + 1}`}
            className={`carousel__dot${i === index ? ' is-active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  )
}
