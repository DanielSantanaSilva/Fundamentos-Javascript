//Desafio 2 - Objetos - Acessar chaves

/*
Acessar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema e printar na tela.
*/

const cliente = {
  nome: "André",
  idade: 36,
  cpf: "34558745863",
  email: "andre@email.com",
};

const chaves = ["nome", "idade", "cpf", "email"];

console.log(cliente[chaves[0]]);
//André

//Utilizando chaves para acessar objeto, índice 0 para saida nome.

chaves.forEach((info) => console.log(cliente[info]));
// André
//36
//34558745863
//andre@email.com

// Utilizado forEach para uma função callback retornar todos os valores de objeto.
