/* 5. Reemplazar una palabra en una cadena
Escribe una función que reemplace una palabra específica en una cadena con otra
palabra usando replace().
Ejemplo: "Hola mundo", "mundo", "amigo" → "Hola amigo" */ 


let palabras
function reemplazarPalabra(cadena, palabraVieja, palabraNueva) {
   palabras = cadena.replace(palabraVieja, palabraNueva)
   return palabras
}
const resultado = reemplazarPalabra("Hola mundo", "mundo", "amigo")
console.log(resultado)

