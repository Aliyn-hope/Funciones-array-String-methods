/* 6. Repetir una cadena:
.- Crea una funcion que permita una cadena un numero especifico de veces usando repeat().*/

function repetirCadena(cadena, veces) {
    return cadena.repeat(veces)
}
const resultado = repetirCadena("Hola ", 4)
console.log(resultado)