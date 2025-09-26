

console.clear();

// Estrutura do laço de repetição FOR
// for (let contador = 1; contador <= 10; contador++) {
//     console.log(`Numero atual: ${contador}`);
// }


for (let numero = 0; numero <= 15; numero++) {
    if (numero % 2 === 0) // Se o resto da divisão for 0, imprimi os numeros pares
        console.log(`Numero par: ${numero}`)

}

for (let numero = 0; numero <= 15; numero++) {
    if (numero % 2 > 0) // Se o resto da divisão for maior que 0, imprimi numeros ímpares
        console.log(`Numero ímpar: ${numero}`)

}

const palavra = 'Minha calopsita amarela';


// palavra.lenght indica quantos caracteres uma string possui
// palavra[1] - pega a letra na posição indicada

for (let contador = 0; contador < palavra.length; contador++) {
    console.log(palavra[contador])
}








