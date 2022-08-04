//Continuando com métodos de ordenação que dividem para conquistar, digamos assim, nós já vimos o merge sort. Vamos dar uma olhada em outra ideia agora, que segue mais ou menos a mesma linha.

// Ordenação pelo pivô

const listaLivros = require("./algoritmos-arrays2");

function encontraMenores(pivo, array) {
  let menores = 0;

  for (let atual = 0; atual < array.length; atual++) {
    let produtoAtual = array[atual];
    if (produtoAtual.preco < pivo.preco) {
      menores++;
    }
  }

  trocaLugar(array, array.indexOf(pivo), menores);
}

function trocaLugar(array, de, para) {
  const elem1 = array[de];
  const elem2 = array[para];

  array[para] = elem1;
  array[de] = elem2;
}

function divideNoPivo(array) {
  let pivo = array[Math.floor(array.length / 2)];
  console.log(pivo);
  //{ titulo: 'Rust', preco: 22 }

  encontraMenores(pivo, array);
  let valoresMenores = 0;

  for (let analisando = 0; analisando < array.length; analisando++) {
    let atual = array[analisando];
    if (atual.preco <= pivo.preco && atual !== pivo) {
      trocaLugar(array, analisando, valoresMenores);
      valoresMenores++;
    }
  }

  return array;
}
console.log(divideNoPivo(listaLivros));

/*
[
  { titulo: 'PHP', preco: 15 },
  { titulo: 'Python', preco: 20 },
  { titulo: 'Rust', preco: 22 },
  { titulo: 'Go', preco: 45 },
  { titulo: 'Elixir', preco: 50 },
  { titulo: 'Java', preco: 30 },
  { titulo: 'Scala', preco: 40 },
  { titulo: 'Ruby', preco: 28 },
  { titulo: 'JavaScript', preco: 25 },
  { titulo: 'C#', preco: 33 },
  { titulo: 'C++', preco: 35 }
]
*/

// No array original Java estava na posição 2 e Rust estava na posição 5. Então trocou de lugar, funcionou o código.

// Java esta na posição 5, lembrando que índice começa em 0.

module.exports = trocaLugar;
