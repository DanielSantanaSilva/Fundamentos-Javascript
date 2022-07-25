// tipo Number

const meunumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(operacaoMatematica)

// ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao)

// NaN -> Not A Number (não é um número)

const alura = "Alura";
console.log(alura * primeiroNumero)

// No caso de números, é possível salvar em uma variável não somente o número em si, como em const num = 5;, mas também o resultado de uma operação (ou mais):

const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao = (soma + multiplicacao) + 10;

