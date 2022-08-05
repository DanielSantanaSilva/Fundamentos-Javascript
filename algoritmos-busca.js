// Busca binária

const listaLivros = require("./algoritmos-arrayOrdenado");

function busca(array, de, ate, valorBuscado) {
  const meio = Math.floor((de + ate) / 2);
  const atual = array[meio];

  if (de > ate) {
    return -1;
    // “caso base”, que pode ser considerada como a condição de parada de uma função recursiva.
  }

  if (valorBuscado === atual.preco) {
    return meio;
  }

  if (valorBuscado < atual.preco) {
    return busca(array, de, meio - 1, valorBuscado);
  }

  if (valorBuscado > atual.preco) {
    return busca(array, meio + 1, ate, valorBuscado);
  }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 50));
//10

//A busca binária é mais eficiente em termos de quantidade de operações necessárias do que a busca linear.

//Conforme as simulações feitas é possível localizar um elemento em um array com um número máximo de operações muito menor do que a busca linear.

//Para saber mais: Logaritmo binário
/*Em computação sempre é utilizado o logaritmo com base 2 (e, consequentemente, o inverso é a potência de 2). Assim, log n representa de forma abreviada log2 n, ou seja, log de n na base 2.

Esta característica está ligada ao sistema numérico utilizado pelos computadores: o sistema binário (ou de base 2), onde todos os valores são representados pelos números 0 e 1.

Assim, sempre que trabalharmos com valores O(log n), estamos nos referindo a base 2.*/

// Considerações finais:

//Tanto o merge sort quanto o quick sort executam operações linearmente (n) e também em (log n), então é um algoritmo de complexidade n log(n)

//Valores de crescimento logarítmico ou O(log(n)), são números que, colocados como potência, resultam na quantidade de elementos que estamos buscando. Por exemplo, o log de 1024 na base 2 é 10, pois 2x2x2x2x2x2x2x2x2x2 = 1024.

//O paradigma “dividir para conquistar” resulta em algoritmos mais eficientes do que os que atacam um problema inteiro de uma vez só. O paradigma “dividir para conquistar” quebra um problema e o resolve em partes menores, para que uma vez unidas estas partes, o problema inteiro se resolva. A eficiência está em trabalhar com quantidades menores de operações.
