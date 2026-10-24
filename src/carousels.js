// Configuración de los carruseles de fotos.
// Para cambiar textos, orden o añadir fotos, ver el README.md (sección "Carruseles").
//
// Las fotos se cargan automáticamente desde src/assets/clases/<carpeta>/
// y se muestran en orden alfabético (01.jpg, 02.jpg, ...).

const modules = import.meta.glob('./assets/clases/*/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

// Devuelve las URLs de las fotos de una carpeta, ordenadas por nombre.
function photosOf(folder) {
  return Object.keys(modules)
    .filter((path) => path.startsWith(`./assets/clases/${folder}/`))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((path) => modules[path])
}

export const CAROUSELS = {
  // Fotos de la clase en el aula / taller
  clase: {
    folder: 'class',
    label: 'En clase',
    title: 'Así se vive la clase',
    alt: 'Estudiantes del curso durante la clase',
  },
  // Dinámica del dominó
  domino: {
    folder: 'domino',
    label: 'Dinámica · Dominó',
    title: 'Aprender jugando dominó',
    alt: 'Estudiantes jugando dominó para repasar conceptos',
  },
  // Evaluación interactiva en celular
  evaluacion: {
    folder: 'evaluacion',
    label: 'Dinámica · Evaluación',
    title: 'Evaluación interactiva',
    alt: 'Estudiantes respondiendo la evaluación desde el celular',
  },
  // Pruebas en el taller con los equipos
  test: {
    folder: 'test',
    label: 'Práctica · Test',
    title: 'Pruebas en el taller',
    alt: 'Estudiantes haciendo pruebas con los equipos en el taller',
  },
}

export function getCarousel(key) {
  const c = CAROUSELS[key]
  return { ...c, images: photosOf(c.folder) }
}
