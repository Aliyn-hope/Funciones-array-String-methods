/* 15. Obtener el último carácter de una cadena:
Crea una funcion que devuelva el ultimo caracter de una cadena sin usar length. */


function obtenerUltimoCaracter(cadena) {
    return cadena.slice(-1)
}
const cadena = "Holaa"
console.log(obtenerUltimoCaracter(cadena))
