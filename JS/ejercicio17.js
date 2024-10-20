/* 17. Contar el número de palabras en una cadena: 
Escribe una funcion que divida una cadena en un array de palabras usando split() y length.*/


function contarPalabras(cadena) {
    const palabras = cadena.split(" ")
    return palabras.length
}
const cadena = "JavaScript es genial"
const numeroDePalabras = contarPalabras(cadena)
console.log(numeroDePalabras)
