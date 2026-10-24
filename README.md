# EFI Training · Landing del curso de inyección electrónica

Página de una sola vista (React 19 + Vite) para promocionar el curso de inyección electrónica
en motocicletas. Estilo oscuro con acento amarillo.

## Cómo ejecutarlo

```bash
npm install      # solo la primera vez (o si aparece "vite: command not found")
npm run dev      # servidor de desarrollo → http://localhost:5173
npm run build    # genera la versión de producción en /dist
npm run preview  # prueba la versión de producción
npm run lint     # revisa el código con oxlint
```

## Estructura

```
src/
├── App.jsx            Todas las secciones de la página (Header, Hero, Temario, Método, ...)
├── App.css            Estilos generales y variables de color (:root)
├── Carousel.jsx       Componente de carrusel de fotos (reutilizable)
├── Carousel.css       Estilos de los carruseles
├── carousels.js       Configuración de cada carrusel (títulos, carpeta de fotos)
└── assets/
    ├── img/           Fotos fijas de la página (hero, pizarra, dominó, ...)
    └── clases/        Fotos de los carruseles, una carpeta por carrusel
        ├── class/       → carrusel "Así se vive la clase"
        ├── domino/      → carrusel "Aprender jugando dominó"
        ├── evaluacion/  → carrusel "Evaluación interactiva"
        └── test/        → carrusel "Pruebas en el taller"
```

Orden de las secciones en la página: Header → Hero → Ticker → Temario → **Método** (+ carrusel
*clase*) → **Dinámicas** (carruseles *domino* y *evaluacion*) → **Herramientas** (+ carrusel
*test*) → Reserva → Footer.

## Carruseles

Cada carrusel muestra **todas las fotos de su carpeta**, en orden alfabético (`01.jpg`, `02.jpg`, ...).

### Añadir, quitar o reordenar fotos
1. Copia la foto a la carpeta del carrusel, por ejemplo `src/assets/clases/domino/09.jpg`.
2. El orden lo define el nombre del archivo: `01`, `02`, `03`... Renombra para reordenar.
3. Para quitar una foto, bórrala de la carpeta. No hay que tocar código.

Formatos aceptados: `.jpg`, `.jpeg`, `.png`, `.webp`. Recomendado: fotos horizontales (4:3),
de menos de 400 KB cada una para que la página cargue rápido.

### Cambiar títulos y textos
Edita `src/carousels.js`. Cada carrusel tiene:

| Campo    | Qué es                                               |
|----------|------------------------------------------------------|
| `folder` | Carpeta dentro de `src/assets/clases/`               |
| `label`  | Texto pequeño amarillo sobre el título               |
| `title`  | Título del carrusel                                  |
| `alt`    | Descripción de la foto para accesibilidad / buscador |

### Crear un carrusel nuevo
1. Crea la carpeta con fotos: `src/assets/clases/mi-actividad/`.
2. En `src/carousels.js`, dentro de `CAROUSELS`, añade:
   ```js
   miActividad: {
     folder: 'mi-actividad',
     label: 'Dinámica · Mi actividad',
     title: 'Título del carrusel',
     alt: 'Descripción de las fotos',
   },
   ```
3. En `src/App.jsx`, pon `<Carousel name="miActividad" />` donde quieras que aparezca.

### Mover un carrusel de lugar
En `src/App.jsx` busca `<Carousel name="..."` y muévelo a otra sección. Hoy están en:

| Carrusel     | Dónde está                                         | Función en `App.jsx` |
|--------------|----------------------------------------------------|----------------------|
| `clase`      | Al final de la sección **Método**                  | `Method()`           |
| `domino`     | Sección **Dinámicas**, columna izquierda           | `Dynamics()`         |
| `evaluacion` | Sección **Dinámicas**, columna derecha             | `Dynamics()`         |
| `test`       | Al final de la sección **Herramientas**            | `Tools()`            |

La propiedad `wide` (`<Carousel name="clase" wide />`) muestra 2 fotos a la vez en pantallas
grandes; úsala en carruseles de ancho completo. Sin `wide`, muestra 1 foto a la vez (ideal para
columnas). En celular siempre se ve 1 foto y se desliza con el dedo.

## Estilos y colores

Los colores y tipografías están en `:root` al inicio de `src/App.css`:

| Variable      | Uso                                |
|---------------|------------------------------------|
| `--bg`, `--bg-2`, `--panel` | Fondos oscuros       |
| `--yellow`    | Color de acento (botones, títulos) |
| `--text`, `--muted` | Texto principal y secundario |
| `--line`, `--line-strong` | Bordes finos           |

Tipografías: *Anton* (títulos), *Archivo* (texto), *JetBrains Mono* (etiquetas).

## Dónde editar cada cosa

| Quiero cambiar...                    | Archivo / lugar                                   |
|--------------------------------------|---------------------------------------------------|
| Número de WhatsApp y mensaje         | `PHONE` y `WHATSAPP` al inicio de `src/App.jsx`   |
| Módulos del temario                  | Lista `MODULES` en `src/App.jsx`                  |
| Palabras que corren en la cinta      | Lista `TICKER` en `src/App.jsx`                   |
| Textos de Aprende / Practica / Aplica| Sección `Method()` en `src/App.jsx`               |
| Fotos fijas (hero, pizarra, ...)     | `src/assets/img/` e imports al inicio de `App.jsx`|
| Menú superior                        | Función `Header()` en `src/App.jsx`               |
