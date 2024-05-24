function calcularIdade(anoNascimento) {
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let mesAtual = dataAtual.getMonth() + 1; // Os meses começam do zero
    let diaAtual = dataAtual.getDate();

    let partesDataNascimento = anoNascimento.split("-");
    let anoNascimentoNum = parseInt(partesDataNascimento[0]);
    let mesNascimentoNum = parseInt(partesDataNascimento[1]);
    let diaNascimentoNum = parseInt(partesDataNascimento[2]);

    let idade = anoAtual - anoNascimentoNum;

    // Verificando se ainda não fez aniversário neste ano
    if (mesAtual < mesNascimentoNum || (mesAtual === mesNascimentoNum && diaAtual < diaNascimentoNum)) {
        idade--;
    }

    return idade;
}

let anoDeNascimento = "1990-04-05";
let idade = calcularIdade(anoDeNascimento);

alert("A idade da pessoa é: " + idade + " anos.");
