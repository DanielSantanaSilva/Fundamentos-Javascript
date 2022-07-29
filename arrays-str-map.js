// Desafio 12 - Padronizando os nomes

/* 
Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas:

["ana julia", "Caiuo vinicius", "BIA silva"]
*/

// Map

let nomes = ["ana julia", "Caiuo vinicius", "BIA silva"];
const nomesAtualizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesAtualizados);

//Utilizado método map para percorrer ps índices da array, e passei dentro da função o método toUpperCase para deixar as letras maiúsculas.
