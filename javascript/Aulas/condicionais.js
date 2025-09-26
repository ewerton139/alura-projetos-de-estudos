console.clear()
const idade = 17

if (idade >= 18)
    console.log('É maior de idade')

else
    console.log('É de menor de idade')

// Condição ternário
// idade >= 18 ? console.log('Maior de idade') : console.log('Menor de idade')

const notaDoAluno = 8

//entre 9 e 10 Excelente
//entre 7 e 8 Bom
//entre 4 e 6 Ruim
//entre 0 e 3 Péssimo

if (notaDoAluno >= 9)
    console.log("Excelente")

else if (notaDoAluno >= 7)
    console.log('Bom')

else if (notaDoAluno >= 4)
    console.log('Ruim')

else
    console.log('Péssimo')

// Condição ternário
// notaDoAluno >= 9 ? console.log('Excelente') :
//     notaDoAluno >= 7 ? console.log('Bom') :
//         notaDoAluno >= 4 ? console.log('Ruim') :
//             console.log('Péssimo')