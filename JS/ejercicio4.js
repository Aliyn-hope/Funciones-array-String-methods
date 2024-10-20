/* 4. Comprobar si una cadena contiene una palabra
Crea una función que verifique si una palabra específica está contenida dentro de
una cadena usando includes().
Ejemplo: "JavaScript es genial", "genial" → true  */


let palabrasCadenas 
function contienePalabra(cadena, palabra) {
    palabrasCadenas = cadena.includes(palabra)
    return palabrasCadenas
}
const resultado = contienePalabra("JavaScript es genial", "genial")
console.log(resultado)