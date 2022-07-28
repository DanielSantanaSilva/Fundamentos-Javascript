// Desafio 3 - Sala dividida

/* 
Divida os alunos da sala abaixo em duas listas com a mesma quantidade de alunos.

"João", "Juliana", "Ana", "Caio", "Lara","Marjorie", "Guilherme", "Aline", "Fabiana", "Andre", "Carlos", "Pailo", "Bia", "Vivian", "Isabela", "Vinícius", "Renan", "Renata", "Daisy", "Camilo"
*/

const nomes = [
  "João",
  " Juliana",
  " Ana",
  " Caio",
  " Lara",
  " Marjorie",
  " Guilherme",
  " Aline",
  " Fabiana",
  " Andre",
  " Carlos",
  " Paulo",
  " Bia",
  " Vivian",
  " Isabela",
  " Vinícius",
  " Renan",
  " Renata",
  " Daisy",
  " Camilo",
];

console.log("Tamanho da array: ", nomes.length);

const turma1 = nomes.slice(0, nomes.length / 2);
// 0-10
const turma2 = nomes.slice(nomes.length / 2);
// 10-20
console.log(`Alunos da Turma 1: ${turma1}.`);
console.log(`Alunos da turma 2: ${turma2}.`);
