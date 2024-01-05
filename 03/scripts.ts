let resultados: string = '';

function tabuada(numeros: number[]): string {

    for (const numero of numeros) {
        resultados = resultados + `
        ${numero} X 0 = ${numero * 0}
        ${numero} X 1 = ${numero * 1}
        ${numero} X 2 = ${numero * 2}
        ${numero} X 3 = ${numero * 3}
        ${numero} X 4 = ${numero * 4}
        ${numero} X 5 = ${numero * 5}
        ${numero} X 6 = ${numero * 6}
        ${numero} X 7 = ${numero * 7}
        ${numero} X 8 = ${numero * 8}
        ${numero} X 9 = ${numero * 9}
        ${numero} X 10 = ${numero * 10}
        --------------------

        `
    }
    return resultados;
}

console.log(tabuada([1, 3, 7]));

