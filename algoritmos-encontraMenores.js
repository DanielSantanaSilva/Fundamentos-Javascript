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

  //A primeira coisa que a função divideNoPivo() faz é localizar o pivô no meio do array

  //Em seguida, chama a função encontraMenores() que vai contar quantos elementos com valor menor que 22 existem no array, para em seguida trocar o pivô de lugar com o elemento que está na posição seguinte à quantidade de elementos menores.

  encontraMenores(pivo, array);
  let valoresMenores = 0;

  for (let analisando = 0; analisando < array.length; analisando++) {
    let atual = array[analisando];
    //A variável atual guarda o objeto referente ao elemento que será comparado com o valor do pivô, e é dessa variável que pegaremos a propriedade preco.

    if (atual.preco <= pivo.preco && atual !== pivo) {
      trocaLugar(array, analisando, valoresMenores);
      valoresMenores++;
    }
  }
  //Chegamos à condicional if, que faz a comparação cd preco entre o pivô e o atual. Caso o preço do elemento atual seja menor, chamamos a função trocaLugar para trocar a posição do elemento atual com o elemento na posição valoresMenores - lembrando que o valor inicial dessa variável é 0, o que corresponde ao índice do primeiro elemento do array.

  //Destrinchando o intuito da variável valoresMenores: ela está controlando a posição onde serão inseridos os elementos com valores menores que o pivô - lembrando que nesse momento o pivô já está posicionado em seu índice correto.

  //Por esse motivo valoresMenores é iniciada no índice 0: durante o laço for, cada elemento do array tem sua propriedade preco comparada com preco do elemento pivô. Quando é encontrado o primeiro elemento com valor menor (PHP no índice 3), o código entra no bloco if e chama a função trocaLugar() passando como parâmetros de troca a posição do elemento atual e a posição 0, que é o valor da variável valoresMenores neste momento da execução. Isso vai fazer com que um elemento de valor menor que o pivô assuma o lugar de um elemento de valor maior.

  return array;
}

// Em seguida, é feito um loop para passar os elementos com valor menor que o pivô para a esquerda dele, e os de valor maior para a direita.

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

//
