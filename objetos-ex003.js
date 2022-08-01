// Exemplo extra de objetos

const colecionador = {
  nome: "Daniel",
  idade: 37,
  tipocolecao: "quadrinhos",
  contato: "daniel@email.com",
};

console.log(colecionador.nome);
console.log(colecionador["tipocolecao"]);
//Daniel
//quadrinhos

//Na primeira forma utilizei notação de ponto, muito comum em linguagens como Java e C. No segundo exemplo, acessei usando os colchetes, de modo similar a acessar um array indexado por uma string.

//No JavaScript, objetos são classificados também como um array associativo (map ou dicionário).

//Vamos adicionar dinamicamente uma série de tipos de quadrinhos à lista de tipos do objeto colecionador. Adicione ao objeto a função abaixo:
