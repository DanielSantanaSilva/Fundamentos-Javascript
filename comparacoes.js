// == (comparação implícita)

const numero = 5;
const texto = "5";

console.log(texto == numero);
// saida: true

// === (comparação explícita)

const numero1 = 5;
const texto1 = "5";

console.log(texto1 === numero1);
// saida: false

// typeof
console.log(typeof numero);
console.log(typeof texto);

// == só comparar o valor
// === compara o valor e o tipo de dado

a = [];
b = 20;
c = true;
d = "";

if (b === 20 && c != false && d == 0) {
  console.log("Verdade");
} else {
  console.log("Falso");
}
/*  A variável b possui o mesmo valor e o mesmo tipo e a primeira comparação é verdadeira. 
Como o valor armazenado na variável c é true e a comparação diz que c não é falso, o resultado também é verdadeiro. Na última comparação, o valor de d, que é uma string vazia é comparado com 0 e isso também é verdadeiro. Sendo assim, saída do console será Verdade. */

if (a == 0) {
  console.log("Verdade");
} else {
  console.log("Falso");
}
//O valor de uma lista vazia é zero, e ao comparar com um número, temos 0 == 0 resultando true.

if (d) {
  console.log("Verdade");
} else {
  console.log("Falso");
}
//saida: Falso

if (b == "20") {
  console.log("Verdade");
} else {
  console.log("Falso");
}
// Alternativa correta! Certo! Quando comparamos 20 do tipo inteiro com '20' do tipo string com o operador == (igual, igual), apenas os valores das variáveis são comparados, resultando no valor true.
