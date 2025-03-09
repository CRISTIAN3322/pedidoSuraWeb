# Sura Pedidos Web

Sistema web para gestión de pedidos desarrollado con Astro.

## 🚀 Características

- Selector de productos
- Carrito de compras
- Interfaz responsive
- Actualización periódica de productos

## 🛠️ Tecnologías

- [Astro](https://astro.build/)
- HTML
- CSS

## 📁 Estructura del Proyecto
```bash
suraPedidosWeb/
├── src/
│ ├── components/
│ │ └── ProductosSelector.astro
│   └── ClientesSelector.astro
│ ├── pages/
│ │ ├── index.astro
│ │ └── carrito.astro
│ │ └── principal.astro
│ └── styles/
│ └── global.css
```

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone [https://github.com/CRISTIAN3322/suraPedidosWeb.git]
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
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