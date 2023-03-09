function calcularPercentagemRapazes (nrapazes: number, nraparigas:number): number{
    let total: number = 0;
    let percentagem: number = 0.0;
    total = nrapazes + nraparigas;
    percentagem = nrapazes/ total;
    return percentagem;
}

function calcularPercentagemRaparigas (nrapazes: number, nraparigas: number): number{
    let total: number = 0;
    let percentagem: number = 0.0;
    total = nrapazes + nraparigas;
    percentagem = nraparigas/ total;
    return percentagem;
}
export {calcularPercentagemRapazes, calcularPercentagemRaparigas};