let frascos = [12, 5, 23, 17, 8, 14, 3, 19];

for (let i = 0; i < frascos.length; i++) {
    for (let j = 0; j < frascos.length - 1; j++) {
        if (frascos[j] > frascos[j + 1]) {
            // Trocar os frascos de posição
            let temp = frascos[j];
            frascos[j] = frascos[j + 1];
            frascos[j + 1] = temp;
        }
    }
}

alert("Os frascos ordenados são: " + frascos.join(", "));
