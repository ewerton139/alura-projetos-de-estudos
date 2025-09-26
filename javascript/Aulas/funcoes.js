console.clear();


// function Saudacao(nome) { // Parâmetro

//     console.log(`Olá, ${nome}`)
// }

// const Saudacao = (nome) => { // Arrow function (declara como const nomeDaFuncao = (parâmetro) => {bloco de código})
//     console.log(`Fala meu amigo ${nome}`)
// }

const Saudacao = nome => console.log(`Olá ${nome}`) // Arrow function simplificado (apenas quando tem um parâmetro e uma linha de código)

// function CalcularDobro(numero) { // Parâmetro
//     return numero * 2;
// }

// const CalcularDobro = (numero) => {
//     return numero * 2
// }

const CalcularDobro = numero => numero * 2; // Arrow function simplificado (não precisou usar return)

const numeroDobrado = CalcularDobro(4); // Argumento
Saudacao('Fulano'); // Argumento
console.log(`O dobro de 4: ${numeroDobrado}`);