// Utilidades generales para la aplicación

/**
 * Formatea un número como moneda colombiana
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(amount);
}

/**
 * Formatea un número con separadores de miles
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('es-CO').format(num);
}

/**
 * Valida si un string es un email válido
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valida si un string es un número de teléfono válido
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
}

/**
 * Debounce function para optimizar búsquedas
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function para limitar la frecuencia de ejecución
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Genera un ID único
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

/**
 * Capitaliza la primera letra de cada palabra
 */
export function capitalizeWords(str: string): string {
  return str.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

/**
 * Trunca un texto a una longitud específica
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
}

/**
 * Verifica si estamos en horario de atención
 */
export function isBusinessHours(): boolean {
  const now = new Date();
  const hour = now.getHours();
  return hour >= 5 && hour < 18; // 5:00 AM - 6:00 PM
}

/**
 * Calcula el tiempo restante hasta el próximo horario de atención
 */
export function getTimeUntilNextBusinessHour(): string {
  const now = new Date();
  const hour = now.getHours();
  
  if (hour >= 5 && hour < 18) {
    return '0h 0m'; // Ya estamos en horario de atención
  }
  
  let nextBusinessHour: Date;
  if (hour < 5) {
    // Estamos antes de las 5 AM, esperamos hasta las 5 AM del mismo día
    nextBusinessHour = new Date(now);
    nextBusinessHour.setHours(5, 0, 0, 0);
  } else {
    // Estamos después de las 6 PM, esperamos hasta las 5 AM del día siguiente
    nextBusinessHour = new Date(now);
    nextBusinessHour.setDate(nextBusinessHour.getDate() + 1);
    nextBusinessHour.setHours(5, 0, 0, 0);
  }
  
  const diff = nextBusinessHour.getTime() - now.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  return `${hours}h ${minutes}m`;
}

/**
 * Limpia y valida datos del localStorage
 */
export function getStorageData<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error parsing localStorage item ${key}:`, error);
    return defaultValue;
  }
}

/**
 * Guarda datos en el localStorage con validación
 */
export function setStorageData<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving to localStorage ${key}:`, error);
  }
}

/**
 * Remueve un item del localStorage
 */
export function removeStorageData(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing localStorage item ${key}:`, error);
  }
}
