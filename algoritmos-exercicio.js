//Misturando listas - exercício de ordenação com arrays

const { edGalho, edFolha } = require("./algoritmos-arrays");
// importando array de livros das duas editoras do arquivo mencionado

function juntaListas(lista1, lista2) {
  let listaFinal = [];
  let posicaoAtualLista1 = 0;
  let posicaoAtualLista2 = 0;
  let atual = 0;

  while (
    posicaoAtualLista1 < lista1.length &&
    posicaoAtualLista2 < lista2.length
  ) {
    let produtoAtualLista1 = lista1[posicaoAtualLista1];
    let produtoAtualLista2 = lista2[posicaoAtualLista2];

    console.log(
      `Comparando ${produtoAtualLista1.titulo} com ${produtoAtualLista2.titulo}`
    );
    // mostrando a comparação entre os títulos das lista ate a condicional descrita, referência &&

    if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
      listaFinal[atual] = produtoAtualLista1;
      posicaoAtualLista1++;
    } else {
      listaFinal[atual] = produtoAtualLista2;
      posicaoAtualLista2++;
    }

    atual++;
  }

  while (posicaoAtualLista1 < lista1.length) {
    listaFinal[atual] = lista1[posicaoAtualLista1];
    posicaoAtualLista1++;
    atual++;
  }

  while (posicaoAtualLista2 < lista2.length) {
    listaFinal[atual] = lista2[posicaoAtualLista2];
    posicaoAtualLista2++;
    atual++;
  }
  return listaFinal;
}

console.log(juntaListas(edGalho, edFolha));

/*Os valores guardados nas variáveis posicaoAtualLista1, posicaoAtualLista2, produtoAtualLista1 e produtoAtualLista2 são, respectivamente: valor numérico referente ao índice atual da primeira lista (recebida pela função via parâmetro); valor numérico referente ao índice atual da segunda lista (recebida pela função via parâmetro); um objeto com as propriedades titulo e preco, referente ao elemento contido no índice atual da primeira lista; um objeto com as propriedades titulo e preco, referente ao elemento contido no índice atual da segunda lista.


// O algoritmo realizado depende de duas listas já ordendas para que funcione

Dica: É super importante sempre sabermos qual é o tipo de dado guardado nas variáveis que usamos em nosso código. Aqui, há uma distinção importante entre as variáveis que guardam o número do índice de um array e o dado que está contido nesse índice.*/
