/*9. Convertir la primera letra a mayúscula:
Crea una funcion que convierta la oprimera letra de una cadena en mayuscula. */

function capitalizarPrimeraLetra(cadena) {
    if (cadena.length === 0) return cadena
    return cadena.charAt(0).toUpperCase() + cadena.slice(1)
}

const texto = "alondra"
const resultado = capitalizarPrimeraLetra(texto)
console.log(resultado)
