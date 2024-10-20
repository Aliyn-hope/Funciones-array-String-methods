/* 12. Comprobar si una palabra es un palíndromo: 
Escribe unja funcion que determine si una palabra es un palibromo */ 


function esPalindromo(palabra) {
    const limpiaPalabra = palabra.toLowerCase().replace(/\s+/g, '')
    const palabraInvertida = limpiaPalabra.split('').reverse().join('')
    return limpiaPalabra === palabraInvertida
}

const palabra1 = "Anita lava la tina"
const palabra2 = "Hola"

console.log(esPalindromo(palabra1))
console.log(esPalindromo(palabra2))
