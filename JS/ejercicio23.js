/* 23. Truncar una cadena a un numero de caracteres
Truncar una cadena a un nunmero de caracteres;
Crea una función que trunque una cadena a un número específico de caracteres,
agregando ... al final si es más larga.
Ejemplo: "JavaScript es genial", 10 → "JavaScri..."*/ 

function truncarCadena(cadena, longitud) {
    if (cadena.length > longitud) {
        return cadena.slice(0, longitud) + '...'
    }
    return cadena
}
const resultado = truncarCadena("JavaScript es genial", 10)
console.log(resultado)
