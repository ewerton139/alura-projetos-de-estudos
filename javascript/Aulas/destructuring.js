
const pessoa = {
    nome: 'Nathália',
    idade: 19,
    profissao: 'Estudante'
}


// const { nome, idade } = pessoa; // destructuring

// console.log(nome);
// console.log(idade);

function saudacao({ nome, idade }) {  // aqui foi utilizado destructuring para acessar apenas duas propriedades do objeto
    console.log('Olá,', nome)
    if (idade > 18)
        console.log(`Maior de idade`);
}

saudacao(pessoa);

const frutas = ['uva', 'banana'];

const [primeira, segunda] = frutas; // destructuring em array

