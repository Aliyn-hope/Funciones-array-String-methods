/*28. Capitalizar todas las palabras de una frase
Escribe una función que convierta la primera letra de cada palabra de una cadena a
mayúscula.
Ejemplo: "javascript es divertido" → "Javascript Es Divertido"*/

let cadena="la vida es hermosa"

const capitalizarPalabra=(cadena)=> {
    console.log(cadena.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' '))
}
capitalizarPalabra(cadena)