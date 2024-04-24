/*
 Construir una función que reciba como parámetro un carácter y retorne el código ASCII asociado a él.
*/
const prompt = require('prompt-sync')();

function CodigoASCII(){
    let ingreseCaracter = prompt("Ingrese un cáracter: ")
    let codigo = ingreseCaracter.charCodeAt(0);
    console.log(codigo);
}
CodigoASCII()
