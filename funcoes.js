let x = "";
console.log(x);
x = "Oi!";

// Não saiu a reatribuição do let devido a linha 2 (console.log(x) rodar antes da reatribuição)

// DECLARAÇÃO DE FUNÇÃO

// 1) declara a função
// string

function imprimeTexto(texto) {
  console.log(texto);
}

// 2) executa a função (1 ou + vezes)

imprimeTexto("Oi!");
imprimeTexto("Segundo texto");

// Três formas de escrever funções

function multiplicacao() {
  return 2 * 2;
}

console.log(multiplicacao());
// Utilização do return dentro da function

// Valor de soma

function ImprimeTexto(texto) {
  console.log(texto);
}

ImprimeTexto(soma());

function soma() {
  return 2 + 2;
}
