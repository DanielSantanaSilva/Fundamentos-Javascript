const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMinima) {
  console.log("Cerveja");
} else {
  console.log("Beba agua");
}

// Operador ternário:

const IdadeMinima = 18;
const IdadeCliente = 16;

// condição                     //true      //false
console.log(IdadeCliente >= IdadeMinima ? "Cerveja" : "Beba agua");
// >= operador comparação // ?operador de separação  // : resultados

// Utilizando 3 operadores em uma única linha.

// Exemplo

const Nome = "Daniel";
const Idade = 37;
const idadeMinimaPermitida = 18;
const bebidaMaior = "Caipirinha";
const bebidaMenor = "Suco de laranja";

const pedido = `${Nome} solicitou ${
  Idade >= idadeMinimaPermitida ? bebidaMaior : bebidaMenor
}`;

console.log(pedido);

// Concatenação com template string (acento grave `) e utilização de operadores >= e operador ternário (?) para retornar o valor de variavel bebidaMaior ou bebidaMenor de acordo com a variavel Idade e sua comparação com idadeMinimaPermitida
