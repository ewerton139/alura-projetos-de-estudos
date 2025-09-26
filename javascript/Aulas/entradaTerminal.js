const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.clear();
leitor.question('Qual é o seu nome? ', (nome) => {
    console.log(`Olá ${nome}`);
    console.log('Boas vindas ao sistema!');

    leitor.question('Qual sua idade? ', (idade) => {
        if (idade > 18) {
            console.log('Uau você já pode tirar CNH')
        } else {
            console.log('Você ainda não pode tirar sua CNH')
        }

        leitor.close();

    })

})