// Desafio 4 -Atualizando lista

/* 
Crie uma lista de chamada com os seguintes alunos:
"João", "Ana", "Caio", "Lara","Marjorie", "Leo".
Porém, a Ana e Caio mudaram de escola e o Rodrigo entrou na sala. Atualize a lista
*/

// Splice

const listaDeChamada = [" João", " Ana", " Caio", " Lara", " Marjorie", " Leo"];

listaDeChamada.splice(1, 2, " Rodrigo");
console.log(`Lista de chamada:${listaDeChamada}`);
//Lista de chamada: João, Rodrigo, Lara, Marjorie, Leo
