# Guía de Verificación de Deudas - Pedido Sura Web

## 📋 Introducción

Este documento proporciona una guía completa para entender y utilizar la funcionalidad de verificación de deudas implementada en el proyecto Pedido Sura Web. El sistema bloquea automáticamente a clientes que tienen facturas vencidas mayores a 40 días, previniendo la realización de nuevos pedidos hasta que se regularice su situación financiera.

## 🎯 Funcionalidad Principal

### Bloqueo Automático de Clientes

El sistema verifica automáticamente si un cliente tiene facturas vencidas mayores a 40 días y:

- **Bloquea el botón** "Continuar al Producto"
- **Cambia el texto** a "Cliente bloqueado por factura"
- **Muestra mensaje explicativo** sobre la situación
- **Impide la navegación** al catálogo de productos

### Criterios de Bloqueo

```typescript
// Un cliente se bloquea si:
cliente.cartera.some((factura) => Number(factura.dias) > 40);
```

**Ejemplo de factura bloqueada:**

```json
{
  "fac": "SURA 47126",
  "fecha": "14/08/2025",
  "valor": 664051,
  "dias": 45 // ← Factura vencida > 40 días
}
```

## 🔍 Cómo Funciona la Verificación

### 1. Estructura de Datos

```typescript
interface Factura {
  id: string | number;
  cliente: string;
  vendedor: string;
  fac: string; // Número de factura
  fecha: string; // Fecha de emisión
  valor: string | number; // Valor de la factura
  dias: string | number; // Días de vencimiento
}

interface ClienteDeuda {
  id: string | number;
  nombre: string;
  sucursales?: any[];
  cartera?: Factura[]; // ← Array de facturas del cliente
}
```

### 2. Proceso de Verificación

```mermaid
graph TD
    A[Usuario selecciona cliente] --> B[Cargar datos de cartera]
    B --> C[Verificar cada factura]
    C --> D{¿Alguna factura > 40 días?}
    D -->|Sí| E[Cliente BLOQUEADO]
    D -->|No| F[Cliente HABILITADO]
    E --> G[Botón deshabilitado]
    G --> H[Texto: 'Cliente bloqueado por factura']
    F --> I[Botón habilitado]
    I --> J[Texto: 'Continuar al Producto']
```

### 3. Estados del Sistema

| Estado del Cliente | Días de Facturas  | Botón         | Acción                   |
| ------------------ | ----------------- | ------------- | ------------------------ |
| **Normal**         | Todas ≤ 40 días   | Habilitado    | Navegar a productos      |
| **Bloqueado**      | Algunas > 40 días | Deshabilitado | Mostrar mensaje de error |
| **Sin Cartera**    | Sin facturas      | Habilitado    | Navegar a productos      |

## 💻 Implementación Técnica

### Utilidades de Verificación

```typescript
// utils/atomic-design/deudaUtils.ts
import { Factura, ClienteDeuda } from "./types";

/**
 * Verifica si un cliente tiene facturas vencidas
 */
export function tieneFacturasVencidas(
  cliente: ClienteDeuda | null,
  diasLimite: number = 40
): boolean {
  if (!cliente?.cartera) return false;

  return cliente.cartera.some((factura) => {
    const dias = Number(factura.dias) || 0;
    return dias > diasLimite;
  });
}

/**
 * Obtiene todas las facturas vencidas
 */
export function obtenerFacturasVencidas(
  cliente: ClienteDeuda | null,
  diasLimite: number = 40
): Factura[] {
  if (!cliente?.cartera) return [];

  return cliente.cartera.filter((factura) => {
    const dias = Number(factura.dias) || 0;
    return dias > diasLimite;
  });
}
```

### Uso en Componentes

```jsx
// En ClienteSelectorReact.jsx
import { tieneFacturasVencidas } from "../utils/atomic-design/deudaUtils";

function ClienteSelectorReact() {
  const clienteBloqueado = tieneFacturasVencidas(clienteSeleccionado, 40);

  return (
    <div>
      <button
        disabled={clienteBloqueado}
        className={clienteBloqueado ? "blocked" : "enabled"}
      >
        {clienteBloqueado
          ? "Cliente bloqueado por factura"
          : "Continuar al Producto"}
      </button>
    </div>
  );
}
```

## 🎨 Experiencia de Usuario

### Indicadores Visuales

#### 1. Botón Normal

```jsx
<button className="atom-button atom-button--primary">
  Continuar al Producto
</button>
```

#### 2. Botón Bloqueado

```jsx
<button className="atom-button atom-button--blocked" disabled>
  Cliente bloqueado por factura
</button>
```

#### 3. Mensaje de Ayuda

```jsx
<div className="help-message">
  El cliente tiene facturas vencidas mayores a 40 días. Contacte al área de
  cartera para resolver.
</div>
```

### Estados de Facturas

| Días     | Color | Estado    | Acción           |
| -------- | ----- | --------- | ---------------- |
| **≤ 40** | Verde | Normal    | Permitir pedido  |
| **> 40** | Rojo  | Bloqueado | Bloquear sistema |

## 📊 Casos de Uso

### Caso 1: Cliente sin Deudas

```json
{
  "cliente": "EMPRESAS ABC SAS",
  "cartera": [
    { "fac": "001", "dias": 15, "valor": 1000000 },
    { "fac": "002", "dias": 30, "valor": 2500000 }
  ]
}
```

**Resultado**: ✅ Cliente habilitado, puede realizar pedidos

### Caso 2: Cliente con Facturas Vencidas

