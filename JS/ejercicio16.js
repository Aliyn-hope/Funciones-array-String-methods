/* 16. Convertir una cadena en un array de palabras:
Escribe una funcion que divida una cadena en un array de palabras usando split().*/

function convertirCadenaEnArray(cadena) {
    return cadena.split(" ")
}
const cadena = "Mi nombre es Alondra Sanchez"
const arrayPalabras = convertirCadenaEnArray(cadena)
console.log(arrayPalabras)
