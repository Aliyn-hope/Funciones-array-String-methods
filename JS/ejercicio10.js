/* 10. Contar ocurrencias de una letra en una cadena:
Crea una funcion que cuente cuantas veces aparece una letra especifica en una cadena. 
*/


function contarOcurrencias(cadena, letra) {
    let contador = 0
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === letra) {
            contador++
        }
    }
    return contador
}
const texto = "Kokesio"
const letraBuscada = "o"
const resultado = contarOcurrencias(texto, letraBuscada)
console.log(resultado)
