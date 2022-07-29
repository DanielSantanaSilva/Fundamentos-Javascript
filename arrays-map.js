// Desafio 11 - Ponto extra

/* 
Um aluno recebeu um ponto extra nas suas nota, adicione esse ponto em suas notas:
10, 9, 8, 7, 6
*/

// Map

const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => (nota == 10 ? nota : ++nota));

console.log(notasAtualizadas);

// O método map retorna com uma nova array
// método map() pode retornar um array se a função informada tiver um return em seu escopo.

