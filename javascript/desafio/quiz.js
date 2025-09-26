const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.clear();
console.log('Bem vindo(a) ao Quiz de JavaScript');
console.log('Responda com a letra correta: a, b ou c\n');

let acertos = 0;

rl.question('1) Qual palavra usamos para criar uma função?\n(a) define\n(b) function\n(c) create\n>', (resposta1) => {
    // TODO: incrementar acertos se respondeu corretamente
    if (resposta1 == 'b')
        acertos++;

    rl.question('2) Qual dessas é uma estrutura de repetição?\n(a) loopar\n(b) repeat\n(c) for\n>', (resposta2) => {
        // TODO: incrementar acertos se respondeu corretamente
        if (resposta2 == 'c')
            acertos++;

        rl.question('3) Qual valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) "texto"\n>', (resposta3) => {
            // TODO: incrementar acertos se respondeu corretamente
            if (resposta3 == 'b')
                acertos++;

            //TODO:
            // se acertou tudo, dar os parabéns.
            // se acertou somente 2, muito bom! continue assim!
            // se acertou somente 1, muito bom! continue melhorando!
            // se não acertou nenhuma, continue praticando
            if (acertos == 3) {
                console.log('Parabains!');
            } else if (acertos == 2) {
                console.log('Muito bom! Continue assim!');
            } else if (acertos == 1) {
                console.log('Muito bom! Continue melhorando!');
            } else {
                console.log('Continue praticando borracha.');
            }



            rl.close();
        });
    });
});




