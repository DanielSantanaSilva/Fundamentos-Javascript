// Desafio 7 - Procurando na lista

/* 
-Criar uma função que recebe como argumento o nome de um aluno.
-Verificar se o aluno esta presente na lista e retornar a média final que se encontra no mesmo índice.
-Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.
*/

// Includes - IndexOf
// Includes retorna o booleano (true or false)
// IndesOf retorna um número

const alunos = ["João", "Juliana", "Caio", "Ana"];
const mediasDosAlunos = [10, 8, 7.5, 9];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
  if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
    let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
    return (
      listaDeNotasEAlunos[0][indice] +
      ", sua média é " +
      listaDeNotasEAlunos[1][indice]
    );
  } else {
    return "Aluno não esta cadastrado no sistema";
  }
};

console.log(exibeNomeNota("João"));
//João, sua média é 10

console.log(exibeNomeNota("Daniel"));
//Aluno não esta cadastrado no sistema
