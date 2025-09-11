## 02. Arquitectura

### Visión general
Aplicación web con Astro como framework de meta-frontend y React para interactividad específica. Se organiza por Atomic Design (atoms, molecules, organisms) y páginas en `src/pages`.

### Capas
- UI: componentes `.astro` y React (`.jsx`) en `src/components/**`.
- Páginas: rutas basadas en archivos en `src/pages`.
- Layout: `src/layouts/BaseLayout.astro` define `<head>`, navegación y estilos globales.
- Datos: `src/data/*.json` para productos, clientes, cartera y cupo.
- Configuración: `src/config/app.config.ts` centraliza parámetros de negocio y UI.
- Utilidades: `src/utils/helpers.ts` con helpers para formato, debounce, throttle y storage.

### Rutas principales
- `/` → `src/pages/index.astro`: catálogo con `ProductosSelector` y `BloqueoHorario`.
- `/principal` → `src/pages/principal.astro`: selección de cliente.
- `/carrito` → `src/pages/carrito.astro`: carrito, totales y envío por WhatsApp.

### Componentes clave
- `organisms/ProductosSelector.astro`: catálogo, filtros y agregar al carrito.
- `organisms/ClienteSelector.astro` y `ClienteSelectorReact.jsx`: búsqueda/selección de cliente.
- `organisms/BloqueoHorario.astro`: bloqueo de UI según horario.
- `molecules/CarteraCliente.astro` y `CupoCliente.astro`: visualización financiera del cliente.
- `molecules/Navigation.astro`: barra superior con navegación.

### Estado y almacenamiento
- Persistencia en `localStorage` con claves definidas en `APP_CONFIG.storage` (`cartKey`, `clientKey`, `settingsKey`).
- Carrito se renderiza en `/carrito` leyendo `cartItems` y manipulado con botones en tabla.

### Integración externa
- WhatsApp: se construye un enlace `https://wa.me/<numero>?text=<mensaje>` usando datos del carrito y del cliente. El número está en `APP_CONFIG.whatsapp.number`.

### Seguridad y privacidad
- No hay backend ni datos sensibles en este repositorio. Evitar subir datos personales reales a `src/data/`.

### Build y despliegue
- Astro 5, integración `@astrojs/react`. `astro.config.mjs` define `integrations` y `site`.

