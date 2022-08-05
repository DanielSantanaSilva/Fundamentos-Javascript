const listaLivros = require("./algoritmos-arrays2");
const trocaLugar = require("./algoritmos-encontraMenores");

function quickSort(array, esquerda, direita) {
  if (array.length > 1) {
    let indiceAtual = particiona(array, esquerda, direita);
    if (esquerda < indiceAtual - 1) {
      quickSort(array, esquerda, indiceAtual - 1);
    }
    if (indiceAtual < direita) {
      quickSort(array, indiceAtual, direita);
    }
  }
  return array;
}

function particiona(array, esquerda, direita) {
  //A primeira coisa que a função particiona() faz é localizar o pivô no meio do array

  let pivo = array[Math.floor((esquerda + direita) / 2)];
  let atualEsquerda = esquerda; //0
  let atualDireita = direita; //10

  while (atualEsquerda <= atualDireita) {
    while (array[atualEsquerda].preco < pivo.preco) {
      atualEsquerda++;
    }

    while (array[atualDireita].preco > pivo.preco) {
      atualDireita--;
    }

    if (atualEsquerda <= atualDireita) {
      trocaLugar(array, atualEsquerda, atualDireita);
      atualEsquerda++;
      atualDireita--;
    }
  }
  return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));

/*
{ titulo: 'Rust', preco: 22 }
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
[
  { titulo: 'PHP', preco: 15 },
  { titulo: 'Python', preco: 20 },
  { titulo: 'Rust', preco: 22 },
  { titulo: 'JavaScript', preco: 25 },
  { titulo: 'Ruby', preco: 28 },
  { titulo: 'Java', preco: 30 },
  { titulo: 'C#', preco: 33 },
  { titulo: 'C++', preco: 35 },
  { titulo: 'Scala', preco: 40 },
  { titulo: 'Go', preco: 45 },
  { titulo: 'Elixir', preco: 50 }
]
*/

//O quick sort utiliza o princípio do elemento pivô para fazer a ordenação dos elementos.

//Em nosso código, utilizamos sempre o elemento do meio do array como pivô para separar maiores e menores, porém a posição do pivô com relação ao array completo vai sendo modificada durante a ordenação. O array original vai ser “fatiado” em pequenas partes, e sempre que isso acontece é definido um novo pivô a partir do meio do array.

/* Dica:

Posicionar o pivô no primeiro elemento do array pode levar o algoritmo a se comportar no pior caso possível, se o array já tiver algum tipo de ordenação interna.
Observando a simulação que fizemos na aula, vemos que a ordenação do array é feita em partes bem pequenas para que depois ele seja reconstruído. Desconstruir essas partes já ordenadas, para desordená-las temporariamente e só depois reconstruí-las não é uma boa escolha.
*/
