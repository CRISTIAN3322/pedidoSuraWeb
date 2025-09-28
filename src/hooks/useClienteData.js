import { useMemo } from 'react';
import clientesData from '../data/clientes.json';
import cuposData from '../data/cupo.json';
import carteraData from '../data/cartera.json';

export const useClienteData = (clienteSeleccionado) => {
  return useMemo(() => {
    if (!clienteSeleccionado) {
      return {
        cupoDisponible: 0,
        totalCartera: 0,
        sinCupo: false,
        carteraCliente: [],
        formaPago: '',
        error: null,
      };
    }

    try {
      // Buscar información del cupo
      const cupoInfo = cuposData.find((c) => c.id === clienteSeleccionado.id);

      if (!cupoInfo) {
        return {
          cupoDisponible: 0,
          totalCartera: 0,
          sinCupo: false,
          carteraCliente: [],
          formaPago: '',
          error: 'No se encontró información de cupo para este cliente',
        };
      }

      const cupoDisponible = parseFloat(String(cupoInfo.cupo).replace(/,/g, '')) || 0;
      const formaPago = cupoInfo.Forma || '';

      // Buscar cartera del cliente
      const carteraCliente = carteraData.filter((c) => c.id === clienteSeleccionado.id);

      const totalCartera = carteraCliente.reduce((sum, factura) => {
        const valor = String(factura.valor).replace(/\./g, '').replace(',', '.');
        return sum + (parseFloat(valor) || 0);
      }, 0);

      const sinCupo = totalCartera > cupoDisponible;

      return {
        cupoDisponible,
        totalCartera,
        sinCupo,
        carteraCliente,
        formaPago,
        error: null,
      };
    } catch (error) {
      console.error('Error procesando datos del cliente:', error);
      return {
        cupoDisponible: 0,
        totalCartera: 0,
        sinCupo: false,
        carteraCliente: [],
        formaPago: '',
        error: 'Error al procesar los datos del cliente',
      };
    }
  }, [clienteSeleccionado]);
};

export const useClientesFiltrados = (busqueda) => {
  return useMemo(() => {
    if (!Array.isArray(clientesData) || busqueda.length < 1) {
      return [];
    }

    try {
      return clientesData.filter((cliente) => {
        const nombreMatch = cliente.nombre?.toLowerCase().includes(busqueda.toLowerCase());
        const idMatch = String(cliente.id || '').includes(busqueda);
        return nombreMatch || idMatch;
      });
    } catch (error) {
      console.error('Error filtrando clientes:', error);
      return [];
    }
  }, [busqueda]);
};