```json
{
  "cliente": "COMERCIO XYZ LTDA",
  "cartera": [
    { "fac": "003", "dias": 45, "valor": 5000000 },
    { "fac": "004", "dias": 25, "valor": 1500000 }
  ]
}
```

**Resultado**: ❌ Cliente bloqueado, no puede realizar pedidos

### Caso 3: Cliente sin Cartera

```json
{
  "cliente": "NUEVO CLIENTE SAS",
  "cartera": []
}
```

**Resultado**: ✅ Cliente habilitado, puede realizar pedidos

## 🔧 Configuración y Personalización

### Cambiar Límite de Días

```typescript
// En cualquier componente
import { tieneFacturasVencidas } from "../utils/atomic-design/deudaUtils";

// Usar límite personalizado
const clienteBloqueado = tieneFacturasVencidas(cliente, 30); // 30 días en lugar de 40
```

### Mensajes Personalizados

```jsx
// En componente React
const getBloqueoMessage = (cliente) => {
  const facturasVencidas = obtenerFacturasVencidas(cliente, 40);
  const totalDeuda = calcularDeudaVencida(cliente, 40);

  return `Cliente bloqueado por ${
    facturasVencidas.length
  } factura(s) vencida(s) por ${formatearMoneda(
    totalDeuda
  )}. Contacte al área de cartera.`;
};
```

## 🚨 Manejo de Errores

### Tipos de Error

1. **Error de Carga de Datos**

   ```jsx
   // Mostrar spinner de carga
   {
     isLoading && <Icon name="loading" />;
   }
   ```

2. **Error de Datos Inválidos**

   ```jsx
   // Validar estructura de datos
   if (!cliente.cartera) {
     return <div>Error: No se pudieron cargar los datos de cartera</div>;
   }
   ```

3. **Error de Cálculo**
   ```typescript
   // Manejo seguro de valores
   const dias = Number(factura.dias) || 0;
   const valor =
     Number(String(factura.valor).replace(/\./g, "").replace(",", ".")) || 0;
   ```

## 📱 Responsive y Accesibilidad

### Responsive Design

```css
/* Móvil */
@media (max-width: 768px) {
  .blocked-button {
    font-size: 0.9rem;
    padding: 0.75rem 1.25rem;
  }
}

/* Desktop */
@media (min-width: 769px) {
  .blocked-button {
    font-size: 1.1rem;
    padding: 1rem 2rem;
  }
}
```

### Accesibilidad

```jsx
// Atributos ARIA para lectores de pantalla
<button
  disabled={clienteBloqueado}
  aria-describedby="bloqueo-help"
  role="button"
>
  {clienteBloqueado ? 'Cliente bloqueado por factura' : 'Continuar al Producto'}
</button>

<div id="bloqueo-help" role="alert">
  El cliente tiene facturas vencidas mayores a 40 días.
  Contacte al área de cartera para resolver.
</div>
```

## 🔍 Debugging y Testing

### Herramientas de Debug

```typescript
// En desarrollo, agregar logs
console.log("Cliente:", cliente);
console.log("Facturas:", cliente?.cartera);
console.log("Bloqueado:", tieneFacturasVencidas(cliente));
```

### Testing Manual

1. **Preparar datos de prueba** con facturas > 40 días
2. **Seleccionar cliente** en la interfaz
3. **Verificar bloqueo** del botón
4. **Confirmar mensaje** de error
5. **Verificar desbloqueo** después de actualizar datos

### Casos de Prueba

```javascript
// Test cases para verificarFacturasVencidas
const testCases = [
  {
    nombre: "Cliente sin cartera",
    cliente: { id: 1, nombre: "Test", cartera: [] },
    resultado: false,
  },
  {
    nombre: "Cliente con facturas normales",
    cliente: {
      id: 2,
      nombre: "Test",
      cartera: [{ dias: 15 }, { dias: 30 }, { dias: 40 }],
    },
    resultado: false,
  },
  {
    nombre: "Cliente con facturas vencidas",
    cliente: {
      id: 3,
      nombre: "Test",
      cartera: [{ dias: 45 }, { dias: 25 }],
    },
    resultado: true,
  },
];
```

## 📋 Procedimiento para Desbloqueo

### Para Clientes Bloqueados

1. **Identificar facturas vencidas** en la tabla de cartera
2. **Contactar al área de cartera** para regularización
3. **Actualizar datos** en el sistema
4. **Verificar desbloqueo** automático del botón

### Proceso de Regularización

```mermaid
graph TD
    A[Cliente bloqueado] --> B[Contactar área de cartera]
    B --> C[Regularizar facturas vencidas]
    C --> D[Actualizar datos en sistema]
    D --> E[Verificar desbloqueo automático]
    E --> F[Cliente habilitado para pedidos]
```

## 🔧 Mantenimiento

### Actualizar Límite de Días

1. Modificar el valor por defecto en `deudaUtils.ts`
2. Actualizar documentación
3. Probar con casos existentes
4. Desplegar cambios

### Agregar Nuevas Validaciones

```typescript
// Ejemplo: Bloqueo por monto total
export function bloqueoPorMontoTotal(cliente, montoLimite = 10000000) {
  const deudaTotal = calcularDeudaVencida(cliente);
  return deudaTotal > montoLimite;
}
```

## 📞 Soporte

Para preguntas o problemas relacionados con la verificación de deudas:

- **Equipo de Desarrollo**: soporte.tecnico@sura.com
- **Área de Cartera**: cartera@sura.com
- **Documentación**: Consultar `doc/09-arquitectura-atomic-design.md`

---

_Este documento se actualiza automáticamente con cada cambio en la funcionalidad de verificación de deudas._
