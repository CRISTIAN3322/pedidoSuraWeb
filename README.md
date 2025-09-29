# 🛍️ Sura Pedidos Web v2.0

Sistema web moderno para gestión de pedidos desarrollado con **Astro**, **React** y **Atomic Design**.

## ✨ Características Principales

### 🎯 Funcionalidades Core

- **Catálogo de Productos**: Búsqueda avanzada y filtros por proveedor
- **Gestión de Clientes**: Selección con información de cupo y cartera
- **Carrito Inteligente**: Persistencia local y validaciones
- **Sistema de Bloqueo**: Control de horarios de atención
- **🔒 Bloqueo por Deudas**: Control automático de clientes con facturas vencidas > 40 días
- **Integración WhatsApp**: Envío automático de pedidos

### 🎨 Mejoras de UI/UX

- **Diseño Moderno**: Interfaz limpia y profesional
- **Responsive Design**: Optimizado para móviles y tablets
- **Navegación Intuitiva**: Menú sticky con contador de carrito
- **Animaciones Suaves**: Transiciones y efectos visuales
- **Tema Consistente**: Variables CSS y componentes reutilizables
- **Atomic Design**: Arquitectura escalable y mantenible

### ⚡ Optimizaciones Técnicas

- **Arquitectura Modular**: Componentes organizados por atomic design (Atoms, Molecules, Organisms, Templates, Pages)
- **TypeScript**: Tipado estático para mayor robustez
- **Configuración Centralizada**: Archivos de configuración y utilidades
- **Performance**: Lazy loading y optimizaciones de carga
- **SEO Optimizado**: Meta tags y estructura semántica
- **Accesibilidad**: Cumple con estándares WCAG 2.1 AA

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
│   │   ├── atoms/              # 🧱 Componentes básicos indivisibles
│   │   │   ├── Button.astro    # Botones reutilizables
│   │   │   ├── Input.astro     # Campos de entrada
│   │   │   ├── StatusBadge.astro # Indicadores de estado
│   │   │   └── Icon.astro      # Iconos estandarizados
│   │   ├── molecules/          # 🔗 Combinaciones de átomos
│   │   │   ├── SearchInput.astro    # Campo de búsqueda
│   │   │   ├── CupoInfo.astro       # Información de cupo
│   │   │   ├── CarteraTable.astro   # Tabla de facturas
│   │   │   ├── ClienteInfo.astro    # Info del cliente
│   │   │   ├── SucursalList.astro   # Lista de sucursales
│   │   │   └── ClienteResults.astro # Resultados de búsqueda
│   │   ├── organisms/          # 🏗️ Secciones funcionales completas
│   │   │   ├── ClienteSelector.astro      # Selector de clientes
│   │   │   ├── ClienteSelectorReact.jsx   # Lógica de selección
│   │   │   ├── ProductosSelector.astro    # Selector de productos
│   │   │   └── BloqueoHorario.astro       # Control de horarios
│   │   ├── templates/          # 📄 Estructuras de página
│   │   │   └── ClienteSelectorTemplate.astro # Plantilla completa
│   │   └── pages/              # 📋 Páginas específicas
│   ├── layouts/
│   │   └── BaseLayout.astro    # Layout base de la aplicación
│   ├── pages/
│   │   ├── index.astro         # Página principal (catálogo)
│   │   ├── producto.astro      # Página de productos
│   │   └── carrito.astro       # Carrito de compras
│   ├── data/                   # 📊 Datos de la aplicación
│   │   ├── products.json       # Catálogo de productos
│   │   ├── clientes.json       # Información de clientes
│   │   ├── cartera.json        # Facturas y deudas
│   │   └── cupo.json          # Cupos de crédito
│   ├── styles/                 # 🎨 Estilos organizados
│   │   ├── global.css          # Estilos globales
│   │   ├── atoms/             # Estilos de átomos
│   │   ├── molecules/         # Estilos de moléculas
│   │   └── organisms/         # Estilos de organismos
│   ├── config/
│   │   └── app.config.ts      # Configuración centralizada
│   ├── hooks/                  # 🪝 Hooks personalizados
│   │   └── useClienteData.js   # Lógica de datos de clientes
│   └── utils/                  # 🛠️ Utilidades y helpers
│       ├── helpers.ts          # Utilidades generales
│       └── atomic-design/      # Lógica de negocio Atomic Design
│           └── deudaUtils.ts   # Utilidades para verificación de deudas
├── public/
│   └── assets/
│       └── img_catalogo/      # 🖼️ Imágenes de productos
├── doc/                        # 📚 Documentación técnica
│   ├── 01-guia-inicio.md      # Guía de inicio
│   ├── 09-arquitectura-atomic-design.md    # Arquitectura Atomic Design
│   ├── 10-guia-verificacion-deudas.md      # Guía de bloqueo por deudas
│   └── README.md              # Índice de documentación
├── astro.config.mjs           # ⚙️ Configuración de Astro
├── package.json              # 📦 Dependencias del proyecto
└── README.md                 # 📖 Este archivo
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18.0.0 o superior
- npm (o yarn/pnpm)

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

