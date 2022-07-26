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

// Exemplos de estruturas if

const num = null;

if (num === null) {
  console.log("número não fornecido");
} else {
  console.log(num);
}
//saida: número não fornecido

const num1 = 10;

if (num1 !== null) {
  console.log(`o número é ${num1}`);
}
/*saida: o número é 10.
o resultado da expressão num !== null (ou seja, “o valor da variável num é diferente de null”) retorna true. Como a confição é Verdadeira ele executa o código.
Utilizado a acento grave (`) para realizar a concatenação. */

//A expressão acima também poderia ser escrita da seguinte forma:
const num2 = 10;

if (num2) {
  console.log(`o número é ${num2}`);
}

//Múltiplas condições

//É possível usar os operadores AND (&&) ou OR (||) para executar o código no if caso uma das condições for verdadeira, ou as duas:

const num3 = null;

if (num3 > 10 || !num3) {
  console.log("número não válido");
} else {
  console.log(num3);
}
//saida: número não válido, pois uma das condições é verdadeira

// Operador lógico && (and ou e em português) para especificar que a condição do if será validada apenas se todas as condições retornarem true:

const num4 = 11;

if (num4 > 10 && num4 < 20) {
  console.log("número válido");
}
/* saida: número válido. 
Número 11 (atribuido a num4) atende ambas as condições. */

// if…else

function verificaNumero(numero) {
  if (numero > 10) {
    return "número maior que 10";
  } else {
    return "número não é maior que 10";
  }
}

console.log(verificaNumero(9)); //número não é maior que 10

// else if

const num5 = 15;

if (num5 >= 0 && num5 <= 10) {
  console.log("número entre zero e dez");
} else if (num5 > 10 && num5 <= 20) {
  console.log("número entre dez e vinte");
} else if (num5 > 20 && num5 <= 30) {
  console.log("número entre vinte e trinta");
} else {
  console.log("outro número");
}

// else if também precisa receber a condição (ou as condições) como parâmetros, ao contrário do else, que deve fechar a cadeia de condicionais e continua sem receber nenhum parâmetro, pois é o código que será executado caso todas as outras condições anteriores falhem.
