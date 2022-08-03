// Outro exemplo de ordenação

const livros = require("./algoritmos-listaLivros");
const troca = require("./algoritmos-troca");

function insertionSort(lista) {
  for (let atual = 0; atual < lista.length; atual++) {
    let analise = atual;
    while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
      troca(lista, analise);
      analise--;
    }
  }
  console.log(lista);
}

insertionSort(livros);

/*
[
  { titulo: 'PHP', preco: 15 },
  { titulo: 'python', preco: 20 },
  { titulo: 'Javascript', preco: 25 },
  { titulo: 'Java', preco: 30 },
  { titulo: 'Go', preco: 45 },
  { titulo: 'Elixir', preco: 50 }
]
*/

//Fazendo dessa forma, qualquer pessoa que ler a função sabe que ela está pronta para receber listas de produtos diversos, desde que contenham a propriedade preco.

//Dica:Embora resolvam o mesmo problema de ordenação, a lógica por trás de Selection Sort e Insertion Sort funciona de forma diferente. Durante o desenvolvimento do algoritmo e os testes de mesa, o resultado final é o mesmo (uma lista ordenada), porém a forma como o algoritmo foi pensado e a forma como foi traduzido em código é diferente.

// Utilizado Teste de mesa - desk checking, para verificar o funcionamento de cadas parte do código.

//teste de mesa é justamente o processo manual de verificar todas as linhas de um código e executá-lo passo a passo com ajuda de, por exemplo, papel e lápis para anotar qual os valores das variáveis em cada passo de cada linha. É como compilar/interpretar um bloco de código usando o cérebro como compilador/interpretador.
