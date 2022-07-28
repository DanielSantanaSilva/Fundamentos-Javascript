// Exemplo, Concatenando arrays e dados

//método passando como parâmetro outro tipo de dado, que não seja array? Abra um arquivo index.js em seu computador e execute o seguinte código:

const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"];
const arrayConcat = arrayOriginal.concat("André", "Fernanda");

console.log(arrayConcat);
console.log(arrayOriginal);
//[ 'Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda' ]
//[ 'Maria', 'Carlos', 'Eduardo', 'Samanta' ]

// O JavaScript concatenaou o array principal e os números passados como parâmetro para criar outro array, mantendo o original sem alterações.

//***

// Teste passando mais de um array como parâmetro.
const arrayOriginal1 = ["Maria", "Carlos", "Eduardo", "Samanta"];
const arrayConcat1 = arrayOriginal1.concat(
  ["André", "Fernanda"],
  ["Ricardo", "Ana"],
  ["Marcelo", "Bia"]
);

console.log(arrayConcat1);
console.log(arrayOriginal1);
//[ 'Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda', 'Ricardo', 'Ana', 'Marcelo', 'Bia' ]
//[ 'Maria', 'Carlos', 'Eduardo', 'Samanta' ]

// Podemos passar mais de um array como parâmetro para que seus elementos sejam concatenados em um único array, junto com o que está sendo chamado com o método no caso, (arrayOriginal1).

//***

// Teste com um dos parâmetros sendo um array com dois elementos, um número e um array:

const arrayOriginal2 = [50, 60, 70];
const arrayConcat2 = arrayOriginal2.concat([80, [90, 100]]);

console.log(arrayConcat2);
console.log(arrayOriginal2);
// [ 50, 60, 70, 80, [ 90, 100 ] ]
// [ 50, 60, 70 ]

// Este método não extrai os elementos do array de forma recursiva; ou seja, não vai extrair os elementos de arrays que estejam “aninhados”. Dessa forma, 80 foi extraído do array com sucesso, porém 90 e 100 não, o método considerou [90, 100] como um único elemento.

// Dica: concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.
