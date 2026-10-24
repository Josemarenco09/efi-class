import './App.css'
import Carousel from './Carousel'
import multimetro from './assets/img/multimetro.jpg'
import escaner from './assets/img/escaner.jpg'
import pizarra from './assets/img/pizarra.jpg'
import domino from './assets/img/domino.jpg'

const PHONE = '318 193 9942'
const WHATSAPP =
  'https://wa.me/573181939942?text=' +
  encodeURIComponent('Hola, quiero información sobre el curso de inyección electrónica.')

const MODULES = [
  {
    title: 'La ECU y el sistema EFI',
    desc: 'Cómo piensa el computador de la moto y cómo se organiza todo el sistema de inyección.',
    topics: ['ECU', 'Funcionamiento del sistema EFI', 'Dispositivos de entrada y salida'],
    icon: 'ecu',
  },
  {
    title: 'Sensores',
    desc: 'Qué mide cada sensor, qué señal entrega y cómo saber si está fallando.',
    topics: ['MAP', 'TPS', 'CKP', 'O₂', 'Sensores de temperatura'],
    icon: 'sensor',
  },
  {
    title: 'Señales eléctricas',
    desc: 'El lenguaje con el que se comunican sensores, actuadores y la ECU.',
    topics: ['Analógicas y digitales', 'Señal PWM', 'Frecuencia', 'Ciclo de trabajo'],
    icon: 'wave',
  },
  {
    title: 'Actuadores',
    desc: 'Los componentes que ejecutan las órdenes de la ECU y cómo comprobarlos.',
    topics: ['Cuerpo de aceleración', 'IAC', 'Inyectores', 'Actuadores'],
    icon: 'throttle',
  },
  {
    title: 'Redes y comunicación',
    desc: 'Cómo hablan entre sí los módulos de la motocicleta y cómo leer esa conversación.',
    topics: ['Protocolo K-Line', 'CAN Bus', 'Comunicación entre módulos'],
    icon: 'network',
  },
  {
    title: 'Diagnóstico en motocicleta',
    desc: 'Uso real de los equipos de medición para encontrar fallas con método.',
    topics: ['Multímetro', 'Osciloscopio', 'Escáner', 'Pruebas y diagnóstico'],
    icon: 'scanner',
  },
]

const TICKER = ['ECU', 'MAP', 'TPS', 'CKP', 'O₂', 'PWM', 'IAC', 'K-Line', 'CAN Bus', 'Inyectores', 'Osciloscopio', 'Escáner']

function Icon({ name }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }
  switch (name) {
    case 'ecu':
      return (
        <svg {...common}>
          <rect x="6" y="6" width="12" height="12" rx="1.5" />
          <path d="M9 2v4M12 2v4M15 2v4M9 18v4M12 18v4M15 18v4M2 9h4M2 12h4M2 15h4M18 9h4M18 12h4M18 15h4" />
          <path d="M9.5 10h5M9.5 12h3M9.5 14h5" />
        </svg>
      )
    case 'sensor':
      return (
        <svg {...common}>
          <path d="M8 14.5V4a2 2 0 1 1 4 0v10.5a3.5 3.5 0 1 1-4 0Z" />
          <path d="M10 9v7" />
          <path d="M15 5h5M15 9h3M15 13h5" />
        </svg>
      )
    case 'wave':
      return (
        <svg {...common}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M4 12h3l1.5-4 2 8 2-8 2 8 1.5-4h4" />
        </svg>
      )
    case 'throttle':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="6.5" />
          <path d="M7.5 16.5 16.5 7.5" />
          <path d="M2 9v6M22 9v6M2 12h3.5M18.5 12H22" />
        </svg>
      )
    case 'network':
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2.2" />
          <circle cx="5" cy="12" r="2.2" />
          <circle cx="19" cy="12" r="2.2" />
          <circle cx="12" cy="19" r="2.2" />
          <path d="M10.4 6.6 6.6 10.4M13.6 6.6l3.8 3.8M6.6 13.6l3.8 3.8M17.4 13.6l-3.8 3.8M7.2 12h9.6" />
        </svg>
      )
    case 'scanner':
      return (
        <svg {...common}>
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <rect x="7.5" y="4.5" width="9" height="7" rx="1" />
          <path d="M8.5 9.5l1.5-2 1.5 1.5 2-2.5 1.5 2" />
          <circle cx="9" cy="16" r="1" />
          <circle cx="15" cy="16" r="1" />
          <path d="M11 19h2" />
        </svg>
      )
    default:
      return null
  }
}

