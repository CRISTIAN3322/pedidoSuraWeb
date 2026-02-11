import carteraData from '../../data/cartera.json';
import type { APIRoute } from 'astro';

// Función para comparar nombres de vendedores (case-insensitive)
function compareVendedorNames(name1: string, name2: string): boolean {
  if (!name1 || !name2) return false;
  return name1.trim().toUpperCase() === name2.trim().toUpperCase();
}

// Función para normalizar el nombre del vendedor (puede venir como "Vendedor" o "vendedor")
function getVendedorName(factura: any): string {
  return factura.Vendedor || factura.vendedor || '';
}

export const GET: APIRoute = () => {
  try {
    // Agrupar carteras por vendedor
    const carterasPorVendedor: { [key: string]: any[] } = {};
    
    carteraData.forEach((factura: any) => {
      const vendedorNombre = getVendedorName(factura);
      if (!vendedorNombre) return;
      
      // Normalizar el nombre del vendedor para usar como clave
      const vendedorKey = vendedorNombre.trim().toUpperCase();
      
      if (!carterasPorVendedor[vendedorKey]) {
        carterasPorVendedor[vendedorKey] = [];
      }
      
      carterasPorVendedor[vendedorKey].push({
        ...factura,
        vendedor: vendedorNombre // Normalizar a minúscula para consistencia
      });
    });
    
    // Convertir a array con estadísticas
    const resultado = Object.keys(carterasPorVendedor).map((vendedorKey) => {
      const facturas = carterasPorVendedor[vendedorKey];
      const vendedorNombre = facturas[0].vendedor;
      
      // Calcular total de cartera
      const totalCartera = facturas.reduce((sum: number, factura: any) => {
        const valor = typeof factura.valor === 'number' 
          ? factura.valor 
          : parseFloat(String(factura.valor).replace(/\./g, '').replace(',', '.')) || 0;
        return sum + valor;
      }, 0);
      
      // Contar facturas por estado de días
      const facturasVencidas = facturas.filter((f: any) => {
        const dias = Number(f.dias) || 0;
        return dias >= 30;
      }).length;
      
      const facturasPorVencer = facturas.filter((f: any) => {
        const dias = Number(f.dias) || 0;
        return dias >= 11 && dias < 30;
      }).length;
      
      return {
        vendedor: vendedorNombre,
        facturas: facturas,
        totalCartera: totalCartera,
        totalFacturas: facturas.length,
        facturasVencidas: facturasVencidas,
        facturasPorVencer: facturasPorVencer
      };
    });
    
    // Ordenar por total de cartera descendente
    resultado.sort((a, b) => b.totalCartera - a.totalCartera);
    
    return new Response(JSON.stringify(resultado), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    console.error('Error procesando carteras:', error);
    return new Response(JSON.stringify({ error: error.message || 'Error al procesar carteras' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
