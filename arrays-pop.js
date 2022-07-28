// Desadafio 2 - Removendo nota
/* 
Um professor acidentalmente lançou 5 notas no sistema para um aluno:10, 7, 8, 5 e 10; Para corrigir, remova a ultima nota e faça o cálculo da média correta.
*/

const notas = [10, 7, 8, 5, 10];
notas.pop();
console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`A média é ${media}`);
