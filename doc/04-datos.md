## 04. Datos

### Fuentes
- `src/data/products.json`: catálogo de productos (grande).
- `src/data/clientes.json`: clientes e identificadores.
- `src/data/cartera.json`: cartera por cliente.
- `src/data/cupo.json`: cupo de crédito por cliente.

### Esquemas (referencia)
- Producto (estimado):
  - `codigo: string`
  - `nombre: string`
  - `precio: number`
  - `proveedor?: string`
  - `activo?: boolean`
- Cliente:
  - `id: number | string`
  - `nombre: string`
  - `cupo: number` (en `clientes.json` y/o `cupo.json`)

### Acceso a datos
- Los componentes leen los JSON directamente en el cliente a través de Astro.
- No hay backend; la persistencia es local (`localStorage`).

### Claves de almacenamiento
Definidas en `APP_CONFIG.storage`:
- `cartKey` = `cartItems`
- `clientKey` = `datosCliente`
- `settingsKey` = `appSettings`

### Formatos y utilidades
- Moneda: `helpers.formatCurrency(amount)` usa `Intl.NumberFormat('es-CO','COP')`.
- Números: `helpers.formatNumber(num)`.
- Limpieza de storage: `getStorageData`, `setStorageData`, `removeStorageData`.

### Consideraciones
- No subir datos personales reales a control de versiones.
- Mantener `products.json` optimizado (compresión, partición futura si crece).

