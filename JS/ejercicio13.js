
/* 13. Concatenar dos cadenas:
crea una funcion que reciba dos cadenas y las concatene usando concat() o +.*/


function concatenarCadenas(cadena1, cadena2) {
    const resultadoConcat = cadena1.concat(cadena2)
    return {
        resultadoConcat
    }
}
const resultado = concatenarCadenas("Enchiladas ", "Verdes!")
console.log( resultado.resultadoConcat)

