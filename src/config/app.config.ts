// Configuración de la aplicación
export const APP_CONFIG = {
  // Información de la aplicación
  name: 'Sura Pedidos Web',
  version: '2.0.0',
  description: 'Sistema de gestión de pedidos para Sura',
  
  // Configuración de horarios
  schedule: {
    startHour: 5, // 5:00 AM
    endHour: 18,  // 6:00 PM
    timezone: 'America/Bogota'
  },
  
  // Configuración de WhatsApp
  whatsapp: {
    number: '573118711256',
    messageTemplate: {
      newOrder: '*NUEVO PEDIDO*%0A%0A',
      noCredit: '*🚨 CLIENTE SIN CUPO 🚨*%0A%0A*NO SE PUEDE PROCESAR EL PEDIDO*%0A%0A'
    }
  },
  
  // Configuración de la moneda
  currency: {
    code: 'COP',
    locale: 'es-CO',
    symbol: '$'
  },
  
  // Configuración de inventario
  inventory: {
    lowStockThreshold: 1,
    showInactiveProducts: false
  },
  
  // Configuración de cartera
  portfolio: {
    warningDays: 11,
    criticalDays: 30
  },
  
  // Configuración de la interfaz
  ui: {
    itemsPerPage: 20,
    maxSearchResults: 50,
    animationDuration: 200
  },
  
  // Configuración de almacenamiento local
  storage: {
    cartKey: 'cartItems',
    clientKey: 'datosCliente',
    settingsKey: 'appSettings'
  }
} as const;

// Tipos para TypeScript
export type AppConfig = typeof APP_CONFIG;
