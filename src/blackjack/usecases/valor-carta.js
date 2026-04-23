

/**
 * Esta función verifica el valor de una carta
 * @param {String} carta Ejemplo: '2C'
 * @returns {Number} Retorna el valor de una carta Ejemplo: 2
 */
export const valorCarta = ( carta ) => {

    if ( !carta || carta.length === 0) 
        throw new Error('carta es obligatorio como un arreglo de string')

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
