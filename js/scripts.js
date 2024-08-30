function gerarParesOrdenados(xMax, yMax) {
    const resultado = [];

    for (let y = 0; y <= yMax; y++) {
        for (let x = 0; x <= xMax; x++) {
            resultado.push([x, y]);
        }
    }
    return resultado.sort()

    return resultado;
}

function gerarPares() {
    const inputMax = document.getElementById('input-number').value;
    const resultadoDiv = document.getElementById('result');

    if (!inputMax.includes(',')) {
        resultadoDiv.textContent = "Por favor, insira os valores de X e Y separados por vírgula.";
        return;
    }

    const valores = inputMax.split(',');
    const xMax = parseInt(valores[0].trim());
    const yMax = parseInt(valores[1].trim());

    if (isNaN(xMax) || isNaN(yMax)) {
        resultadoDiv.textContent = "Por favor, insira números válidos.";
        return;
    }

    const pares = gerarParesOrdenados(xMax, yMax);

    resultadoDiv.textContent = JSON.stringify(pares, null, 2);
}