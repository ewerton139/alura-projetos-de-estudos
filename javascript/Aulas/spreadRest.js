let camila1 = {
    nome: 'Camila',
    idade: 29,
    profissao: 'Desenvolvedora'
}

const camila2 = { ...camila1 }; // spread (clona as propriedades de outro objeto)

camila2.idade = 30;
console.log(camila2);

camila1 = {
    ...camila2,
    profissao: 'Desenvolvedora Senior',
    possuiCNH: true
}

console.log(camila1);

const { nome, ...restante } = camila1; // rest (Usado para separar as propriedades em variavel diferente e pegar o restante usar em outra variavel)
console.log(nome, restante);





