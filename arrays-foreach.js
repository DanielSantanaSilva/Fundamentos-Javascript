// Desafio 10 - Média com ForEach

/* 
Calcular a média entre as seguintes notas usando ForEach:
10, 6.5, 8, 7.5
*/

//forEach

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//callback
notas.forEach((nota) => {
  somaDasNotas += nota;
});

let media = somaDasNotas / notas.length;

console.log(media);

// Dica:para este método (forEach), essa função tem o nome de callback e vai ser executada para cada elemento do array, sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamente.

// Dica: o método forEach não tem um retorno

// Exercício feito com For

const notas1 = [10, 6.5, 8, 7.5];
let media1 = 0;

for (let i = 0; i < notas1.length; i++) {
  media1 += notas1[i] / notas1.length;
}

console.log(media1);
