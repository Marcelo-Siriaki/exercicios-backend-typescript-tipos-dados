const palavra1: string = "programador";

function soletrador(palavra: string): string {
    let palavraSoletrada: string = "";

    for (let i = 0; i < palavra.length; i++) {
        if (i === 0) {
            palavraSoletrada = palavra[i];
        } else {
            palavraSoletrada = palavraSoletrada + "-" + palavra[i];
        }
    }

    return palavraSoletrada;
}

console.log(soletrador(palavra1));