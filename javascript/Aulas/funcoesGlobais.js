console.clear();

function saudacao() {
    console.log('Eai cara, blz?')
}

// setTimeout(saudacao, 2000)

let contador = 11;
const id = setInterval(() => {
    contador--;
    console.log(`Tempo decorrido(em segundos)${contador}`)
    if (contador == 0)
        clearInterval(id)
}, 1000)

