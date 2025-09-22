## 05. Configuración

### Astro (`astro.config.mjs`)
```js
// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://example.com'
});
```
- Integra React para componentes interactivos.
- `site` debe apuntar al dominio real en producción. Para este repo, el sitio público es `https://sura-pedidos-web.vercel.app`.

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

### Página de inicio y comandos
- `npm run dev` levanta el servidor accesible en red local (`--host`).
- Vista local por defecto: `http://localhost:4321`.

