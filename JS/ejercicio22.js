/*22. Convertir una frase a camelCase
Escribe una función que convierta una frase a formato camelCase.
Ejemplo: "hola mundo en javascript" → "holaMundoEnJavascript"*/

let cadena= 'hola mundo de javascript';
const toCamelCase = nuevo=> {
    return nuevo.split(' ').map((palabra, index) => {
        if (index === 0) {
            return palabra.toLowerCase();
        } else {
            return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        }
    }).join('');
};

console.log(toCamelCase(cadena));