function EngineMark({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M7 15h4l3-3h9v3h4l3 3h3v9h-3l-3 3H12l-5-5z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path d="M14 9h8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path
        d="M20.5 16.5 17 22h4.5l-2 4"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  )
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#inicio" className="brand" aria-label="EFI Training, inicio">
          <span className="brand__mark">
            <EngineMark size={30} />
          </span>
          <span className="brand__name">
            EFI <span>Training</span>
          </span>
        </a>
        <nav className="nav" aria-label="Principal">
          <a href="#temario">Temario</a>
          <a href="#metodo">Método</a>
          <a href="#herramientas">Herramientas</a>
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn--small">
          Reservar cupo
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="eyebrow__dot" /> Motocicletas · Sistema EFI
          </p>
          <h1 className="hero__title">
            Curso de inyección <span className="hl">electrónica</span>
          </h1>
          <p className="hero__lead">
            Entiende cómo funciona la inyección de tu moto, desde la ECU hasta el diagnóstico con
            escáner. Un curso práctico, explicado de una manera diferente y pensado para el taller.
          </p>
          <div className="hero__actions">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn">
              <WhatsAppIcon /> Reserva tu cupo
            </a>
            <a href="#temario" className="btn btn--ghost">
              Ver temario <Arrow />
            </a>
          </div>
          <ol className="steps">
            <li>Aprende</li>
            <li>Practica</li>
            <li>Aplica</li>
          </ol>
        </div>

        <div className="hero__visual">
          <figure className="frame">
            <img src={multimetro} alt="Medición con multímetro en el cableado de una motocicleta" />
            <span className="frame__corner frame__corner--tl" />
            <span className="frame__corner frame__corner--br" />
            <figcaption className="readout">
              <span className="readout__label">V DC</span>
              <span className="readout__value">2.67</span>
              <span className="readout__tag">Señal TPS</span>
            </figcaption>
          </figure>
          <div className="hex-inset">
            <img src={escaner} alt="Escáner automotriz mostrando una forma de onda" />
          </div>
          <svg className="hero__wave" viewBox="0 0 600 80" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 60 H60 V20 H110 V60 H160 V20 H210 V60 H260 V20 H310 V60 H360 V20 H410 V60 H460 V20 H510 V60 H600" />
          </svg>
        </div>
      </div>
    </section>
  )
}

function Ticker() {
  const items = [...TICKER, ...TICKER]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {items.map((t, i) => (
          <span key={i}>
            {t}
            <i>/</i>
          </span>
        ))}
      </div>
    </div>
  )
}

