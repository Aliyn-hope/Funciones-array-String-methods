// 8. Extraer una parte de una cadena:
/* Escribe una funcion que devuelva una parte de una cadena usando substring().*/

function extraerParte(cadena, inicio, fin) {
    return cadena.substring(inicio, fin)
}
const texto = "JavaScript"
const parteExtraida = extraerParte(texto, 4, 10)
console.log(parteExtraida)

