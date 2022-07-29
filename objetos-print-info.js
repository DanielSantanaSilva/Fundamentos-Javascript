//Desafio 1 - Objetos - Printar infos

/*
Acessar um objeto com informações de um cliente e exibir essas informações no console.
*/

const cliente = {
  nome: "André",
  idade: 36,
  cpf: "34558745863",
  email: "andre@email.com",
};

console.log(cliente.nome);
//André

// Acessando informações dentro do objeto cliente

console.log(`Seu nome é: ${cliente.nome} e sua idade é: ${cliente.idade}.`);
//Seu nome é: André e sua idade é: 36.

// Acessando informações dentro do objeto cliente e utilizando template string

console.log(cliente.cpf.substring(0, 3));
//345

// substring(), que é uma função do JavaScript para trabalhar com strings
//começando no índice zero, que é o número 1 e está indo até o índice 3 e parando antes dele, ou seja, vai exibir o índice zero, o índice um e o índice dois, ou seja, os 3 primeiros números, os 3 primeiros algarismos, caracteres dessa string.
