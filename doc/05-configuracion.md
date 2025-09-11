## 05. Configuración

### Astro (`astro.config.mjs`)
```js
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://example.com'
});
```
- Integra React para componentes interactivos.
- `site` se debe actualizar al dominio real en producción.

### TypeScript (`tsconfig.json`)
```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```
- Configuración estricta recomendada por Astro.

### Configuración de la app (`src/config/app.config.ts`)
- `schedule`: horario de atención y `timezone`.
- `whatsapp`: número y plantillas de mensaje.
- `currency`: `code`, `locale`, `symbol`.
- `inventory`: reglas de inventario.
- `portfolio`: umbrales de alerta para cartera.
- `ui`: paginación, límites y animaciones.
- `storage`: claves de `localStorage`.

Mantener estos valores como única fuente de verdad para reglas de negocio y UI.

