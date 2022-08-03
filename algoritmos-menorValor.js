//Encontrar o livro mais barato

const livros = require("./algoritmos-listaLivros");
//importando de outro arquivo JS (algoritmos-listaLivros.js)

function menorValor(arrProdutos, posicaoInicial) {
  let maisBarato = posicaoInicial;

  for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
      maisBarato = atual;
    }
  }
  return maisBarato;
}
module.exports = menorValor;
//exportando para outro arquivo JS que requisitar (require)


//Algoritmo

//Algoritmos são sequências de passos que seguimos com a intenção de atingir um objetivo, pode ser desde atravessar uma rua, fazer um bolo ou definir qual critério usar para aprovar ou reprovar um aluno, por exemplo.

//Algoritmos podem ser quebrados em partes menores e estas partes utilizadas em conjunto na resolução de um problema.
//Dependendo do problema que queremos resolver, um algoritmo pode se tornar muito longo, com muitas sequências de passos, e mais difícil de se construir e testar. Assim como em código, é costume quebrar o algoritmo de resolução de uma tarefa complexa em vários algoritmos (ou partes) menores, especializadas e intercambiáveis para cada parte do problema.

//Algoritmos são sequências finitas de ações para a resolução de um problema.
//Estas ações podem ser traduzidas em passos lógicos de um código, instruções para uma receita culinária ou montagem de um móvel, ou até mesmo para ilustrar sequências de ações executáveis que fazemos no nosso dia-a-dia.

//A mesma sequência finita de ações de um algoritmo pode ser utilizada para resolver o mesmo problema em diversas linguagens de programação.
// Vimos que a resolução de um problema utilizando algoritmos pode muito bem começar fora do código e depois ser “traduzida” para a linguagem de programação de nossa preferência, mas o conceito por trás da solução é o mesmo.

/*Encontrar o livro mais caro (anotação)

let maisCaro = 0;

for (let atual = 0; atual < livros.length; atual++) {
  if (livros[atual].preco > livros[maisCaro].preco) {
    maisCaro = atual;
  }
}

console.log(
  `O livro mais caro custa ${livros[maisCaro].preco} e o título é ${livros[maisCaro].titulo}`
);
*/
