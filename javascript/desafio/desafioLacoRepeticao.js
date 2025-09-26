// Contar quantos numeros pares e quantos numeros impares temos entre 0 e 100
let totalNumerosPares = 0;
let totalNumerosImpares = 0;

for (let cont = 0; cont <= 100; cont++) {
    if (cont % 2 == 0)
        totalNumerosPares++;
    if (cont % 2 > 0)
        totalNumerosImpares++
}

console.log(`Total de numeros pares: ${totalNumerosPares}`);
console.log(`Total de numero impares: ${totalNumerosImpares}`);




