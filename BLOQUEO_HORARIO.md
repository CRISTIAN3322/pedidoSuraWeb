# Sistema de Bloqueo Horario

## Descripción

Se ha implementado un sistema de bloqueo horario que restringe el acceso a la aplicación desde las **18:00 horas hasta las 5:00 horas** del día siguiente.

## Funcionalidades

### 🕒 Horario de Bloqueo
- **Inicio del bloqueo:** 18:00 (6:00 PM)
- **Fin del bloqueo:** 5:00 (5:00 AM) del día siguiente
- **Horario de atención:** 5:00 AM - 6:00 PM

### 📱 Características del Bloqueo

1. **Overlay de Bloqueo:**
   - Pantalla completa que cubre toda la aplicación
   - Diseño moderno con gradiente de colores
   - Icono animado de reloj
   - Mensaje informativo sobre el horario de atención

2. **Tiempo Restante en Tiempo Real:**
   - Muestra el tiempo exacto restante hasta que el sistema esté disponible
   - Se actualiza automáticamente cada minuto
   - Formato: "Xh Ym" (horas y minutos)

3. **Auto-recarga:**
   - Cuando el tiempo llega a 0, la página se recarga automáticamente
   - Permite verificar si el sistema ya está disponible

4. **Responsive Design:**
   - Se adapta a diferentes tamaños de pantalla
   - Optimizado para dispositivos móviles

## Páginas Protegidas

El bloqueo horario se ha implementado en las siguientes páginas:

- ✅ **Página Principal** (`/`) - Catálogo de productos
- ✅ **Página de Clientes** (`/principal`) - Selección de clientes
- ✅ **Página del Carrito** (`/carrito`) - Carrito de compras

## Componente Utilizado

### `BloqueoHorario.astro`

Ubicación: `src/components/BloqueoHorario.astro`

**Funcionalidades:**
- Verificación automática del horario actual
- Cálculo del tiempo restante hasta el próximo horario disponible
- Renderizado condicional del overlay de bloqueo
- Script JavaScript para actualización en tiempo real

## Implementación Técnica

### Lógica del Bloqueo

```javascript
// Verificar si estamos en horario de bloqueo
const estaBloqueado = horaActual >= 18 || horaActual < 5;
```

### Cálculo del Tiempo Restante

1. **Después de las 18:00:** Calcula tiempo hasta las 5:00 del día siguiente
2. **Antes de las 5:00:** Calcula tiempo hasta las 5:00 del mismo día

### Estilos CSS

- Overlay con posición fija y z-index alto
- Gradiente de fondo atractivo
- Animación de pulso en el icono
- Diseño responsive con media queries

## Personalización

### Cambiar Horarios

Para modificar los horarios de bloqueo, edita las variables en `src/components/BloqueoHorario.astro`:

```javascript
const horaInicioBloqueo = 18; // Cambiar hora de inicio
const horaFinBloqueo = 5;     // Cambiar hora de fin
```

### Personalizar Mensajes

Los mensajes se pueden personalizar editando el contenido HTML dentro del componente:

```astro
<h2>Sistema Fuera de Servicio</h2>
<p>El sistema está temporalmente cerrado por mantenimiento.</p>
<p><strong>Horario de atención:</strong> 5:00 AM - 6:00 PM</p>
```

### Modificar Estilos

Los estilos CSS están incluidos en el mismo componente y se pueden modificar según las necesidades de diseño.

## Notas Importantes

1. **Zona Horaria:** El sistema utiliza la zona horaria del servidor/cliente
2. **JavaScript:** Requiere JavaScript habilitado para la actualización en tiempo real
3. **SEO:** El bloqueo no afecta el SEO ya que se renderiza en el cliente
4. **Accesibilidad:** El overlay es completamente accesible y responsive

## Pruebas

Para probar el sistema:

1. **Simular horario de bloqueo:** Cambiar la hora del sistema o modificar temporalmente las variables en el código
2. **Verificar actualización:** El tiempo restante debe actualizarse cada minuto
3. **Probar responsive:** Verificar en diferentes tamaños de pantalla
4. **Auto-recarga:** Verificar que la página se recarga cuando el tiempo llega a 0 