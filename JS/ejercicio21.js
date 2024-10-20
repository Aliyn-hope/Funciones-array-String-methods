/*  21. Reemplazar todas las ocurrencias de una palabra
Crea una función que reemplace todas las ocurrencias de una palabra en una
cadena usando replaceAll().
Ejemplo: "hola hola", "hola", "adiós" → "adiós adiós"*/  


function reemplazarPalabra(cadena, palabraABuscar, nuevaPalabra) {
    return cadena.replaceAll(palabraABuscar, nuevaPalabra)
}
const resultado = reemplazarPalabra("hola hola", "hola", "adiós")
console.log(resultado)
