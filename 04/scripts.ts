const produto1: { produto: string, lote: number, ano: number, qtd: number } = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}

const etiquetaMaker = (product: { produto: string, lote: number, ano: number, qtd: number }): string[] => {

    const resultado: string[] = [];

    if (product.qtd > 0) {
        for (let i = 1; i <= product.qtd; i++) {
            const qtdFormatada = String(i).padStart(3, '0');
            resultado.push(`${product.lote}-${product.ano}-${qtdFormatada}`);
        }
    }

    return resultado;
}

console.log(etiquetaMaker(produto1));