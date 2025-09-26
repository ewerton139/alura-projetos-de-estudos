console.clear();

// 1. Destructuring em objetos
// Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.

const pessoa = {
    nome: 'Fernanda',
    idade: 26,
    email: 'fernandinha123@gmail.com'
}

const { nome, idade, email } = pessoa;

console.log(nome);
console.log(idade);
console.log(email);

// 2. Destructuring em arrays
// Crie um array com 3 linguagens de programação. Use destructuring para criar variáveis ling1, ling2 e ling3.

const linguagens = ['C#', 'Python', 'Ruby'];
const [ling1, ling2, ling3] = linguagens;

console.log(ling1);
console.log(ling2);
console.log(ling3);


// 3. Rest operator em função
// Crie uma função que receba um número qualquer de argumentos e retorne a soma de todos. Use o operador rest (...).

const numeros = [5, 10, 20, 40, 80]

function soma([num1, num2, num3, num4, num5]) {
    return num1 + num2 + num3 + num4 + num5;
}

let somaNumeros = soma(numeros);
console.log(somaNumeros);



// 4. Spread operator com arrays
// Crie dois arrays de frutas e combine-os usando o operador spread.

const frutas = ['Banana', 'Pêra', 'Maçã'];
const maisFrutas = ['Abacate', 'Melância', 'Mamão', 'Morango'];
const todasAsFrutas = [...frutas, ...maisFrutas];

console.log(frutas);
console.log(maisFrutas);
console.log(todasAsFrutas);


// 5. Spread operator com objetos
// Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.

const nomePessoa = {
    nome: 'João sem braço'
}

const idadePessoa = {
    idade: 18
}

const joao = { ...nomePessoa, ...idadePessoa }

console.log(joao);


// 6. Função com parâmetro default
// Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor padrão.

function saudarPessoa(nome) {
    if (nome != '' && nome != null) {
        console.log(`Olá,${nome}`);

    } else {
        console.log('Olá, Visitante');
    }
}

saudarPessoa('');

// 7. Trabalhando com datas
// Crie uma variável com a data atual e exiba o dia, mês e ano formatados.

const dataAtual = new Date()
console.log(dataAtual.toLocaleDateString('pt-BR'));


// 8. Modularização com export/import
// Crie uma função simples chamada somar(a, b) e exporte-a como módulo (modo CommonJS ou ES Modules, dependendo do ambiente).

import { somar } from "./calcularSoma.js";

let entradaNum1 = 8;
let entradaNum2 = 9;

const resultado = somar(entradaNum1, entradaNum2);

console.log(resultado);


// 9. Classe com construtor
// Crie uma classe Livro com propriedades titulo e autor. Crie dois objetos dessa classe.

import { Livro } from "./Livro.js";

const livro1 = new Livro('Annie Frank', 'Diario de Annie Frank');
const livro2 = new Livro('No Game No Life', 'Yuu Kamiya');

console.log(livro1);
console.log(livro2);


// 10. Método dentro da classe
// Adicione um método descrever() à classe Livro que retorna uma string com as informações do livro.

livro1.descrever();
livro2.descrever();



