const pessoa = {
    nome: 'Ewerton',
    idade: 28,
    genero: 'Masculino',
    nacionalidade: 'Brasileira'
}

for (const chave in pessoa) { // for in serve para
    console.log('Chave:', chave);
    console.log('Valor:', pessoa[chave]);
}

const chaves = Object.keys(pessoa);
const valores = Object.values(pessoa);
const entradas = Object.entries(pessoa);

console.log('Chaves: ', chaves);
console.log('Valores: ', valores);
console.log('Entradas (chave/valor): ', entradas);



