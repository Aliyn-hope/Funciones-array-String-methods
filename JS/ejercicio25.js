/* 25. Remover caracteres especiales de una cadena
Crea una función que elimine todos los caracteres especiales (como @, #, !) de una
cadena.
Ejemplo: "Hola@mundo!*/

let cadena="Holaco@moe@stas"
const eliminarCaracterEspecial=(cadena)=>{
    return cadena.replace(/[^A-Za-z0-9]/gi, '')
}
console.log(eliminarCaracterEspecial(cadena))