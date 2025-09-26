
// 1. Criando um objeto pessoal
// Crie um objeto com seu nome, idade e profissão.

const pessoa = {
    nome: 'Ewerton',
    idade: 28,
    profissão: 'Dev trainee'
}
// 2. Acessando propriedades
// Acesse e exiba o valor da propriedade "nome" no console.

console.log(pessoa.nome);


// 3. Atualizando valores
// Modifique a propriedade "idade" com um novo valor.

pessoa.idade = 30;
console.log(pessoa.idade);

// 4. Adicionando uma nova propriedade
// Adicione ao objeto uma nova propriedade chamada "cidade".

pessoa.cidade = 'Sorocaba';
console.log(pessoa.cidade);

// 5. Função com objeto
// Crie uma função que recebe um objeto pessoa e retorna uma frase com seus dados.

function objetoPessoa(pessoa) {
    console.log('Segue as informações da pessoa: ', pessoa);
}
objetoPessoa(pessoa);

// 6. Lista de pessoas
// Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade.

const pessoas = [
    { nome: 'Ewerton', idade: 28 },
    { nome: 'Eduardo', idade: 24 },
    { nome: 'Gabi', idade: 16 },
    { nome: 'Arthur', idade: 17 }
]

// 7. Filtrando maiores de idade
// Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.

const maioresIdade = pessoas.filter(pessoa => pessoa.idade >= 18)
console.log(maioresIdade);

// 8. Objeto com método
// Crie um objeto com um método chamado "saudacao" que imprime "Olá, eu sou [nome]".

const usuario = {
    nome: 'Fulano',
    saudacao: function (nome) {
        console.log('Olá, eu sou', this.nome);
    }
}
usuario.saudacao();

// 9. Listando propriedades com for...in
// Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício

for (const propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`)
}


// 10. Cálculo de compra
// Crie um objeto produto com preco e quantidade, e calcule o valor total da compra(preco * quantidade).

const produto = {
    preco: 25.90,
    quantidade: 4
}

const compra = (preco, quantidade) => {
    return preco * quantidade;
}

const calculoCompra = compra(produto.preco, produto.quantidade);

console.log(`A sua compra foi de R$${calculoCompra.toFixed(2)}`);

