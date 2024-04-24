const prompt = require('prompt-sync')();


function SalarioVendedores(){
    let sueldoBase = parseInt(prompt("Ingrese el sueldo base: "));
    let TotalVentas = parseInt(prompt("Ingrese cuantas ventas realizó: "));
    let valorPorVenta;
    let totalVentas = 0;
    let totalSalario = 0;
    let porcentajeVentas = 0;
    
    
    for (let i = 1; i < TotalVentas + 1; i++) {
        valorPorVenta = parseInt(prompt(`Ingrese el valor de la venta ${i}: `));
        totalVentas += valorPorVenta;
    }

    console.log(totalVentas )
    porcentajeVentas = totalVentas * 0.10;
    totalSalario = sueldoBase + porcentajeVentas
    console.log(`El 10% de las ventas total es: ${porcentajeVentas}`)
    console.log(`El sueldo total es: ${totalSalario}`)
}
SalarioVendedores()
