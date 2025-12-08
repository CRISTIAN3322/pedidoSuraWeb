# 📋 Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2024-12-20

### ✨ Añadido
- **Sistema de Autenticación**: Login seguro con validación de vendedores
  - Página de login (`/login`)
  - Componente `LoginForm.astro` para formulario de autenticación
  - Utilidades de autenticación en `auth.ts`
  - Protección de rutas en todas las páginas principales
  - Gestión de sesiones con sessionStorage
  - Información del usuario en navegación
  - Botón de cierre de sesión

- **Sistema de Carga de Imágenes**: Gestión de imágenes de productos
  - Componente `ImageUploader.astro` para carga de archivos
  - Utilidades de manejo de imágenes en `imageUtils.ts`
  - Soporte para múltiples formatos (JPG, PNG, GIF, WEBP, SVG, BMP, ICO)
  - Validación de tipo y tamaño de archivo (máx. 5MB)
  - Vista previa de imágenes antes de guardar
  - Almacenamiento en localStorage con codificación base64

### 🎨 Mejoras de UI/UX
- Diseño responsive mejorado para página de login
- Indicadores visuales de estado de autenticación
- Mejoras en navegación con información del usuario logueado

### 🔒 Funcionalidades de Seguridad
- Protección de rutas mediante verificación de sesión
- Validación de credenciales contra archivo de vendedores
- Gestión segura de sesiones del navegador

### 📚 Documentación
- Actualización de README.md con nuevas funcionalidades
- Documentación de sistema de autenticación
- Guía de uso del sistema de carga de imágenes

## [2.0.0] - 2024-12-19

### ✨ Añadido
- Sistema completo de gestión de pedidos con Astro 5
- Arquitectura Atomic Design para componentes escalables
- Sistema de bloqueo automático por deudas (>40 días)
- Sistema de bloqueo horario (18:00 - 5:00)
- Integración con WhatsApp para envío de pedidos
- Catálogo de productos con 629 items
- Gestión de clientes con información de cupo y cartera
- Carrito de compras con persistencia local
- Diseño responsive optimizado para móviles
- Sistema de navegación glassmorphism
- Documentación técnica completa

### 🎨 Mejoras de UI/UX
- Interfaz moderna con paleta de colores personalizada
- Navegación sticky con contador de carrito
- Animaciones suaves y transiciones
- Indicadores visuales de estado
- Sistema de badges para estados de facturas
- Diseño accesible con alto contraste

### ⚡ Optimizaciones Técnicas
- TypeScript 5.0 para tipado estático
- React 19 para componentes interactivos
- Configuración centralizada
- Lazy loading y optimizaciones de performance
- SEO optimizado con meta tags
- Build estática para hosting estático

### 🔒 Funcionalidades de Seguridad
- Control automático de clientes con facturas vencidas
- Sistema de bloqueo horario configurable
- Validaciones de datos en frontend
- Persistencia segura en LocalStorage

### 📚 Documentación
- README.md completo con guía de instalación
- Documentación técnica en carpeta `doc/`
- Guías de arquitectura Atomic Design
- Ejemplos de código para verificación de deudas
- Documentación del sistema de bloqueo horario

### 🛠️ Configuración
- Astro 5.14.1 con integración React
- TypeScript configurado para desarrollo
- Scripts de desarrollo, build y preview
- Configuración para Vercel deployment

## [1.0.0] - 2024-12-01

### ✨ Lanzamiento Inicial
- Versión base del sistema de pedidos
- Funcionalidades básicas de gestión
- Interfaz inicial

---

## 🔄 Tipos de Cambios

- **✨ Añadido** - Para nuevas funcionalidades
- **🔧 Cambiado** - Para cambios en funcionalidades existentes
- **🗑️ Deprecado** - Para funcionalidades que serán eliminadas
- **❌ Eliminado** - Para funcionalidades eliminadas
- **🔒 Seguridad** - Para correcciones de seguridad
- **🐛 Corregido** - Para correcciones de bugs
- **⚡ Performance** - Para mejoras de rendimiento
- **📚 Documentación** - Para cambios en documentación
- **🎨 UI/UX** - Para mejoras de interfaz de usuario

---

## 📝 Notas de Versión

### v2.0.0
Esta versión representa una reescritura completa del sistema con:
- Migración a Astro 5 para mejor performance
- Implementación de Atomic Design para escalabilidad
- Sistema robusto de control de deudas
- Interfaz moderna y responsive
- Documentación técnica completa

---

*Para más detalles sobre cambios específicos, consulta los commits del repositorio o la documentación técnica en la carpeta `doc/`.*
