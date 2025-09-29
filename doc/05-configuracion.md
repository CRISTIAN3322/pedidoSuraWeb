## 05. Configuración

### Astro (`astro.config.mjs`)

```js
// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://example.com",
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

### Sistema de Diseño

El proyecto utiliza un sistema de diseño basado en Atomic Design con una paleta de colores personalizada:

**Paleta de Colores**:

- **Primario**: Jade (#00a878ff) - Verde jade principal
- **Fondo**: Bone White (#f5f5f0) - Blanco suave y cálido
- **Secundario**: Earth Yellow (#f3c178ff) - Amarillo tierra
- **Accento**: Tomato (#fe5e41ff) - Naranja vibrante
- **Texto**: Smoky Black (#0b0500ff) - Negro ahumado

**Variables CSS** (`src/styles/atoms/variables.css`):

- Sistema completo de colores, tipografía, espaciado y sombras
- Breakpoints responsive y transiciones
- Estados de componentes y accesibilidad

### Página de inicio y comandos

- `npm run dev` levanta el servidor accesible en red local (`--host`).
- Vista local por defecto: `http://localhost:4321`.
