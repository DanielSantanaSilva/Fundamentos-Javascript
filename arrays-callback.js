// Callback

const nomes = ["Ana", "Juliana", "Paula"];

nomes.forEach(imprimeNomes);

function imprimeNomes(nome) {
  console.log(nome);
}

//Ana
//Juliana
//Paula

// O termo callback se refere à função que é “chamada de volta” dentro de outra função. Após o lançamento do ES6 (também conhecido como JavaScript 2015) o uso desse tipo de método foi se consolidando, então é importante entender como utilizá-lo.

// Exemplos de utilização do map() para multiplicar cada um dos valores em um  array por 10 e retornar um novo array com os resultados. Antes de escrevermos o map() para isso, vamos criar a função callback; ou seja, a função que vamos chamar (call) de volta quando executarmos o método map()

const arrayNums = [1, 2, 3, 4];

function multiplicaPorDez(num) {
  return num * 10;
}

const arraySomada = arrayNums.map(multiplicaPorDez);

console.log(arraySomada);
// [ 10, 20, 30, 40 ]

/*
const arraySomada = arrayNums.map(num => num * 10)
console.log(arraySomada)


No código acima (comentado) substiti uma função externa e nomeada (a função multiplicaPorDez), por uma arrow function anônima que existe somente dentro do map(). Mas esta função anônima também tem um parâmetro, num, que representa cada um dos elementos do array que será iterado pelo map()


Por isso quando utilizamos uma função externa como callback de um map() não foi necessário passar um parâmetro. O map() executa automaticamente o bloco de código da função (nesse caso, num * 10) para cada elemento do array.

*/

//Dica: Ambos os casos de uso são válidos; as funções externas permitem reaproveitamento de código, mas há vários momentos em que isso não será necessário.

// Para o JavaScript, qualquer função que seja chamada como argumento de outra é considerada uma função callback, não apenas em caso de métodos.