4. **Abre tu navegador en:** `http://localhost:4321`

### Scripts Disponibles

```bash
npm run dev        # Servidor de desarrollo (con --host)
npm run build      # Construir para producción
npm run preview    # Vista previa de la build
npm run lint       # Verificar código (astro check)
npm run type-check # Verificar tipos TypeScript
npm run clean      # Limpiar archivos generados
npm start          # Build y preview
```

## 🔒 Funcionalidad de Bloqueo por Deudas

### Sistema Automático de Control

El sistema implementa un control automático que **bloquea** a clientes con facturas vencidas mayores a **40 días**:

- 🚫 **Botón deshabilitado**: El botón "Continuar al Producto" se deshabilita automáticamente
- 📝 **Texto dinámico**: Cambia a "Cliente bloqueado por factura"
- 💬 **Mensaje explicativo**: Muestra el motivo del bloqueo y acciones a seguir
- 🎨 **Indicadores visuales**: Colores rojos y estados de error claros

### Cómo Funciona

```typescript
// Verificación automática
const tieneFacturasVencidas = (cliente, diasLimite = 40) => {
  return cliente.cartera.some((factura) => Number(factura.dias) > diasLimite);
};

// En el componente
const clienteBloqueado = tieneFacturasVencidas(clienteSeleccionado);
```

### Estados del Sistema

| Facturas     | Días | Estado        | Acción           |
| ------------ | ---- | ------------- | ---------------- |
| Sin vencidas | ≤ 40 | ✅ Habilitado | Permitir pedido  |
| Con vencidas | > 40 | 🚫 Bloqueado  | Bloquear sistema |
| Sin facturas | -    | ✅ Habilitado | Permitir pedido  |

### Proceso de Desbloqueo

1. **Identificar facturas** vencidas en la tabla de cartera
2. **Contactar al área de cartera** para regularización
3. **Actualizar datos** en el sistema
4. **Verificar desbloqueo** automático

## 📝 Componentes Principales

### Pages

#### index.astro

Página principal que muestra el catálogo de productos disponibles. Incluye:

- Encabezado con información de actualización
- Selector de clientes con funcionalidad de búsqueda
- Información de cupo y cartera del cliente
- Sistema de bloqueo automático por deudas
- Navegación al catálogo de productos

#### carrito.astro

Página del carrito de compras donde se pueden gestionar los productos seleccionados.

### Components

#### ClienteSelectorReact.jsx

**Organismo principal** que maneja toda la lógica de selección de clientes:

- 🔍 **Búsqueda avanzada** por nombre o ID
- 👤 **Selección de cliente** con información completa
- 🏢 **Selección de sucursal** con detalles del vendedor
- 💰 **Información de cupo** y cartera actualizada
- 🚫 **Bloqueo automático** por facturas vencidas
- 📊 **Tabla de facturas** con estados visuales

