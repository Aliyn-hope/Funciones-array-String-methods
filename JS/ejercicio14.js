/* 14. Obtener el carácter en una posición;
Escribe una funcion que devuelva el caracter en una posicion especifica de una cadenas usando charAt(). */


function obtenerCaracter(cadena, posicion) {
    if (posicion < 0 || posicion >= cadena.length) {
        return "Posición fuera de rango"
    }
    return cadena.charAt(posicion)
}
const cadena = "Sombrilla"
const posicion = 0
console.log(obtenerCaracter(cadena, posicion))
