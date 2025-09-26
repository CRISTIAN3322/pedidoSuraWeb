import React, { useState } from 'react';
import clientesData from '../../data/clientes.json';
import cuposData from '../../data/cupo.json';
import carteraData from '../../data/cartera.json';

function CupoCliente({ cupoDisponible, totalCartera, sinCupo }) {
    return ( <
        div className = "cupo-cliente" > {
            sinCupo ? ( <
                span style = {
                    { color: 'red', fontWeight: 'bold' }
                } > ⚠️SIN CUPO - Cupo: { cupoDisponible.toLocaleString('es-CO') } | Cartera: { totalCartera.toLocaleString('es-CO') } <
                /span>
            ) : ( <
                span style = {
                    { color: 'green' }
                } > ✅Con Cupo - Cupo: { cupoDisponible.toLocaleString('es-CO') } | Cartera: { totalCartera.toLocaleString('es-CO') } <
                /span>
            )
        } <
        /div>
    );
}

function CarteraCliente({ cartera, totalCartera }) {
    return ( <
        div className = "tabla-cartera-responsive" >
        <
        h4 style = {
            { marginBottom: '1rem', color: '#1a365d' }
        } > Cartera del Cliente < /h4> <
        div className = "tabla-cartera-scroll" >
        <
        table className = "tabla-cartera-moderna" >
        <
        thead >
        <
        tr >
        <
        th > Factura < /th> <
        th > Fecha < /th> <
        th > Valor < /th> <
        th > Días < /th> < /
        tr > <
        /thead> <
        tbody > {
            cartera.length > 0 ? (
                cartera.map((factura, idx) => ( <
                    tr key = { idx }
                    className = {
                        Number(factura.dias) >= 30 ?
                        'dias-mayor-treinta' : Number(factura.dias) >= 11 ?
                            'dias-mayor-diez' : Number(factura.dias) >= 1 ?
                            'dias-mayor-uno' : ''
                    } >
                    <
                    td > { factura.fac } < /td> <
                    td > { factura.fecha } < /td> <
                    td >
                    $ { Number(String(factura.valor).replace(/\./g, '').replace(',', '.')).toLocaleString('es-CO') } <
                    /td> <
                    td > { factura.dias } < /td> < /
                    tr >
                ))
            ) : ( <
                tr >
                <
                td colSpan = "4" > Sin facturas pendientes < /td> < /
                tr >
            )
        } <
        /tbody> <
        tfoot >
        <
        tr >
        <
        td colSpan = "2" >
        <
        strong > Total Cartera: < /strong> < /
        td > <
        td colSpan = "2" >
        <
        strong > $ { totalCartera.toLocaleString('es-CO') } < /strong> < /
        td > <
        /tr> < /
        tfoot > <
        /table> < /
        div > <
        style > { `
        .tabla-cartera-responsive { width: 100%; margin: 20px 0; }
        .tabla-cartera-scroll { overflow-x: auto; border-radius: 10px; box-shadow: 0 2px 8px rgba(44,82,130,0.08); background: #fff; }
        .tabla-cartera-moderna { width: 100%; border-collapse: collapse; min-width: 400px; }
        .tabla-cartera-moderna th, .tabla-cartera-moderna td { padding: 0.75rem 1rem; border-bottom: 1px solid #e2e8f0; text-align: left; }
        .tabla-cartera-moderna th { background: #f7fafc; color: #2d3748; font-weight: 600; }
        .tabla-cartera-moderna tbody tr:hover { background: #f7fafc; }
        .tabla-cartera-moderna tfoot { background: #f8f9fa; }
        .tabla-cartera-moderna tfoot td { font-weight: bold; color: #1a365d; }
        .tabla-cartera-moderna tr.dias-mayor-uno { background-color: #fff3cd !important; }
        .tabla-cartera-moderna tr.dias-mayor-diez { background-color: #f8d7da !important; }
        .tabla-cartera-moderna tr.dias-mayor-treinta { background-color: #dc3545 !important; color: white !important; }
        @media (max-width: 700px) {
          .tabla-cartera-moderna th, .tabla-cartera-moderna td { padding: 0.5rem 0.4rem; font-size: 0.95rem; }
          .tabla-cartera-moderna { min-width: 320px; }
        }
        @media (max-width: 480px) {
          .tabla-cartera-responsive h4 { font-size: 1.1rem; }
          .tabla-cartera-moderna th, .tabla-cartera-moderna td { font-size: 0.85rem; padding: 0.3rem 0.2rem; }
        }
      ` } < /style> < /
        div >
    );
}

