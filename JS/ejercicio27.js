/* 27. Convertir una cadena a snake_case
Crea una función que convierta una cadena a formato snake_case.
Ejemplo: "Hola Mundo" → "hola_mundo"*/


function convertirASnakeCase(cadena) {
    return cadena
        .toLowerCase() 
        .replace(/\s+/g, '_')
}
const resultado = convertirASnakeCase("Tengo Sueño")
console.log(resultado)
