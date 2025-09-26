
console.clear();

function ex1() {
    // 1. Lista de nomes
    // Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.

    const listaDeNomes = ['Ewerton', 'Eduardo', 'Pão', 'Vilson', 'Charles'];

    for (i = 0; i < listaDeNomes.length; i++) {
        console.log(`Nome:`, listaDeNomes[i]);
    }

}
function ex2() {
    // 2. Adicionar e remover itens
    // Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois.

    const frutas = ['Morango', 'Melância', 'Maçã', 'Banana', 'Laranja'];
    console.log('Lista de frutas:', frutas);

    frutas.push('Abacate');
    console.log('Lista de frutas depois do push:', frutas);

    frutas.shift();
    console.log('Lista de frutas depois do shift:', frutas);

}
function ex3() {
    // 3. Contar itens do array
    // Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length.

    const cidades = ['Sorocaba', 'Votorantim', 'Araçoiaba da Serra', 'Campinas', 'Americo de Campos'];
    console.log(`O número de cidades da lista array é de: ${cidades.length}`);

}

function ex4() {
    // 4. Somar todos os números
    // Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.

    const numeros = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
    let somarNumeros = 0; // Variavél para somar os numeros da array
    for (let i = 0; i < numeros.length; i++) { // for para percorrer a indice da array
        somarNumeros += numeros[i]; // numeros[i] percorre os itens da array e soma com a variavel
    }

    console.log(`A soma dos numeros é de: ${somarNumeros}`);

}
function ex5() {
    // 5. Média de notas
    // Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.

    const notas = [6.5, 7.0, 5.0, 8.0];
    let somaDasNotas = 0;

    for (const nota of notas) {
        somaDasNotas += nota;
    }

    const mediaCalculada = soma => soma / 4;
    const media = mediaCalculada(somaDasNotas);

    if (media >= 7) {
        console.log('Aprovado');
    } else {
        console.log('Reprovado');
    }

    // console.log(somaDasNotas);
}
function ex6() {
    // 6. Mensagens personalizadas com forEach
    // Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um.

    const usuarios = ['PixelFalcon42', 'LunaByteX', 'ZetaNova_87', 'EchoDrift_99', 'CyberKoala21']

    usuarios.forEach((nome, indice) => {
        console.log(`Olá usuario: ${nome}`)
    })

}
function ex7() {
    // 7. Descontos com map
    // Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.

    const precos = [148.50, 312.00, 278.50, 402.00, 198.40];

    const precosDesconto = precos.map((preco) => {
        return preco += (preco * 0.1);
    })

    console.log(`Lista de valores com 10% de desconto:`, precosDesconto);

}
function ex8() {
    // 8. Filtrar valores altos
    // Crie um array com idades. Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.

    const idades = [8, 10, 15, 17, 18, 26, 30, 50];

    const maioridade = idades.filter(idade => idade >= 18);

    console.log(maioridade)

}
function ex9() {
    // 9. Simulando carrinho de compras
    // Crie um array de preços e calcule o valor total da compra. Depois, aplique um cupom de 20% de desconto e mostre o valor final.

    const precos = [40.30, 20.50, 103.20, 230.50];
    let compraTotal = 0;

    for (const preco of precos) {
        compraTotal += preco;
    }
    compraTotal -= compraTotal * 0.2
    const compraDesconto = compraTotal;

    console.log(`O valor final da sua comprar é de: R$${compraDesconto.toFixed(2)}`);

}
function ex10() {
    // 10. Lista de tarefas
    // Crie um array com 5 tarefas (strings). Use filter para mostrar apenas as tarefas que ainda não foram marcadas como concluídas 
    // (use uma convenção como "[x]" para concluídas).

    const tarefas = ['[] Cozinhar', '[x] Arrumar a cama', '[x] Lavar o carro', '[x]Tirar o lixo ', '[] Tomar banho'];

    const tarefasConcluidas = tarefas.filter((tarefa) => {
        return tarefa.includes('[x]');
    })
    const tarefasPendentes = tarefas.filter((tarefa) => {
        return tarefa.startsWith('[]');
    })

    console.log(tarefasPendentes);
    console.log(tarefasConcluidas);

}