#### ProductosSelector.astro

Componente que maneja la visualización y selección de productos disponibles.

### Arquitectura Atomic Design

#### Átomos (Atoms) 🧱

- **Button.astro**: Botones reutilizables con variantes
- **Input.astro**: Campos de entrada estandarizados
- **StatusBadge.astro**: Indicadores de estado con colores
- **Icon.astro**: Iconos consistentes en toda la app

#### Moléculas (Molecules) 🔗

- **SearchInput.astro**: Campo de búsqueda con ícono
- **CupoInfo.astro**: Información de cupo formateada
- **CarteraTable.astro**: Tabla de facturas del cliente
- **ClienteInfo.astro**: Información del cliente seleccionado

#### Plantillas (Templates) 📄

- **ClienteSelectorTemplate.astro**: Estructura completa de la página de selección

## 🎨 Estilos

El proyecto utiliza CSS modular con estilos específicos para cada componente y estilos globales en `global.css`.

## Despliegue

- Sitio: https://sura-pedidos-web.vercel.app
- Build estática (`dist/`) apta para Vercel u hosting estático

## 🤝 Contribución

Si deseas contribuir al proyecto:

1. Haz un Fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`)
3. Realiza tus cambios
4. Haz commit de tus cambios (`git commit -m 'Agrega nueva característica'`)
5. Haz push a la rama (`git push origin feature/nueva-caracteristica`)
6. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📚 Documentación

### Guías Técnicas

- **[Arquitectura Atomic Design](doc/09-arquitectura-atomic-design.md)**: Documentación completa de la arquitectura de componentes
- **[Guía de Verificación de Deudas](doc/10-guia-verificacion-deudas.md)**: Manual completo del sistema de bloqueo por deudas
- **[Guía de Inicio](doc/01-guia-inicio.md)**: Introducción al proyecto y primeros pasos

### Recursos Adicionales

- **Diseño de Sistema**: Variables CSS y componentes reutilizables
- **Casos de Uso**: Ejemplos prácticos de implementación
- **Mejores Prácticas**: Guías para desarrollo y mantenimiento
- **Solución de Problemas**: Troubleshooting común

## 🧪 Testing y Calidad

### Estrategias de Testing

- **Componentes Unitarios**: Cada átomo y molécula testeable independientemente
- **Integración**: Flujos completos de usuario
- **Accesibilidad**: Validación WCAG 2.1 AA
- **Performance**: Métricas de carga y optimización

### Comandos de Testing

```bash
npm run type-check  # Verificar tipos TypeScript
npm run lint        # Verificar código (astro check)
npm run build       # Verificar build de producción
```

## 🚀 Despliegue

### Entornos

- **Desarrollo**: `http://localhost:4321` (npm run dev)
- **Producción**: https://sura-pedidos-web.vercel.app
- **Build**: `dist/` - Build estática optimizada para hosting estático

### Configuración de Producción

```bash
npm run build      # Construir para producción
npm run preview    # Vista previa local de la build
```

## 🤝 Contribución

Si deseas contribuir al proyecto:

1. Haz un Fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`)
3. Realiza tus cambios
4. Haz commit de tus cambios (`git commit -m 'Agrega nueva característica'`)
5. Haz push a la rama (`git push origin feature/nueva-caracteristica`)
6. Abre un Pull Request

### Estándares de Código

- **Atomic Design**: Seguir la arquitectura de componentes establecida
- **TypeScript**: Tipado estricto en todos los archivos
- **CSS**: BEM methodology para clases
- **Commits**: Mensajes descriptivos y en español
- **Documentación**: Actualizar guías cuando se agreguen características

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## ✉️ Contacto

**CCPOVEDA** — ccpoveda.programador@gmail.com

**Documentación técnica ampliada**: `doc/`

---

_Desarrollado con ❤️ usando Astro, React y Atomic Design_
