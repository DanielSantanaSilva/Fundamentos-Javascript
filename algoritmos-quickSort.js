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