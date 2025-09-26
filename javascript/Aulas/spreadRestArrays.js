

const frutas = ['Maçã', 'Banana', 'Goiaba'];
const maisFrutas = ['Uva', 'Morango', 'Kiwi'];
const clona = [...frutas];
const todasAsFrutas = [...frutas, ...maisFrutas];


frutas.push('Pitanga');

console.log(frutas);
console.log(maisFrutas);
console.log(clona);
console.log(todasAsFrutas);

const [primeira, segunda, ...restante] = todasAsFrutas
console.log(primeira, segunda, restante);


