## 03. Componentes

Estructurados según Atomic Design. A continuación, un mapa funcional de los principales.

### Layouts
- `layouts/BaseLayout.astro`: layout base. Inyecta `global.css`, SEO, `Navigation` y `<slot/>`.

### Molecules
- `molecules/Navigation.astro`: navegación principal.
- `molecules/CarteraCliente.astro`: muestra cartera, cupo y estado del cliente.
- `molecules/CupoCliente.astro`: desglosa cupo disponible.

### Organisms
- `organisms/ProductosSelector.astro`:
  - Fuente: `src/data/products.json` (catálogo grande).
  - Render: tarjetas/lista de productos, buscador y filtros.
  - Acción: agrega al carrito usando `localStorage.cartItems`.
- `organisms/ClienteSelector.astro` y `ClienteSelectorReact.jsx`:
  - Fuente: `src/data/clientes.json`, `cartera.json`, `cupo.json`.
  - Acción: persiste `datosCliente` en `localStorage` y redirige a `/carrito` con query params.
- `organisms/BloqueoHorario.astro`:
  - Lógica: lee horario de `APP_CONFIG.schedule` o `helpers.isBusinessHours()`.
  - Comportamiento: bloquea UI fuera de horario y muestra tiempo restante.

### Props y convenciones
- Props opcionales de `BaseLayout`:
  - `title`, `description`, `keywords`, `showNavigation`.

### Estilos
- Global: `src/styles/global.css`.
- Componentes: estilos locales dentro de cada `.astro` según necesidad.

