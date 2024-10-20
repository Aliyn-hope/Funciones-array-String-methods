/* 20. Reemplazar todas las ocurrencias de una palabra_:
Escribe una funcion que verifique si una cadena termina con palabras especifica usando endWith().*/


function terminaCon(cadena, palabra) {
    return cadena.endsWith(palabra)
}
const resultado = terminaCon("JavaScript es genial", "genial")
console.log(resultado)
