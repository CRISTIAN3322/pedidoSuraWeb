import ventasData from '../../data/ventas.json';
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(ventasData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
