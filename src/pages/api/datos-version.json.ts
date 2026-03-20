import products from '../../data/products.json';
import ventasData from '../../data/ventas.json';
import type { APIRoute } from 'astro';

// Hash determinista (rápido) sin depender de Node types.
// Suficiente para detectar cambios entre builds/reloads del backend.
function hashJson(value: unknown): string {
  const str = JSON.stringify(value);
  // FNV-1a 32-bit
  let hash = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  // hex sin signo
  return (hash >>> 0).toString(16).padStart(8, '0');
}

// Cacheamos los hashes en memoria para que el polling no sea pesado.
const productosHash = hashJson(products);
const ventasHash = hashJson(ventasData);

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      productos: {
        hash: productosHash,
        count: Array.isArray(products) ? products.length : 0
      },
      ventas: {
        hash: ventasHash,
        count: Array.isArray(ventasData) ? ventasData.length : 0
      },
      generatedAt: new Date().toISOString()
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};

