console.clear();

const frutas = ['Uva', 'Banana', 'Kiwi', 'Maçã', 'Morango'];
console.log(frutas);

// console.log(frutas[0]);
// console.log(frutas[4]);
// console.log(`Total de frutas: ${frutas.length}`);
// frutas.push('Melância');
// console.log(`Total de frutas depois de adicionar melância: ${frutas.length}`);
// console.log(`Última fruta: ${frutas[frutas.length - 1]}`);

// frutas.splice(2, 1) // Deleta item da posição da array (posição, quantos)
// console.log(`Depois de remover: `, frutas);

for (i = 0; i < frutas.length; i++) {
    console.log(`Indice: ${i}`)
    console.log(frutas[i]);
}

console.log('-------------------------');
console.log('Usando ForEach');

frutas.forEach((valor, Indice) => { // forEach é um método
    if (Indice == 3)
        console.log(`Indice: ${Indice}\nFruta: ${valor}`);
})

console.log('-------------------------');
console.log('Usando ForOf');

for (const fruta of frutas) {
    console.log(`Fruta da vez: ${fruta}`);
}