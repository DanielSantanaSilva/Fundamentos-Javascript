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
