## 06. Convenciones y Buenas Prácticas

### Código
- Nombres descriptivos (evitar abreviaciones crípticas).
- Utilizar helpers de `src/utils/helpers.ts` en lugar de duplicar lógica.
- Mantener componentes pequeños y reutilizables (Atomic Design).

### Estilos
- Estilos globales en `src/styles/global.css`.
- Estilos locales dentro del bloque `<style>` de cada `.astro` cuando aplique.

### Tipado
- Preferir TypeScript en utilidades y configuración.
- Evitar `any` y `as` innecesarios.

### Estructura de datos
- Centralizar reglas en `app.config.ts`.
- Acceder a `localStorage` mediante utilidades (`getStorageData`, `setStorageData`).

### Commits
- Mensajes claros: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`.

### Rendimiento
- Evitar cargar todo el catálogo en memoria si se implementan nuevas vistas: considerar paginación.
- Usar `debounce`/`throttle` en entradas de búsqueda intensivas.

### Seguridad
- No exponer datos personales reales.
- Revisar que el número WhatsApp productivo esté sólo en despliegues productivos.

