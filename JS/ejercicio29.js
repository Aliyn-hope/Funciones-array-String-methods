/*29. Comprimir una cadena eliminando letras consecutivas repetidas
Crea una función que elimine las letras consecutivas repetidas en una cadena.
Ejemplo: "aabbccdde" → "abcde"*/


function eliminarRepetidosConsecutivos(cadena) {
    let resultado = ''

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] !== cadena[i - 1]) {
            resultado += cadena[i]
        }
    }

    return resultado;
}
const resultado = eliminarRepetidosConsecutivos("Vamonoooos porfaaavor")
console.log(resultado)