function Syllabus() {
  return (
    <section className="section" id="temario">
      <div className="container">
        <div className="section__head">
          <p className="kicker">Temario</p>
          <h2 className="section__title">
            Lo que vas a <span className="hl-text">aprender</span>
          </h2>
          <p className="section__intro">
            Seis módulos que recorren el sistema de inyección completo, en el mismo orden en que lo
            vas a encontrar en una moto real.
          </p>
        </div>

        <ol className="modules">
          {MODULES.map((m) => (
            <li className="module" key={m.title}>
              <span className="module__icon">
                <Icon name={m.icon} />
              </span>
              <div className="module__body">
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
              <ul className="module__topics">
                {m.topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Method() {
  return (
    <section className="section section--alt" id="metodo">
      <div className="stripes" aria-hidden="true" />
      <div className="container method">
        <div className="method__copy">
          <p className="kicker">Nuestro método</p>
          <h2 className="section__title">
            La inyección electrónica, aprendida de una manera{' '}
            <span className="hl-text">diferente</span>
          </h2>
          <p className="section__intro">
            Nada de memorizar diapositivas. Los conceptos se construyen en pizarra, se refuerzan con
            dinámicas y se comprueban con la moto y los equipos en la mano.
          </p>

          <div className="pillars">
            <div className="pillar">
              <h3>Aprende</h3>
              <p>Entiende la lógica del sistema: qué mide cada sensor y qué decide la ECU.</p>
            </div>
            <div className="pillar">
              <h3>Practica</h3>
              <p>Mide, compara valores y lee señales reales con multímetro, osciloscopio y escáner.</p>
            </div>
            <div className="pillar">
              <h3>Aplica</h3>
              <p>Lleva el diagnóstico al taller con un procedimiento claro y ordenado.</p>
            </div>
          </div>
        </div>

        <div className="method__gallery">
          <figure className="photo photo--a">
            <img src={pizarra} alt="Pizarra con el esquema del sensor de temperatura conectado a la ECU" />
            <figcaption>
              Del sensor a la ECU, paso a paso en pizarra
            </figcaption>
          </figure>
          <figure className="photo photo--b">
            <img src={domino} alt="Dinámica de aprendizaje con fichas de dominó" />
            <figcaption>
              Dinámicas con fichas para fijar conceptos
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="container method__carousel">
        <Carousel name="clase" wide />
      </div>
    </section>
  )
}

function Dynamics() {
  return (
    <section className="section" id="dinamicas">
      <div className="container">
        <div className="dynamics__head">
          <p className="kicker">Dinámicas</p>
          <h2 className="section__title">
            Se aprende <span className="hl-text">jugando</span>
          </h2>
          <p className="section__intro">
            Juegos y evaluaciones interactivas para repasar lo visto y fijar cada concepto antes de
            llegar a la moto.
          </p>
        </div>
        <div className="dynamics__grid">
          <Carousel name="domino" />
          <Carousel name="evaluacion" />
        </div>
      </div>
    </section>
  )
}

function Tools() {
  const tools = [
    {
      name: 'Multímetro',
      spec: 'V · Ω · A',
      text: 'Voltajes de referencia, continuidad y resistencia de sensores y actuadores.',
    },
    {
      name: 'Osciloscopio',
      spec: 'Hz · % · ms',
      text: 'Visualiza la señal real: frecuencia, PWM y ciclo de trabajo de cada componente.',
    },
    {
      name: 'Escáner',
      spec: 'DTC · Live data',
      text: 'Lectura de códigos de falla y datos en vivo por K-Line y CAN Bus.',
    },
  ]
  return (
    <section className="section" id="herramientas">
      <div className="container tools">
        <div className="tools__media">
          <img src={escaner} alt="Escáner de diagnóstico en uso" />
          <div className="tools__badge">
            <span>Prácticas</span>
            <strong>en motocicleta</strong>
          </div>
        </div>
        <div className="tools__copy">
          <p className="kicker">Herramientas</p>
          <h2 className="section__title">
            Diagnóstico con los <span className="hl-text">equipos reales</span>
          </h2>
          <p className="section__intro">
            Aprendes a usar los tres equipos que necesitas para encontrar cualquier falla en el
            sistema de inyección.
          </p>
          <ul className="tool-list">
            {tools.map((t) => (
              <li key={t.name}>
                <div className="tool-list__head">
                  <h3>{t.name}</h3>
                  <span>{t.spec}</span>
                </div>
                <p>{t.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container tools__carousel">
        <Carousel name="test" wide />
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="cta" id="reserva">
      <div className="container cta__inner">
        <div>
          <p className="cta__kicker">Cupos limitados</p>
          <h2 className="cta__title">¡Reserva tu cupo!</h2>
          <p className="cta__text">
            Escríbenos por WhatsApp y te contamos fechas, horarios y todo lo que necesitas para
            empezar.
          </p>
        </div>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="cta__phone">
          <span className="cta__phone-icon">
            <WhatsAppIcon />
          </span>
          <span className="cta__phone-text">
            <small>Escríbenos al</small>
            {PHONE}
          </span>
          <Arrow />
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#inicio" className="brand">
          <span className="brand__mark">
            <EngineMark size={26} />
          </span>
          <span className="brand__name">
            EFI <span>Training</span>
          </span>
        </a>
        <p>Curso de inyección electrónica para motocicletas</p>
        <p className="footer__copy">© {new Date().getFullYear()} EFI Training</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Syllabus />
        <Method />
        <Dynamics />
        <Tools />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
