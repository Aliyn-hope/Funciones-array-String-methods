/* 2. Convertir a mayúsculas
Crea una función que convierta una cadena de texto en mayúsculas usando el
método toUpperCase().
Ejemplo: "Hola" → "HOLA"  */


let texto = "hola mundo"

function convertirMayusculas(cadena){
    return cadena.toUpperCase()
    
}
console.log(convertirMayusculas(texto))