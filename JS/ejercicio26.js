/*26. Crear una función que devuelva la palabra más larga en una cadena
Escribe una función que encuentre la palabra más larga en una cadena.
Ejemplo: "Aprender JavaScript es emocionante" → "emocionante"*/


function palabraMasLarga(cadena) {
    const palabras = cadena.split(' ')
    let palabraMaxima = ''

    for (const palabra of palabras) {
        if (palabra.length > palabraMaxima.length) {
            palabraMaxima = palabra
        }
    }

    return palabraMaxima
}
const resultado = palabraMasLarga("Aprender JavaScript es emocionante")
console.log(resultado)