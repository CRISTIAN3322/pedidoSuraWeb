# 🕒 Sistema de Bloqueo Horario

## 📋 Descripción

Sistema de bloqueo horario que restringe el acceso a la aplicación desde las **18:00 horas hasta las 5:00 horas** del día siguiente. Este sistema garantiza que la aplicación esté disponible únicamente durante el horario comercial establecido.

## 🚀 Funcionalidades

### 🕒 Horario de Bloqueo
- **Inicio del bloqueo:** 18:00 (6:00 PM)
- **Fin del bloqueo:** 5:00 (5:00 AM) del día siguiente
- **Horario de atención:** 5:00 AM - 6:00 PM
- **Duración total del bloqueo:** 11 horas diarias

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

## 🔒 Páginas Protegidas

El bloqueo horario se ha implementado en las siguientes páginas:

- ✅ **Página Principal** (`/`) - Catálogo de productos
- ✅ **Página de Clientes** (`/principal`) - Selección de clientes
- ✅ **Página del Carrito** (`/carrito`) - Carrito de compras
- ✅ **Página de Productos** (`/producto`) - Detalles de productos

## 🧩 Componente Utilizado

### `BloqueoHorario.astro`

**Ubicación:** `src/components/organisms/BloqueoHorario.astro`

**Funcionalidades:**
- ✅ Verificación automática del horario actual
- ✅ Cálculo del tiempo restante hasta el próximo horario disponible
- ✅ Renderizado condicional del overlay de bloqueo
- ✅ Script JavaScript para actualización en tiempo real
- ✅ Auto-recarga cuando el tiempo llega a cero
- ✅ Diseño responsive y accesible

## ⚙️ Implementación Técnica

### 🔧 Lógica del Bloqueo

```javascript
// Verificar si estamos en horario de bloqueo
const estaBloqueado = horaActual >= 18 || horaActual < 5;

// Variables configurables
const horaInicioBloqueo = 18; // 6:00 PM
const horaFinBloqueo = 5;     // 5:00 AM
```

### ⏰ Cálculo del Tiempo Restante

1. **Después de las 18:00:** Calcula tiempo hasta las 5:00 del día siguiente
2. **Antes de las 5:00:** Calcula tiempo hasta las 5:00 del mismo día
3. **Formato de salida:** "Xh Ym" (horas y minutos)
4. **Actualización:** Cada minuto automáticamente

### 🎨 Estilos CSS

- **Overlay:** Posición fija con z-index alto (9999)
- **Fondo:** Gradiente atractivo con colores corporativos
- **Animación:** Pulso suave en el icono de reloj
- **Responsive:** Media queries para diferentes dispositivos
- **Accesibilidad:** Alto contraste y focus visible

## 🔧 Personalización

### ⏰ Cambiar Horarios

Para modificar los horarios de bloqueo, edita las variables en `src/components/organisms/BloqueoHorario.astro`:

```javascript
const horaInicioBloqueo = 18; // Cambiar hora de inicio (24h)
const horaFinBloqueo = 5;     // Cambiar hora de fin (24h)
```

**Ejemplo de configuración:**
```javascript
// Horario extendido (6:00 PM - 4:00 AM)
const horaInicioBloqueo = 18; 
const horaFinBloqueo = 4;     

// Horario reducido (8:00 PM - 6:00 AM)
const horaInicioBloqueo = 20; 
const horaFinBloqueo = 6;     
```

### 💬 Personalizar Mensajes

Los mensajes se pueden personalizar editando el contenido HTML dentro del componente:

```astro
<h2>Sistema Fuera de Servicio</h2>
<p>El sistema está temporalmente cerrado por mantenimiento.</p>
<p><strong>Horario de atención:</strong> 5:00 AM - 6:00 PM</p>
<p><strong>Tiempo restante:</strong> <span id="tiempo-restante">Calculando...</span></p>
```

### 🎨 Modificar Estilos

Los estilos CSS están incluidos en el mismo componente y se pueden modificar según las necesidades de diseño:

```css
.bloqueo-overlay {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Personalizar colores, gradientes, etc. */
}
```

## ⚠️ Notas Importantes

1. **🌍 Zona Horaria:** El sistema utiliza la zona horaria del servidor/cliente
2. **⚡ JavaScript:** Requiere JavaScript habilitado para la actualización en tiempo real
3. **🔍 SEO:** El bloqueo no afecta el SEO ya que se renderiza en el cliente
4. **♿ Accesibilidad:** El overlay es completamente accesible y responsive
5. **🔄 Auto-recarga:** La página se recarga automáticamente cuando el tiempo llega a 0
6. **📱 Responsive:** Optimizado para todos los dispositivos móviles y desktop

## 🧪 Pruebas

Para probar el sistema de bloqueo horario:

### 1. **Simular horario de bloqueo**
```javascript
// Modificar temporalmente las variables en el código
const horaInicioBloqueo = new Date().getHours(); // Hora actual
const horaFinBloqueo = new Date().getHours() + 1; // 1 hora después
```

### 2. **Verificar funcionalidades**
- ✅ **Actualización:** El tiempo restante debe actualizarse cada minuto
- ✅ **Responsive:** Verificar en diferentes tamaños de pantalla
- ✅ **Auto-recarga:** Verificar que la página se recarga cuando el tiempo llega a 0
- ✅ **Overlay:** Verificar que cubre toda la pantalla
- ✅ **Navegación:** Verificar que bloquea todas las páginas protegidas

### 3. **Pruebas de accesibilidad**
- ✅ **Alto contraste:** Verificar legibilidad del texto
- ✅ **Focus visible:** Verificar indicadores de focus
- ✅ **Screen readers:** Verificar compatibilidad con lectores de pantalla

---

## 📞 Soporte

Para soporte técnico o consultas sobre el sistema de bloqueo horario:

- **Desarrollador:** CCPOVEDA
- **Email:** ccpoveda.programador@gmail.com
- **Documentación:** Ver carpeta `doc/` para más detalles técnicos 