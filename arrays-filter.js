// Desafio 13 - Filtrando por nota

/* 
Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre os alunos:
["Ana", "Marcos", "Maria", "Mauro"]
7, 4.5, 8, 7.5
*/

// Filter

const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const notas = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((nome, indice) => notas[indice] < 5);

console.log(`Lista de reprovados: ${reprovados}`);
// Lista de reprovados: Marcos

//Filter pede que que o primeiro parâmetro seja uma função callback

//Ele funciona com base de comparação.

//Dica: Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no array de retorno, e quando ela retorna falso, ou false, o elemento é descartado.
