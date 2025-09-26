// 1. Boas-vindas personalizadas
// Crie uma variável chamada nome e atribua seu nome completo. 
// Depois, use console.log() para exibir a mensagem: "Olá, [nome]! Seja bem-vindo(a) ao curso de JavaScript!"

console.clear()
let nomeCompleto = 'Ewerton Okada'
console.log("Olá " + nomeCompleto + '! Seja bem-vindo ao curso de JavaScript!')
console.log(`Olá ${nomeCompleto}! Seja bem-vindo ao curso de JavaScript!`)

// 2. Cálculo de idade
// Crie duas variáveis: anoAtual e anoNascimento. 
// Calcule a idade da pessoa subtraindo os valores e exiba no console: "Você tem [idade] anos."

let anoAtual = 2025
let anoNascimento = 1996
idade = anoAtual - anoNascimento
console.log('Você tem', idade, 'anos')

// 3. Mensagem de localização
// Crie três variáveis com os dados da sua localização: cidade, estado e pais. 
// Em seguida, mostre no console: "Você está em Cidade - Estado, País."

let cidade = 'Sorocaba'
let estado = 'SP'
let pais = 'Brasíl'
console.log(`Você está em ${cidade} - ${estado}, ${pais}`)

// 4. Tipo da variável:
// Crie uma variável chamada temCarteira com valor true ou false. 
// Use console.log(typeof temCarteira) para mostrar o tipo dessa variável.

let temCarteira = true
console.log(typeof temCarteira) // Retorna tipo boolean

// 5. Simulação bancária simples:
// Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um saque de 50. 
// Mostre o saldo final no console com uma frase explicando.

let saldo = 0.00

saldo += 200.00
console.log(`Você depositou R$200,00, seu saldo atual é: R$${saldo.toFixed(2)}`)
saldo -= 50
console.log(`Você sacou R$50,00, seu saldo atual é: R$${saldo.toFixed(2)}`)


// 6. Média de notas:
// Crie variáveis para três disciplinas: matematica, portugues e ciencias, contendo suas respectivas notas. 
// Calcule e mostre a média final com uma mensagem.

let notaMatematica = 7.5
let notaPortugues = 6.0
let notaCientcias = 5.0
let notaMedia = (notaMatematica + notaPortugues + notaCientcias) / 3
console.log(`Sua média final é: ${notaMedia.toFixed(1)}`)

// 7. Reajuste de salário:
// Crie uma variável chamada salario com valor 3000. 
// Calcule um aumento de 10% e mostre o novo salário com uma frase explicando o motivo.

let salario = 3000
salario += 3000 * 0.1 // salario = salario + 3000 * 0.1
console.log(`Seu salário aumentou de R$3000.00 para R$${salario.toFixed(2)}`)

// 8. Contador de cliques:
// Simule um contador de cliques em um botão. 
// Crie uma variável cliques = 0 e incremente 1 a cada "simulação de clique". Mostre o total após 3 simulações.

let cliques = 0
cliques++
cliques++
cliques++
console.log(`O botão foi clicado ${cliques} vezes`)


// 9. Constantes não podem ser alteradas
// Crie uma constante chamada PI com o valor 3.14. 
// Tente alterar seu valor e observe o erro gerado. Depois, explique por que isso acontece.

const pi = 3.14
// pi = 2.14 (CONSTANTE NÃO PODE SER ALTERADA)
// console.log(pi)

// 10. Concatenando tipos diferentes
// Crie uma variável mensagem contendo uma string e outra numero contendo um número. 
// Junte as duas em uma terceira variável e exiba o resultado e o tipo final no console usando typeof.

let mensagem = 'Você esta devendo'
let numero = 500
let concatenacao = `${mensagem} R$${numero}`
console.log(concatenacao)


