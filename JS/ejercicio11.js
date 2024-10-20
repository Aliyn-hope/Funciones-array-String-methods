/* 11. Revertir una cadena:
Crea una funcion que tome una cadena y la devuelva inertida. */

function revertirCadena(cadena) {
    return cadena.split('').reverse().join('')
}
const cadenaOriginal = "Flores de loto"
const cadenaInvertida = revertirCadena(cadenaOriginal)
console.log(cadenaInvertida)
