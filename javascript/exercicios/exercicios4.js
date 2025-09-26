
console.clear();
// 1. Contador de 1 a 10
// Use um for para mostrar no console os números de 1 até 10, um por linha.

for (let contador = 1; contador <= 10; contador++)
    console.log(contador);


// 2. Soma de 1 a 100
// Some todos os números de 1 a 100. Mostre o resultado no final com uma mensagem explicativa.

let soma = 0;
for (let cont = 1; cont <= 100; cont++) {
    soma += cont;
}
console.log(soma);

// 3. Tabuada personalizada
// Peça um número e mostre a tabuada desse número (de 1 a 10) usando um for.

let numeroTabuada = 3;

for (cont = 1; cont <= 10; cont++) {
    console.log(`${numeroTabuada} x ${cont} = ${numeroTabuada * cont}`);
}

// 4. Contagem regressiva
// Use while para contar de 10 até 0 no console. Mostre uma mensagem no fim: "Contagem finalizada!".

let contRegressiva = 10;

while (contRegressiva >= 0) {
    console.log(`Contagem regressiva: ${contRegressiva}`);
    contRegressiva--;
}
console.log('Contagem finalizada!');

// 5. Receber números até digitar 0
// Use do...while para simular a entrada de números. O programa deve continuar até que o usuário digite 0. Ao final, mostre quantos números foram digitados.

// 7. Idade ao longo dos anos
// Crie uma variável anoNascimento e anoAtual. Use um for para listar a idade da pessoa ano a ano até o ano atual.

let anoNascimento = 1996;
let anoAtual = 2025;

for (let ano = anoNascimento; ano <= anoAtual; ano++) {
    console.log(`No ano ${ano} você tinha ${ano - anoNascimento}`);
}

// 8. Listando números pares
// Mostre todos os números pares entre 1 e 50 usando for.

for (let cont = 1; cont <= 50; cont++) {
    if (cont % 2 == 0)
        console.log(`Numero par: ${cont}`)
}

// 9. Contar múltiplos de 3 entre 1 e 100
// Mostre no console quantos números entre 1 e 100 são divisíveis por 3.

let numeroMult3 = 0;

for (let cont = 1; cont <= 100; cont++) {
    if (cont % 3 == 0)
        numeroMult3++;
}
console.log(numeroMult3);

// 10. Menu com repetição
// Crie um menu simples que exibe opções como "1 - Ver saldo", "2 - Fazer depósito", "3 - Sair". 
// Use do...while para repetir o menu até o usuário escolher sair.

let opcao = 3;

do {
    console.log('1 - Ver saldo');
    console.log('2 - Fazer depósito');
    console.log('3 - Sair')

    switch (opcao) {
        case 1: console.log('Vendo saldo');
            break;

        case 2: console.log('Depositando');
            break;

        case 3: console.log('Saindo');
    }

} while (opcao != 3)




