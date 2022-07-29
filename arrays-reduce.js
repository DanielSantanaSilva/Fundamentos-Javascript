// Desafio 14 - Médias das turmas

/* 
Com a média de todos os alunos de 3 salas,
calcule a média geral de cada sala:

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

*/

// Somando com reduce

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0);
  return somaDasNotas / notasDaSala.length;
}
console.log(`Média da sala de Javascript ${mediaSala(salaJS)}`);
console.log(`Média da sala de Java ${mediaSala(salaJava)}`);
console.log(`Média da sala de Python ${mediaSala(salaPython)}`);
//Média da sala de Javascript 7.5
//Média da sala de Java 6.5
//Média da sala de Python 7

// Outro exemplo com reduce

const notas = [10, 6.5, 8, 7.5];
const media = notas.reduce((acum, atual) => acum + atual, 0) / notas.length;

console.log(`Sua média é ${media}`);
// Sua média é 8

// O método reduce() está trabalhando com dois parâmetros. O primeiro é a função callback obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial - no caso, 0.

//A função callback foi escrita diretamente dentro do reduce(), e esta função também está recebendo dois parâmetros, ambos obrigatórios: O valor acumulado e o valor atual.

/*
const soma = numeros.reduce(function (acum, atual) {
    return atual + acum
   }, 0)

O primeiro parâmetro, uma função e o segundo, um número.

*/

/* Outra forma de reescrever seria escrevendo a função callback fora do reduce():

function operacaoNumerica(acum, atual) {
    return atual + acum
   }
   
   const soma = numeros.reduce(operacaoNumerica, 0)
 */

// O reduce() roda o loop no array “por baixo dos panos”, executando para cada elemento a instrução passada na função operacaoNumerica.
