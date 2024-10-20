/*19. Comprobar si una cadena comienza con una palabra:
Crea una funcion que verifique si una cadena comienza con una palabra especifica usando endWith().*/


function comienzaCon(cadena, palabra) {
    return cadena.startsWith(palabra)
}
console.log(comienzaCon("JavaScript es genial", "JavaScript"))// true
console.log(comienzaCon("JavaScript es genial", "es")) // false
