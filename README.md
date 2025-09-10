# 🛍️ Sura Pedidos Web v2.0

Sistema web moderno para gestión de pedidos desarrollado con Astro y React.

## ✨ Características Principales

### 🎯 Funcionalidades Core
- **Catálogo de Productos**: Búsqueda avanzada y filtros por proveedor
- **Gestión de Clientes**: Selección con información de cupo y cartera
- **Carrito Inteligente**: Persistencia local y validaciones
- **Sistema de Bloqueo**: Control de horarios de atención
- **Integración WhatsApp**: Envío automático de pedidos

### 🎨 Mejoras de UI/UX
- **Diseño Moderno**: Interfaz limpia y profesional
- **Responsive Design**: Optimizado para móviles y tablets
- **Navegación Intuitiva**: Menú sticky con contador de carrito
- **Animaciones Suaves**: Transiciones y efectos visuales
- **Tema Consistente**: Variables CSS y componentes reutilizables

### ⚡ Optimizaciones Técnicas
- **Arquitectura Modular**: Componentes organizados por atomic design
- **TypeScript**: Tipado estático para mayor robustez
- **Configuración Centralizada**: Archivos de configuración y utilidades
- **Performance**: Lazy loading y optimizaciones de carga
- **SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Tecnologías

- **[Astro](https://astro.build/)** - Framework web moderno
- **[React](https://reactjs.org/)** - Componentes interactivos
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **CSS Variables** - Sistema de diseño consistente
- **LocalStorage API** - Persistencia de datos
- **WhatsApp API** - Integración de mensajería

## 📁 Estructura del Proyecto
```bash
suraPedidosWeb/
├── src/
│   ├── components/
│   │   ├── atoms/           # Componentes básicos
│   │   ├── molecules/       # Componentes compuestos
│   │   │   ├── Navigation.astro
│   │   │   ├── CarteraCliente.astro
│   │   │   └── CupoCliente.astro
│   │   └── organisms/       # Componentes complejos
│   │       ├── ProductosSelector.astro
│   │       ├── ClienteSelector.astro
│   │       ├── ClienteSelectorReact.jsx
│   │       └── BloqueoHorario.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro      # Catálogo de productos
│   │   ├── principal.astro  # Selección de clientes
│   │   └── carrito.astro    # Carrito de compras
│   ├── data/               # Archivos JSON de datos
│   │   ├── products.json
│   │   ├── clientes.json
│   │   ├── cartera.json
│   │   └── cupo.json
│   ├── styles/
│   │   └── global.css      # Estilos globales
│   ├── config/
│   │   └── app.config.ts   # Configuración de la app
│   └── utils/
│       └── helpers.ts      # Utilidades generales
├── public/
│   └── assets/
│       └── img_catalogo/   # Imágenes de productos
├── astro.config.mjs
├── package.json
└── README.md
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18.0.0 o superior
- npm o yarn

### Instalación

1. **Clona el repositorio:**
```bash
git clone https://github.com/CRISTIAN3322/suraPedidosWeb.git
cd suraPedidosWeb
```

2. **Instala las dependencias:**
```bash
npm install
```

3. **Inicia el servidor de desarrollo:**
```bash
npm run dev
```

4. **Abre tu navegador en:**
```
http://localhost:4321
```

### Scripts Disponibles

```bash
npm run dev        # Servidor de desarrollo
npm run build      # Construir para producción
npm run preview    # Vista previa de la build
npm run lint       # Verificar código
npm run type-check # Verificar tipos TypeScript
npm run clean      # Limpiar archivos generados
npm start          # Build y preview
```

## 📝 Componentes Principales

### Pages

#### index.astro
Página principal que muestra el catálogo de productos disponibles. Incluye:
- Encabezado con título
- Fecha de última actualización
- Acceso al carrito
- Selector de productos

#### carrito.astro
Página del carrito de compras donde se pueden gestionar los productos seleccionados.

### Components

#### ProductosSelector.astro
Componente que maneja la visualización y selección de productos disponibles.

## 🎨 Estilos

El proyecto utiliza CSS modular con estilos específicos para cada componente y estilos globales en `global.css`.

## Despliegue Vercel
[Vercel](https://sura-pedidos-web.vercel.app)

## 🤝 Contribución

Si deseas contribuir al proyecto:

1. Haz un Fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`)
3. Realiza tus cambios
4. Haz commit de tus cambios (`git commit -m 'Agrega nueva característica'`)
5. Haz push a la rama (`git push origin feature/nueva-caracteristica`)
6. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia [ESPECIFICAR_LICENCIA]

## ✉️ Contacto

[CCPOVEDA] - [ccpoveda.programador@gmail.com]