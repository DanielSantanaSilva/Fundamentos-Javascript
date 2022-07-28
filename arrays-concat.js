// Desafio 5 - Juntando Turmas

/* 
Haverá uma palestra sobre padrões de projetos para as alunos das salas de Javascript e Python.
Junte ambas as sallas em uma única lista que exiba todas as alunos.
*/

// Concat

const salaDePython = ["Melissa", "Helena", "Rodrigo"];
const salaDeJavascript = ["Juliana", "Leonardo", "Raquel"];

const salaDePalestra = salaDePython.concat(salaDeJavascript);
// método (.concat) realizou a concatenação das duas salas

console.log(salaDePalestra);
// [ 'Melissa', 'Helena', 'Rodrigo', 'Juliana', 'Leonardo', 'Raquel' ]
