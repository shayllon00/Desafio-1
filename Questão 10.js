let frase = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
let letrasMaiusculas = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] >= 'A' && frase[i] <= 'Z') {
        letrasMaiusculas++;
    }
}

alert("O número de letras maiúsculas na frase é: " + letrasMaiusculas);
