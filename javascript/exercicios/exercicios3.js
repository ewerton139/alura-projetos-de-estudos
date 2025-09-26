
console.clear();

VerificacaoIdade();
SaudacaoHora();
VerificacaoNumeroPositivoNegativo();
ConvercaoNota();
NumeroParImparTernario();
MenuSwitchCase();
ValidarCampoObrigado();
ValidarSenhaSeguranca();
CompraSaldo();
ValidacacaoFormulario();


function VerificacaoIdade() {
    // 1. Verificação de idade para compra de bebida
    // Peça a idade da pessoa em uma variável. Se for 18 ou mais, mostre "Pode comprar bebida alcoólica". 
    // Caso contrário, mostre "Venda proibida para menores de 18 anos".

    let idadeDaPessoa = 18;

    if (idadeDaPessoa >= 18)
        console.log('Pode comprar bebida alcoólica');

    else
        console.log('Venda proibida para menores de 18 anos');

}

function SaudacaoHora() {
    // 2. Saudação de acordo com a hora
    // Crie uma variável horaAtual. Se estiver entre 6 e 12, 
    // mostre "Bom dia"; entre 12 e 18, "Boa tarde"; caso contrário, "Boa noite".

    let horaAtual = 12;

    if (horaAtual >= 6 && horaAtual < 12)
        console.log('Bom dia');

    else if (horaAtual >= 12 && horaAtual <= 18)
        console.log('Boa tarde');

    else
        console.log('Boa noite');

}

function VerificacaoNumeroPositivoNegativo() {
    // 3. Verificação de número positivo ou negativo
    // Crie uma variável com um número qualquer. Mostre se ele é positivo, negativo ou igual a zero.

    let numeroQualquer = 0;

    if (numeroQualquer > 0)
        console.log('Numero positivo');

    else if (numeroQualquer < 0)
        console.log('Numero negativo');

    else
        console.log('Numero igual a zero');

}

function ConvercaoNota() {
    // 4. Conversão de nota em conceito
    // Crie uma variável nota entre 0 e 10. Use if/else if/else para retornar: A (9-10), B (8-8.9), C (6-7.9), D (4-5.9), E (0-3.9).

    let notaDoFulano = 8.9;

    if (notaDoFulano >= 9)
        console.log('A');

    else if (notaDoFulano >= 8 && notaDoFulano < 9)
        console.log('B');

    else if (notaDoFulano >= 6 && notaDoFulano < 8)
        console.log('C');

    else if (notaDoFulano >= 4 && notaDoFulano < 6)
        console.log('D')

    else
        console.log('E')

}

function NumeroParImparTernario() {
    // 5. Número par ou ímpar com ternário
    // Crie uma variável numero. Use o operador ternário para mostrar se ele é par ou ímpar.

    let numeroTernario = 3;

    numeroTernario % 2 == 0 ? console.log('Par') : console.log('Ímpar');

}

function MenuSwitchCase() {

    // 6. Menu com switch-case
    // Crie uma variável opcao com valores de 1 a 3. Use switch para mostrar: 1 - "Cadastrar", 2 - "Listar", 3 - "Sair".

    let opcao = 3;

    switch (opcao) {
        case 1:
            console.log('1 - Cadastrar');
            break;

        case 2:
            console.log('2 - Listar');
            break;

        case 3:
            console.log('3 - Sair');
            break;

        default:
            console.log('Opção Inválida');
            break;
    }

}

function ValidarCampoObrigado() {
    // 7. Validação de campo obrigatório
    // Crie uma variável email. Se estiver vazia (""), mostre "Preencha o campo de e-mail". Caso contrário, mostre "E-mail válido".

    let email = "";

    if (email == "")
        console.log('Preencha o campo de e-mail')

    else
        console.log('E-mail válido')

}

function ValidarSenhaSeguranca() {

    // 8. Validação de senha segura
    // Crie uma variável senha. Se tiver menos de 6 caracteres, mostre "Senha muito curta". Se tiver 6 ou mais, mostre "Senha válida".

    let senha = "asd";

    if (senha.length > 0 && senha.length < 6)
        console.log('Senha muito curta')

    else if (senha == "")
        console.log('Preencha o campo de senha')

    else
        console.log('Senha Válida')

}


function CompraSaldo() {
    // 9. Compra com saldo
    // Crie duas variáveis: saldoDisponivel e valorCompra. Se o saldo for suficiente, mostre "Compra aprovada". Caso contrário, "Saldo insuficiente".

    let saldoDisponivel = 2499
    let valorCompra = 2500

    if (saldoDisponivel >= valorCompra)
        console.log('Compra aprovada')

    else
        console.log('Saldo insuficiente')

}

function ValidacacaoFormulario() {
    // 10. Validação de formulário completo
    // Crie três variáveis: nome, email e idade. Mostre "Formulário enviado com sucesso" apenas se todos os campos estiverem preenchidos e a idade for maior que 0.

    let nome = "a";
    let email = "a";
    let idade = 1;

    if (nome !== "" && email.includes("@") && idade > 0)
        console.log('Formulário enviado com sucesso')

    else
        console.log('Prencha todos os campos corretamente')

}





