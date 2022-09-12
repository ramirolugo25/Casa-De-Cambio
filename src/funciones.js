function agregarValoresPredeterminados(){
    $('#moneda-1').append(`<option name='BTC'>BTC - Bitcoin</option>`);
    $('#moneda-2').append(`<option name='USD'>USD - United States Dollar</option>`);
    $(`#boton-convertir`).trigger('click');
}

function formatearFechaDelDia(){
    const fecha = new Date();
    let dia = String(fecha.getDate());
    let mes = String(fecha.getMonth() + 1);
    let anio = String(fecha.getFullYear());

    if(Number(mes) < 10){
        mes = '0' + mes
    }
    if(Number(dia) < 10){
        dia = '0' + dia
    }

    $('#fecha').val(`${anio}-${mes}-${dia}`);
    //Restriccion de fecha a elegir
    $('#fecha').attr('min', '2000-01-01');
    $('#fecha').attr('max', `${anio}-${mes}-${dia}`);
}


function agregarOptions(simbolosMonedas){
    simbolosMonedas.forEach(simbolo => {
        $('select').append(`<option name='${simbolo.code}'>${simbolo.code} - ${simbolo.description}</option>`);
    }); 
}



function validarCantidad(cantidad){
    if(cantidad === ''){
        return 'La cantidad no puede estar vacio';
    }
    if(cantidad === '0'){
        return 'La cantidad no puede ser cero';
    }
    if(cantidad < 0){
        return 'La cantidad no puede ser menor a cero';
    }
    if(!/^[0-9]+$/.test(cantidad)){
        return 'La cantidad no puede incluir letras';
    }

    return '';
}

function manejarErroresCantidad(error){
    $('#errores p').remove();
    if(error){
        $('#cantidad').addClass('error');
        $('#errores').append(`<p class='texto-error'>${error}</p>`);
        return false
    }else{
        $('#cantidad').removeClass('error');
        return true;
    }
}




