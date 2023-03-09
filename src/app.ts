import { calcularPercentagemRapazes, calcularPercentagemRaparigas } from "./lab01";

console.log("Ola turma");

let rapazes: number = 10;
let raparigas: number = 20
let percentagemDeRapazes: number = 0.0;
let percentagemDeRaparigas: number = 0.0;
percentagemDeRapazes = calcularPercentagemRapazes(rapazes,raparigas);
percentagemDeRaparigas = calcularPercentagemRaparigas(rapazes, raparigas);

console.log("percentagem de rapazes = "+ percentagemDeRapazes);
console.log("percentagem de raparigas = "+percentagemDeRaparigas);