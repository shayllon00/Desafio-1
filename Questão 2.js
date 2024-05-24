let numeros = [15, 8, 90, 75, 102, 6, 2];


let menor = numeros[0];
let maior = numeros[0];


for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

alert("O menor número é: " + menor + "\nO maior número é: " + maior);
