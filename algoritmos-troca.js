//Durante a aula, utilizamos duas vezes a seguinte estrutura de código:
/*
let itemAnalise = lista[analise];
let itemAnterior = lista[analise - 1];

lista[analise] = itemAnterior
lista[analise - 1] = itemAnalise
*/

//Repetição de código quase sempre é sinal de que o trecho repetido poderia ser extraído para uma função, assim pode ser reaproveitado. Vamos ver como podemos fazer isso:

//Vamos começar criando um novo arquivo, que vamos chamar de troca.js, e dentro dele a função:

function troca(lista, analise) {
  let itemAnalise = lista[analise];
  let itemAnterior = lista[analise - 1];

  lista[analise] = itemAnterior;
  lista[analise - 1] = itemAnalise;
}

//Veja que a função troca() está fazendo alterações direto na lista que está sendo passada por parâmetro; assim, essa função não precisa retornar nenhum valor.

module.exports = troca;
