const prompt = require('prompt-sync')();

function ReciclajeDeBotellas(){
    let usuario = prompt("Ingrese usuario: ")
    let login;
    let intentos = 0;
    if(usuario == "Albus_D"){
        while(intentos < 3) {
            let contraseña = prompt("Ingrese contraseña: ")
            if(contraseña == "caramelosDeLimon"){
                console.log("Lo lograste")
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
ReciclajeDeBotellas()