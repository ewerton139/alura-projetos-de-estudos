const pessoa = { // criando objeto e declarando suas propriedades
    nome: 'Ana', // propriedade nome
    idade: 26,   //propriedade idade
    temCNH: true //propriedade temCNH
}

pessoa.sobrenome = 'Paula'; // Criando uma nova propriedade para o objeto

// console.log('Nome:', pessoa.nome);
// console.log('Sobrenome:', pessoa.sobrenome);

const livro = { // objeto livro
    titulo: 'A volta dos que não foram',
    paginas: 323,
}

livro.publicado = true; // nova propriedade do objeto livro
livro.idiomas = [ // nova propriedade do objeto livro com array
    'Inglês', 'Português', 'Espanhol'
]

livro.idiomas.push('Mandarim'); // método .push serve para adicionar um novo valor dentro da array da propriedade
livro.idiomas.push('Francês');

console.log('Livro antes:', livro);

delete livro.paginas; // aqui foi deletado a propriedade paginas do objeto livro

console.log('Livro depois', livro);

console.log('Autor do livro:', livro['autor']);

const autor = {
    nome: 'J R R Tolkien',
    nacionalidade: 'Britanico',
    idade: 98,
    livros: [livro]
}

livro.autor = autor; // aqui foi criado uma nova propriedade autor do objeto livro que é atribuido de outro objeto autor

console.log(livro); // Será exibido as propriedades do objeto livro e uma de suas propriedades é um objeto que também possui propriedades e será exibida


const pessoas = [ // Array do objeto pessoas, ela tem propriedades nome e idade
    { nome: 'Ewerton', idade: 28 },
    { nome: 'Eduardo', idade: 24 },
    { nome: 'Gabi', idade: 16 },
    { nome: 'Arthur', idade: 17 }
]
// maioresIdade recebe uma nova array nome e idade que são maiores ou igual a 18
const maioresIdade = pessoas.filter(pessoa => pessoa.idade >= 18) // aqui foi criado uma constante para pegar o objeto pessoas e usar método .filter para comparar
// as idades das pessoas se são maior ou igual a 18 

console.log(maioresIdade);

