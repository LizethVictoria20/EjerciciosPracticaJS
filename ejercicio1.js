const prompt = require('prompt-sync')();


function Menu(){
    console.log("1. Ingresar botellas.");
    console.log("2. Consultar saldo.");
    console.log("3. Salir.");
    let option = prompt("Seleccione una opción: ");

    switch(option){
        case "1":
            console.log("Opción 1");
            return IngresarBotellas()
        case "2":
            return console.log("Opción 2");
        case "3":
            return console.log("Opción 3");
            break;
        default:
            return console.log("Ingresa una opción correcta.")

    }
}


function IngresarBotellas(){
    let cantidadBotellas = prompt("Ingrese la cantidad de botellas: ")
    let valorMonetario50 = 0;
    let valorMonetario125 = 0;
    let valorMonetario200 = 0;
    let valorTotalBotellas;
    for (let i = 0; i < cantidadBotellas; i++) {
        let pesoAleatorio = Math.floor(Math.random() * (3000 - 100)) + 100;
        if(pesoAleatorio <= 500){
            valorMonetario50 += 50; 
        }
        else if(pesoAleatorio >= 501 && pesoAleatorio <= 1500){
            valorMonetario125 += 125; 


        }
        else if(pesoAleatorio > 1501) {
            valorMonetario200 += 200; 
        }
    }
    valorTotalBotellas = valorMonetario50 + valorMonetario125 + valorMonetario200
    console.log(`El valor total recolectado es de: $${valorTotalBotellas}`);
    MenuDeConfirmacion()
    Menu()
}


function LoginReciclajeDeBotellas(){
    let usuario = prompt("Ingrese usuario: ")
    let login;
    let intentos = 0;
    if(usuario == "a"){
        while(intentos < 3) {
            let contraseña = prompt("Ingrese contraseña: ")
            if(contraseña == "c"){
                console.log("Lo lograste")
                Menu()
                login = true;
            }
            intentos++;
        }
        console.log("Has superado las cantidad de intentos");
    }
    else {
        console.log("Por favor ingrese un usuario correcto.")
        ReciclajeDeBotellas()
    }
}

function MenuDeConfirmacion(){
    console.log("1. Para recibir el dinero.");
    console.log("2. Para cancelar la operación.");
    let opcion = prompt("Ingrese la opción: ")
    switch(opcion){
        case "1":
           return  console.log("Acreditamos a su saldo total");
        case "2":
            return console.log("Devolviendo material.")
    }
}

Menu()