/// <reference types="jquery" />


fetch('https://api.exchangerate.host/symbols')
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {

        let simbolosMonedas = Object.values(respuestaJSON.symbols);
        agregarValoresPredeterminados();
        formatearFechaDelDia();
        agregarOptions(simbolosMonedas);
    });


$('#boton-convertir').on('click', function () {

    $('#cantidad-moneda-2').val('');
    const cantidad = $('#cantidad').val();
    const errorCantidad = validarCantidad(cantidad);
    const esExito = manejarErroresCantidad(errorCantidad);

    if (esExito) {
        const moneda1 = $("#moneda-1 option:selected").attr('name');
        const moneda2 = $("#moneda-2 option:selected").attr('name');
        const fecha = $('#fecha').val();
        


        if (cantidad > 1) {
            fetch(`https://api.exchangerate.host/convert?from=${moneda1}&to=${moneda2}&date=${fecha}&amount=${cantidad}`)
                .then(respuesta => respuesta.json())
                .then(respuestaJSON => {

                    $('#cantidad-moneda-2').val(respuestaJSON.result);

                });
        } else {
            fetch(`https://api.exchangerate.host/convert?from=${moneda1}&to=${moneda2}&date=${fecha}`)
                .then(respuesta => respuesta.json())
                .then(respuestaJSON => {

                    $('#cantidad-moneda-2').val(respuestaJSON.result);

                });
        }
    }




});







