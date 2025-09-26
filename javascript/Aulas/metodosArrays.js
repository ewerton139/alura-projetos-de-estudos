

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0;
});

const pares = numeros.filter(numero => numero % 2 == 0);

const ted = numeros.find(numero => numero == 3);

const numerosImpares = numeros.filter((numero) => {
    return numero % 2 !== 0;
});


console.log(`Todos os números: `, numeros);
console.log(`Números pares: `, numerosPares)
console.log(`Números impares: `, numerosImpares)

const numerosDobrados = numeros.map((numero) => {
    return numero * 2;
});

console.log(`Numeros dobrados`, numerosDobrados)

