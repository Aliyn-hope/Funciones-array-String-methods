/* 7. Eliminar espacios al inicio y al final.:
.- Crea una funcion que elimine los espaccios en blanco de los extremos de una cadena 
usando trim().*/


let texto = "   Hola mundo   "
function eliminarEspacios(cadena) {
    let resultado = cadena.trim()
    return resultado
}
let textoSinEspacios = eliminarEspacios(texto)
console.log(textoSinEspacios)
