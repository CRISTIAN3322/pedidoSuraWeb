## 01. Guía de Inicio

### Prerrequisitos
- Node.js 18 o superior
- npm 9+ (o yarn/pnpm si prefieres)

### Instalación
```bash
git clone https://github.com/CRISTIAN3322/suraPedidosWeb.git
cd suraPedidosWeb
npm install
```

### Scripts disponibles
```bash
npm run dev        # Servidor de desarrollo (por defecto en http://localhost:4321)
npm run build      # Construcción para producción
npm run preview    # Vista previa de la build
npm run lint       # Revisión estática con Astro Check
npm run type-check # Verificación de tipos TypeScript
npm run clean      # Limpieza de artefactos generados
npm start          # build + preview
```

### Variables de entorno
Actualmente el proyecto no requiere variables sensibles. La configuración general está en `src/config/app.config.ts`.

### Requisitos del sistema
- Memoria: >= 4GB recomendada (el catálogo de imágenes es grande)
- Almacenamiento: >= 1GB (por `public/assets/img_catalogo` y `products.json`)

### Estructura básica de ejecución
1. `npm run dev`
2. Abrir `http://localhost:4321`
3. Flujos principales:
   - Catálogo de productos (`/`)
   - Selección de cliente (`/principal`)
   - Carrito de compras y envío por WhatsApp (`/carrito`)

### Despliegue
- Soportado en plataformas estáticas (ej. Vercel). Usa `npm run build` y sirve el resultado de `dist/`.

### Solución de problemas
- Puerto ocupado: cambia el puerto usando `astro dev --host --port 4322`.
- Tipos TS: ejecuta `npm run type-check`.
- Caché Astro: `npm run clean` y reinstala dependencias.

