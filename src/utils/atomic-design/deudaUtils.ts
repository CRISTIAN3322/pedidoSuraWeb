/**
 * Utilidades para verificación de deudas y facturas vencidas
 * Sigue la metodología Atomic Design para mantener la lógica de negocio centralizada
 */

/**
 * Interface para representar una factura
 */
export interface Factura {
  id: string | number;
  cliente: string;
  vendedor: string;
  fac: string;
  fecha: string;
  valor: string | number;
  dias: string | number;
}

/**
 * Interface para representar un cliente con su información de deuda
 */
export interface ClienteDeuda {
  id: string | number;
  nombre: string;
  sucursales?: any[];
  cartera?: Factura[];
}

/**
 * Verifica si un cliente tiene facturas vencidas mayores a N días
 * @param cliente - Objeto con información del cliente y su cartera
 * @param diasLimite - Límite de días para considerar una factura como vencida (default: 40)
 * @returns boolean - true si tiene facturas vencidas mayores al límite
 */
export function tieneFacturasVencidas(
  cliente: ClienteDeuda | null,
  diasLimite: number = 40
): boolean {
  if (!cliente || !cliente.cartera || cliente.cartera.length === 0) {
    return false;
  }

  return cliente.cartera.some((factura: Factura) => {
    const dias = Number(factura.dias) || 0;
    return dias > diasLimite;
  });
}

/**
 * Obtiene todas las facturas vencidas de un cliente
 * @param cliente - Objeto con información del cliente y su cartera
 * @param diasLimite - Límite de días para considerar una factura como vencida (default: 40)
 * @returns Array de facturas vencidas
 */
export function obtenerFacturasVencidas(
  cliente: ClienteDeuda | null,
  diasLimite: number = 40
): Factura[] {
  if (!cliente || !cliente.cartera || cliente.cartera.length === 0) {
    return [];
  }

  return cliente.cartera.filter((factura: Factura) => {
    const dias = Number(factura.dias) || 0;
    return dias > diasLimite;
  });
}

/**
 * Calcula el total de deuda vencida de un cliente
 * @param cliente - Objeto con información del cliente y su cartera
 * @param diasLimite - Límite de días para considerar una factura como vencida (default: 40)
 * @returns Total de valor de facturas vencidas
 */
export function calcularDeudaVencida(
  cliente: ClienteDeuda | null,
  diasLimite: number = 40
): number {
  const facturasVencidas = obtenerFacturasVencidas(cliente, diasLimite);

  return facturasVencidas.reduce((total: number, factura: Factura) => {
    const valor = Number(String(factura.valor).replace(/\./g, '').replace(',', '.')) || 0;
    return total + valor;
  }, 0);
}

/**
 * Determina el estado de riesgo de un cliente basado en sus facturas
 * @param cliente - Objeto con información del cliente y su cartera
 * @returns Estado de riesgo: 'bajo' | 'medio' | 'alto' | 'bloqueado'
 */
export function obtenerEstadoRiesgoCliente(
  cliente: ClienteDeuda | null
): 'bajo' | 'medio' | 'alto' | 'bloqueado' {
  if (!cliente || !cliente.cartera || cliente.cartera.length === 0) {
    return 'bajo';
  }

  const facturasVencidas = obtenerFacturasVencidas(cliente, 40);
  const maxDiasVencido = Math.max(
    ...cliente.cartera.map((f: Factura) => Number(f.dias) || 0)
  );

  if (facturasVencidas.length > 0) {
    return 'bloqueado';
  }

  if (maxDiasVencido >= 30) {
    return 'alto';
  }

  if (maxDiasVencido >= 15) {
    return 'medio';
  }

  return 'bajo';
}

/**
 * Formatea un valor numérico como moneda colombiana
 * @param valor - Valor numérico a formatear
 * @returns String formateado como moneda
 */
export function formatearMoneda(valor: number): string {
  return valor.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

/**
 * Valida si una factura está vencida basado en los días
 * @param factura - Objeto factura a validar
 * @param diasLimite - Límite de días para considerar vencida
 * @returns boolean
 */
export function esFacturaVencida(factura: Factura, diasLimite: number = 40): boolean {
  const dias = Number(factura.dias) || 0;
  return dias > diasLimite;
}

/**
 * Genera un mensaje de bloqueo para el cliente
 * @param cliente - Información del cliente
 * @returns Mensaje explicativo del bloqueo
 */
export function generarMensajeBloqueo(cliente: ClienteDeuda | null): string {
  if (!cliente) {
    return 'Cliente no encontrado';
  }

  const facturasVencidas = obtenerFacturasVencidas(cliente, 40);
  const deudaTotal = calcularDeudaVencida(cliente, 40);

  if (facturasVencidas.length === 0) {
    return 'El cliente no tiene facturas vencidas';
  }

  return `Cliente bloqueado por ${facturasVencidas.length} factura(s) vencida(s) por un total de ${formatearMoneda(deudaTotal)}. Contacte al área de cartera para resolver.`;
}