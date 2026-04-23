

/**
 * Esta función permite tomar la última carta del deck
 * @param {Array<String>} deck es un arreglo de string Ejemplo: ['AC','AD','AH','AS']
 * @returns {String} Retorna la última carta eliminada del arreglo Ejemplo: ['AS']
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) 
        throw new Error('No hay cartas en el deck')

    const carta = deck.pop();
    return carta;
}
