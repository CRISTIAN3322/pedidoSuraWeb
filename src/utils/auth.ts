/**
 * Utilidades de autenticación
 * Gestiona la sesión del vendedor
 */

export interface VendedorSession {
  id: number;
  nombre: string;
  loginTime: string;
}

/**
 * Verifica si hay una sesión activa
 */
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  
  const session = sessionStorage.getItem('vendedorSession');
  if (!session) return false;

  try {
    const sessionData: VendedorSession = JSON.parse(session);
    return !!sessionData.id && !!sessionData.nombre;
  } catch {
    return false;
  }
}

/**
 * Obtiene los datos de la sesión actual
 */
export function getSession(): VendedorSession | null {
  if (typeof window === 'undefined') return null;
  
  const session = sessionStorage.getItem('vendedorSession');
  if (!session) return null;

  try {
    return JSON.parse(session) as VendedorSession;
  } catch {
    return null;
  }
}

/**
 * Cierra la sesión actual
 */
export function logout(): void {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem('vendedorSession');
  window.location.href = '/login';
}

/**
 * Protege una ruta redirigiendo al login si no hay sesión
 */
export function protectRoute(): void {
  if (typeof window === 'undefined') return;
  
  if (!isAuthenticated()) {
    window.location.href = '/login';
  }
}

