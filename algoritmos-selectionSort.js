//Selection Sort - Ordenação por seleção

//o sort() utiliza mais de um algoritmo de ordenação, dependendo de principalmente duas coisas: 1) as características do array a ser ordenado e 2) a implementação do JavaScript que está sendo utilizada.

//o que caracteriza o Selection Sort são os passos lógicos por trás da resolução do problema e de que forma o algoritmo faz isso.

const livros = require("./algoritmos-listaLivros");
//importando de outro arquivo JS (algoritmos-listaLivros.js)

const menorValor = require("./algoritmos-menorValor");
//importando de outro arquivo JS (algoritmos-menorValor.js)

for (let atual = 0; atual < livros.length; atual++) {
  let menor = menorValor(livros, atual);

  let livroAtual = livros[atual];
  console.log("posiçao atual", atual);
  console.log("livro atual", livros[atual]);

  let livroMenorPreco = livros[menor];
  console.log("livro menor preço", livros[menor]);

  livros[atual] = livroMenorPreco;
  livros[menor] = livroAtual;
}

console.log(livros);

/*
posiçao atual 0
livro atual { titulo: 'Javascript', preco: 25 }
livro menor preço { titulo: 'PHP', preco: 15 }
posiçao atual 1
livro atual { titulo: 'Javascript', preco: 25 }
livro menor preço { titulo: 'python', preco: 20 }
posiçao atual 2
livro atual { titulo: 'Java', preco: 30 }
livro menor preço { titulo: 'Javascript', preco: 25 }
posiçao atual 3
livro atual { titulo: 'Elixir', preco: 50 }
livro menor preço { titulo: 'Java', preco: 30 }
posiçao atual 4
livro atual { titulo: 'Go', preco: 45 }
livro menor preço { titulo: 'Go', preco: 45 }
posiçao atual 5
livro atual { titulo: 'Elixir', preco: 50 }
livro menor preço { titulo: 'Elixir', preco: 50 }
[
  { titulo: 'PHP', preco: 15 },
  { titulo: 'python', preco: 20 },
  { titulo: 'Javascript', preco: 25 },
  { titulo: 'Java', preco: 30 },
  { titulo: 'Go', preco: 45 },
  { titulo: 'Elixir', preco: 50 }
]
*/

//Durante a aula usamos a sintaxe do JavaScript, mas cada linguagem tem sua própria sintaxe e forma de trabalhar com os arquivos, funções, loops e declaração de variáveis. Inclusive a forma que usamos na aula para implementar o algoritmo com JavaScript não é a única.

livros.forEach((_, indice) => {
  let menor = menorValor(livros, indice);

  let livroAtual = livros[indice];
  let livroMenorPreco = livros[menor];

  livros[indice] = livroMenorPreco;
  livros[menor] = livroAtual;
});

console.log(livros);
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

// Utilizado também o ForEach para resolução substituindo o método for
//Também não usamos o primeiro parâmetro do ForEach, então avisamos o Javascript com sinal (_) underline, como podemos ver no código acima.
