let numeros = [23, 16, 11, 8, 19, 14, 5, 21];
let primos = [];

function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i < numeros.length; i++) {
    if (ehPrimo(numeros[i])) {
        primos.push(numeros[i]);
    }
}

alert("Os números primos na lista são: " + primos.join(", "));
