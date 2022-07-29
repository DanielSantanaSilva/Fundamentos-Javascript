// Desafio 9 - Média

/* 
Calcular a média entre as seguintes notas usando For
10, 6.5, 8, 7.5
*/

const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

let media = somaDasNotas / notas.length;

console.log(media);
//8

//Utilizei o For para calcular a média da Array de Notas.
