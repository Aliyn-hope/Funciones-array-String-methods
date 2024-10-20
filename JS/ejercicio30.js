/* 30. Contar la frecuencia de caracteres en una cadena
Escribe una función que cuente la frecuencia de cada carácter en una cadena y
devuelva un objeto con los resultados.
Ejemplo: "abbccc" → {a: 1, b: 2, c: 3}*/

function contarFrecuencia(cadena) {
    const frecuencia = {}
    
    for (const caracter of cadena) {
        frecuencia[caracter] = (frecuencia[caracter] || 0) + 1
    }
    
    return frecuencia
}
const resultado = contarFrecuencia("abbccc")
console.log(resultado)
