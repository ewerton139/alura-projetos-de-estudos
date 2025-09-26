console.clear()
// 1. Verificação de maioridade
// Crie uma variável idade e verifique se a pessoa 
// é maior de idade (18 anos ou mais). Mostre no console uma mensagem adequada.

let idade = 17

if (idade >= 18)
    console.log(`Sua idade é: ${idade} você é de maior de idade`)

else
    console.log(`Sua idade é: ${idade}, portanto não é de maior de idade`)

// 2. Situação do aluno
// Crie duas variáveis com notas de um aluno. Calcule a média. 
// Se for maior ou igual a 7, mostre "Aprovado". Caso contrário, mostre "Reprovado".

let nota1 = 6.0
let nota2 = 5.5
let media = (nota1 + nota2) / 2

if (media >= 7)
    console.log(`Sua média final é: ${media}, aprovado`)

else
    console.log(`Sua média final é: ${media}, reprovado`)


// 3. Simulação de troco
// Crie uma variável valorCompra com 35.90 e valorPago com 50. 
// Calcule e mostre o troco a ser devolvido.

let valorCompra = 35.90
let valorPago = 50
let troco = valorPago - valorCompra

console.log(`O valor do seu troco a ser devolvido é de: R$${troco.toFixed(2)}`)

// 4. Validação de senha
// Crie duas variáveis com senhas digitadas em momentos diferentes. Verifique se são iguais usando operadores de comparação.

let senha1 = 'banana'
let senha2 = 'maçã'
let comparacao = senha1 == senha2

console.log('As duas senhas são iguais?:', comparacao)

// 5. Controle de faltas
// Considere totalAulas = 80 e faltas = 25. Calcule se as faltas ultrapassam 25% das aulas. Mostre a conclusão no console.

let totalAulas = 80
let faltas = 25
let calculoDeLimiteFalta = totalAulas * 0.25
let conclusão = faltas >= calculoDeLimiteFalta

console.log(`O limite de faltas é de: ${calculoDeLimiteFalta}, a conclusão que você ultrapassou o limite é: ${conclusão}`)

// 6. Verificação de login
// Crie duas variáveis temLogin e temSenha. Use operadores lógicos para verificar se o usuário pode acessar o sistema.

let temLogin = true
let temSenha = false

let Verificacao = temLogin && temSenha

console.log(`O usuario pode logar no sistema?: ${Verificacao}`)

// 7. Valor negado
// Crie uma variável booleana chamada disponível. Mostre seu valor negado no console, ou seja, se estiver disponível, exiba que não está, e vice-versa.

let chamadaDisponivel = true

console.log(`A sua chamada esta ${!chamadaDisponivel} disponivel`)


// 8. Condições compostas
// Crie duas variáveis com números. Verifique se os dois são pares e se são iguais. Exiba a conclusão.

let numero1 = 4
let numero2 = 4

if ((numero1 % 2 === 0 && numero2 % 2 === 0) && (numero1 === numero2)) // Para comparar para ver se são pares, use o operador % e sobrar 0
    console.log('Os numeros são iguais e pares')

else
    console.log('Os numeros não atende os requisitos')



// 9. Calculadora de porcentagem
// Calcule quanto é 15% de 120 usando operadores matemáticos. Mostre a frase: "15% de 120 é igual a X."

let calculoPorcentagem = 120 * 0.15

console.log(`15% de 120 é igual a: ${calculoPorcentagem}`)

// 10. Ordem de operações
// Escreva a expressão 2 + 3 * 5. Mostre o resultado e explique por que a multiplicação foi feita antes da soma.

let multiplicação = 2 + 3 * 5
console.log(`A expressão 2 + 3 * 5 é igual a: ${multiplicação}, por ordem aritmética, multiplicação é feita primeiro que a soma`)


