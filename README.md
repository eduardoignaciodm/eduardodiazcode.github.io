# ED·DATA — Portafolio de Eduardo Díaz

Portafolio personal de **Eduardo Ignacio Díaz Mollocondo**, Analista de Datos en transición hacia Data Engineering.

🔗 **Demo en vivo:** `https://eduardodiazcode.github.io/`

## Sobre el diseño

Estética inspirada en el lenguaje visual automotriz de alto rendimiento (fondo negro absoluto, tipografía condensada en mayúsculas, acentos rojos, "ficha técnica" en vez de bio genérica) adaptada al mundo de datos: el motor es Python, la transmisión es PostgreSQL, el tablero es Power BI.

No se usó ningún asset, logo, imagen ni texto de ninguna marca — solo el lenguaje de diseño (paleta, tipografía, ritmo de animación) reinterpretado con contenido 100% propio.

## Estructura del proyecto

```
portfolio/
├── index.html              # Estructura y contenido de todas las secciones
├── assets/
│   ├── css/
│   │   └── style.css       # Sistema de diseño completo (tokens, layout, animaciones)
│   ├── js/
│   │   └── main.js         # Loader, scroll reveal, navbar, animación del tacómetro
│   └── img/
│       └── profile.jpeg    # ⚠️ Debes colocar aquí tu foto de perfil
└── README.md
```

## Cómo publicarlo en GitLab Pages

1. **Coloca tu foto real**: copia tu `profile.jpeg` actual (el que ya tienes en GitLab) dentro de `assets/img/profile.jpeg`, reemplazando el placeholder.

2. **Sube los cambios a tu repositorio existente** (`gitlab.com/eduardodiazcode/eduardodiazcode.gitlab.io` o el que uses para tu sitio):

   ```bash
   cd ruta/donde/tienes/el/proyecto

   git add .
   git commit -m "Rediseño v2: estética automotriz aplicada a perfil de datos"
   git push origin main
   ```

   Si es un repositorio nuevo (primera vez):
   ```bash
   cd ruta/donde/tienes/el/proyecto

   git init
   git add .
   git commit -m "Primer commit: portafolio v2"
   git branch -M main
   git remote add origin https://gitlab.com/eduardodiazcode/<nombre-de-tu-repo>.git
   git push -u origin main
   ```

3. **GitLab CI/CD hace el resto automáticamente**: el archivo `.gitlab-ci.yml` ya incluido dispara el job `pages` en cada push a `main`. Puedes ver el progreso en tu repo → **Build** → **Pipelines**.

4. **Verifica el deploy**: cuando el pipeline termine (ícono verde ✓), tu sitio actualizado estará en `https://eduardodiazcode.gitlab.io/` en 1-2 minutos.

   > ⚠️ Importante: para que el dominio quede como `usuario.gitlab.io` (sin subcarpeta), el repositorio debe llamarse exactamente `eduardodiazcode.gitlab.io` y el proyecto debe estar en tu namespace personal, no en un grupo.

5. **Verifica los enlaces**: en `index.html`, sección de contacto, confirma que el email, LinkedIn y GitLab apuntan donde quieres.

## Personalización rápida

| Qué cambiar | Dónde |
|---|---|
| Texto de cada sección | `index.html` (todo está comentado por bloques `<!-- ============ SECCIÓN ============ -->`) |
| Colores (rojo, negro, grises) | `assets/css/style.css`, bloque `:root` al inicio |
| % del tacómetro en "Ficha técnica" | `assets/js/main.js`, constante `TARGET_PERCENT` |
| Velocidad del ticker superior | `assets/css/style.css`, regla `.ticker-track` (propiedad `animation`) |
| Proyectos del garage | `index.html`, sección `#projects` — duplica un `<article class="project-card">` para añadir uno nuevo |

## Stack técnico del sitio

- HTML5 semántico
- CSS puro (sin frameworks) con custom properties
- JavaScript vanilla (Intersection Observer para animaciones de scroll)
- Tipografías: [Anton](https://fonts.google.com/specimen/Anton), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) vía Google Fonts

Sin dependencias, sin build step. Funciona abriendo `index.html` directamente o vía cualquier hosting estático.

---

📫 Contacto: eduardoignaciodm@gmail.com · [LinkedIn](https://www.linkedin.com/in/eduardodiazdev) · [GitLab](https://gitlab.com/eduardodiazcode)
