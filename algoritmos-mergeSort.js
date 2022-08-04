// Merge Sort - "técnica de dividir para consquitar"

const listaLivros = require("./algoritmos-arrays2");

function mergeSort(array, nivelAninhamento = 0) {
  console.log(`Nivel de aninhamento: ${nivelAninhamento}`);
  console.log(array);

  if (array.length > 1) {
    const meio = Math.floor(array.length / 2);
    const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento + 1);
    // mergeSort é onde esta acontecendo a recursaõ
    const parte2 = mergeSort(
      array.slice(meio, array.length),
      nivelAninhamento + 1
    );
    array = ordena(parte1, parte2);
  }
  return array;
  // Recursão é basicamente resolver um problema em partes menores até que tenhamos resolvido o problema completo.
}

function ordena(parte1, parte2) {
  let posicaoAtualParte1 = 0;
  let posicaoAtualParte2 = 0;
  const resultado = [];

  while (
    posicaoAtualParte1 < parte1.length &&
    posicaoAtualParte2 < parte2.length
  ) {
    let protutoAtualParte1 = parte1[posicaoAtualParte1];
    let protutoAtualParte2 = parte2[posicaoAtualParte2];

    if (protutoAtualParte1.preco < protutoAtualParte2.preco) {
      resultado.push(protutoAtualParte1);
      posicaoAtualParte1++;
    } else {
      resultado.push(protutoAtualParte2);
      posicaoAtualParte2++;
    }
  }

  return resultado.concat(
    posicaoAtualParte1 < parte1.length
      ? parte1.slice(posicaoAtualParte1)
      : parte2.slice(posicaoAtualParte2)
  );
}

console.log(mergeSort(listaLivros));
/*
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

/* começando com um array desordenado, dividi o array em duas partes ainda desordenadas, dividi novamente em duas partes, duas lista de 3 elementos e novamente dividir em duas partes. 

E para cada uma das partes, que são duas listas de três elementos, eu vou ter uma lista de dois elementos e uma lista de um elemento.

E para cada uma das partes, que são duas listas de três elementos, eu vou ter uma lista de dois elementos e uma lista de um elemento.

 lista de dois elementos nós conseguimos separar em duas partes de um, comparar, ordenar e, se for necessário, trocá-las de lugar.

 E com essas duas partes ordenadas, nós voltamos ao algoritmo do primeiro exemplo. Eu tenho uma lista ordenada de dois elementos, uma lista ordenada de um elemento, e eu posso fazer o merge, eu posso unir, juntar, mesclar.

 E para finalizar, aplicamos novamente a lógica do arquivo algoritmos-exercício.js. */

/* Sobre recursão, normalmente encontramos duas definições que se completam:

1) Um método utilizado para resolver problemas de computação em que a resolução consiste em solucionar instâncias menores do mesmo problema;

2) Um método em que uma função ou algoritmo chama a si uma ou mais vezes até que se atinja uma condição específica, quando o resultado de cada repetição é processado desde a última chamada até a primeira.*/

// Exempo de recursão:

function dorme(milissegundos) {
  return new Promise((resolve) => setTimeout(resolve, milissegundos));
}

/*Aqui é definida uma função assíncrona recursiva que incrementa o número passado como parâmetro em uma unidade e, após 2 segundos, chama a si própria antes de encerrar a sua execução, ilustrando efetivamente um caso de recursão:  

async function incrementaNumero(numero){
    console.log(numero)
    await dorme(2000)
    return incrementaNumero(numero + 1)
  }
  
  incrementaNumero(1)

saida:
1
2
3
4
5


Ainda que o exemplo passado seja uma forma bastante objetiva de demonstrar recursividade, a sua utilização no mundo real não é muito prática já que essa função continuaria realizando o mesmo processo infinitamente - não foi passada nenhuma condição de saída - e não seríamos capazes de retirar valor da sua execução. */

//Abaixo é definida uma função para controlar a frequência com que os números são incrementados durante a execução da função recursiva incrementaNumero() que será definida a seguir:

/*
function dorme(milissegundos) {
  return new Promise((resolve) => setTimeout(resolve, milissegundos));
}
*/

//Aqui é implementada uma função recursiva com caso base:

/*
async function incrementaNumero(numero){
    console.log(numero)
    await dorme(2000)
*/

//Aqui é implementada o caso base(base case) que fará com que a função pare a recursão quando o valor do parâmetro numero for igual a 10:

async function incrementaNumero(numero) {
  console.log(numero);
  await dorme(2000);

  if (numero === 10) {
    return "finalizou";
  }
  return incrementaNumero(numero + 1);
}

incrementaNumero(1);

/* saida:
1
2
3
4
5
6
7
8
9
10
 */

/* Dica: É importante lembrar que a função recursiva é aquela que chama a si mesma até encontrar uma condição de saída/parada. A recursividade é uma técnica muito aplicada em estruturas de dados, algoritmos e gráficos.

Por exemplo, é recursão o efeito de tela infinita que surge em suas chamadas de vídeo ou quando você coloca um espelho em frente ao outro. No entanto, temos a possibilidade e obrigação de inserir uma verificação que interrompa este comportamento, ou então a função entrará em loop infinito. */
