function probarValidarCantidad(){
    console.assert(validarCantidad('') === 'La cantidad no puede estar vacio',
    'validarCantidad, no valido que no sea vacio');

    console.assert(validarCantidad('0') === 'La cantidad no puede ser cero',
    'validarCantidad, no valido que no sea cero');

    console.assert(validarCantidad(-1) === 'La cantidad no puede ser menor a cero',
    'validarCantidad, no valido que no sea menor a cero');

    console.assert(validarCantidad('hola') === 'La cantidad no puede incluir letras',
    'validarCantidad, no valido que no puede incluir letras' );

    console.assert(validarCantidad(10) === '',
    'validarCantidad falló con un numero valido');
}