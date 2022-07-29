// Desafio 6 - Lista com 2 dimensões

/* 
Criar uma lista com os seguintes alunos e alunas:
"João", "Juliana", "Caio", "Ana"

Criar uma lista com as seguintes médias:
10, 8, 7.5, 9
*/

const alunos = ["João", "Juliana", "Caio", "Ana"];
const mediasDosAlunos = [10, 8, 7.5, 9];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

console.log(
  `${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`
);

// listaDeNotasEAlunos[0][0] buscou a lista índice [0] dentro de listaDeNotasEAlunos ou seja array alunos e  no índice de alunos[0] ou seja [João]

console.log(
  `${listaDeNotasEAlunos[0][1]}, sua média é ${listaDeNotasEAlunos[1][1]}`
);
//  Mais um exemplo de posições e índices dados como argimentos para lista com 2 dimensões.
