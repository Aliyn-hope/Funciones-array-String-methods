/*24. Comprobar si una cadena contiene solo números
Escribe una función que verifique si una cadena contiene solo números.
Ejemplo: "12345" → true */


let cadena="1234"
const soloNumeros=(cadena)=>{
    return /^[0-9]+$/.test(cadena)
}
console.log(soloNumeros(cadena))