console.clear();

function ex1() {
    // 1. Função de saudação
    // Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada.

    function saudacao() {
        console.log('Olá! Seja bem-vindo(a)!')
    }
    saudacao();

}
function ex2() {
    // 2. Função com parâmetros
    // Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos."

    function apresentarPessoa(nome, idade) {
        console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`)
    }
    apresentarPessoa('Ewerton', 28);

}
function ex3() {
    // 3. Cálculo de IMC
    // Crie uma função que receba peso e altura e retorne o valor do IMC. Mostre também uma frase com o resultado.
    function calculoIMC(peso, altura) {
        return peso / (altura * altura)
    }

    const imc = calculoIMC(106, 1.76);
    console.log(`Seu IMC é de: ${imc.toFixed(1)}`)

}
function ex4() {
    // 4. Verificar aprovação
    // Crie uma função verificarAprovacao(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.
    function verificarAprovacao(nota) {
        if (nota >= 7) {
            console.log('Aprovado');
        } else {
            console.log('Reprovado')
        }
    }

    verificarAprovacao(3);

}
function ex5() {

    // 5. Número par ou ímpar
    // Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar. Teste a função com diferentes valores.
    function parOuImpar(numero) {
        if (numero % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }
    const numeroParImpar = parOuImpar(1)
    if (numeroParImpar == true) {
        console.log('Numero é par');
    } else {
        console.log('Numero é ímpar');
    }

}
function ex6() {
    // 6. Função soma
    // Crie uma função que recebe dois números e retorna a soma deles. Exiba o resultado no console com uma frase completa.
    function somar(num1, num2) {
        return num1 + num2
    }
    console.log('Soma' + somar(3, 8));

}
function ex7() {
    // 7. Reutilizando código
    // Reescreva o exercício da calculadora de troco usando uma função calcularTroco(compra, pagamento).
    function calcularTroco(compra, pagamento) {
        return pagamento - compra;
    }
    console.log(`Seu troco é de: R$${calcularTroco(200, 300)},00`)

}
function ex8() {
    // 8. Arrow function
    // Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida.
    const somar = (num1, num2) => num1 + num2
    console.log(`Soma (arrow): ${somar(25, 34)}`)

}
function ex9() {
    // 9. Callback simples
    // Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. Teste passando uma função que imprime "Executando ação!".
    function executarAcao(acao) {
        acao();
    }
    function comandoAcao() {
        console.log('Executando ação!');
    }
    executarAcao(comandoAcao);

}
function ex10() {
    // 10. Desafio do quiz
    // Crie uma função fazerPergunta(pergunta, respostaCorreta). A função deve exibir a pergunta e depois
    // mostrar se a resposta está certa ou errada (simule a resposta com uma variável).

    function fazerPergunta(pergunta, respostaCorreta) {
        pergunta(respostaCorreta);
    }

    function pergunta1(resposta) {
        console.log('FullMetal é bom?\n(a) sim\n(b) não');
        console.log(resposta)
        if (resposta == 'a')
            console.log('Resposta errada!!');

        if (resposta == 'b')
            console.log('Certa resposta!');
    }

    let resposta = 'a'
    fazerPergunta(pergunta1, resposta)

}














