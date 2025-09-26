

console.clear();
// let contador = 1;

// while (contador <= 10) {
//     console.log(`Numero atual: ${contador}`);
//     contador++;
// }



// let numero = 1;
// do { // do executa o bloco de código pelo menos uma vez
//     console.log(`Numero atual: ${numero}`)
//     numero++;
// } while (numero <= 10)

let numero = 0;

while (numero <= 15) {
    if (numero % 2 == 0) {
        console.log(`Numeros pares: ${numero}`);
    }
    numero++;
}

let palavra = 'Esta variavél contém um texto gigante';
let cont = 0;

while (cont < palavra.length) {
    console.log(palavra[cont]);
    cont++;
}

console.log('------------------------');

const palavra2 = "exemplo";

// Alternativa para percorrer os caracteres da string
for (const caractere of palavra2) {
    console.log(caractere);
}