function ClienteSelectorReact() {
    const [busqueda, setBusqueda] = useState('');
    const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
    const [sucursalSeleccionada, setSucursalSeleccionada] = useState(null);

    const resultados =
        Array.isArray(clientesData) && busqueda.length >= 1 ?
        clientesData.filter(
            (cliente) =>
            cliente.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            String(cliente.id).includes(busqueda)
        ) : [];

    let cupoDisponible = 0;
    let totalCartera = 0;
    let sinCupo = false;
    let carteraCliente = [];
    let formaPago = '';

    if (clienteSeleccionado) {
        const cupoInfo = cuposData.find((c) => c.id === clienteSeleccionado.id);
        if (cupoInfo) {
            cupoDisponible = parseFloat(String(cupoInfo.cupo).replace(/,/g, ''));
            formaPago = cupoInfo.Forma || '';
        }
        carteraCliente = carteraData.filter((c) => c.id === clienteSeleccionado.id);
        if (carteraCliente.length > 0) {
            totalCartera = carteraCliente.reduce(
                (sum, f) => sum + parseFloat(String(f.valor).replace(/,/g, '')),
                0
            );
        }
        sinCupo = totalCartera > cupoDisponible;
    }

    return ( <
        div className = "cliente-selector" >
        <
        input type = "text"
        placeholder = "Buscar Cliente..."
        value = { busqueda }
        onChange = {
            (e) => setBusqueda(e.target.value)
        }
        className = "input-busqueda" /
        >

        <
        ul className = "lista-clientes" > {
            resultados.map((cliente) => ( <
                li key = { cliente.id }
                className = "cliente-item"
                onClick = {
                    () => {
                        setClienteSeleccionado(cliente);
                        setSucursalSeleccionada(null);
                    }
                } > { cliente.nombre } <
                /li>
            ))
        } <
        /ul>

        {
            clienteSeleccionado && ( <
                div className = "sucursales" >
                <
                h3 > Sucursales de { clienteSeleccionado.nombre }: < /h3> <
                CupoCliente cupoDisponible = { cupoDisponible }
                totalCartera = { totalCartera }
                sinCupo = { sinCupo }
                /> <
                p style = {
                    { marginTop: '8px' }
                } > < strong > Forma de pago: < /strong> { formaPago || 'No registrada' } < /p >

                <
                ul className = "lista-sucursales" > {
                    Array.isArray(clienteSeleccionado.sucursales) ? (
                        clienteSeleccionado.sucursales.map((sucursal, idx) => ( <
                            li key = { idx }
                            className = {
                                'sucursal-item' +
                                (sucursalSeleccionada === sucursal ? ' sucursal-activa' : '')
                            }
                            onClick = {
                                () => setSucursalSeleccionada(sucursal)
                            } >
                            Dirección: { sucursal.direccion } | Vendedor: { sucursal.vendedor } <
                            /li>
                        ))
                    ) : ( <
                        li > No hay sucursales registradas < /li>
                    )
                } <
                /ul>

                <
                CarteraCliente cartera = { carteraCliente }
                totalCartera = { totalCartera }
                />

                <
                button className = "boton-carrito"
                style = {
                    {
                        marginTop: '1.5rem',
                        width: '100%',
                        padding: '12px',
                        fontSize: '1.1rem',
                        background: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                    }
                }
                disabled = {!sucursalSeleccionada }
                onClick = {
                    () => {
                        if (clienteSeleccionado && sucursalSeleccionada) {
                            const datosCliente = {
                                clienteId: clienteSeleccionado.id,
                                clienteNombre: clienteSeleccionado.nombre,
                                sucursalDireccion: sucursalSeleccionada.direccion,
                                sucursalVendedor: sucursalSeleccionada.vendedor,
                                totalCartera,
                                cupoDisponible,
                                sinCupo,
                                formaPago,
                            };
                            localStorage.setItem('datosCliente', JSON.stringify(datosCliente));
                            window.location.href = '/producto';
                        }
                    }
                } >
                Ir al Producto <
                /button> < /
                div >
            )
        }

        {
            clienteSeleccionado && sucursalSeleccionada && ( <
                div className = "datos-seleccionados" >
                <
                h4 > Datos Seleccionados: < /h4> <
                p > Cliente: { clienteSeleccionado.nombre } < /p> <
                p > Dirección: { sucursalSeleccionada.direccion } < /p> <
                p > Vendedor: { sucursalSeleccionada.vendedor } < /p> < /
                div >
            )
        } <
        /div>
    );
}

export default ClienteSelectorReact;