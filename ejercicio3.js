const prompt = require('prompt-sync')();

function TotalDigitos(){
    let digito = parseInt(prompt("Ingrese: "));
    let contador = 0;
    while(digito >= 1){
        contador += 1;
        digito = digito / 10;
    }
    console.log(`La cantidad de digitos es ${contador}`);
}
TotalDigitos()
