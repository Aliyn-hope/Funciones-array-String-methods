/*18. Eliminar todas las vocales de una cadena:
Eescribe una funcion que elimine todas las vocales de una cadena.*/

function eliminarVocales(cadena) {
    return cadena.replace(/[aeiouAEIOU]/g, "")
}
const cadena = "Eres Genial amigo"
const resultado = eliminarVocales(cadena)
console.log(resultado)
