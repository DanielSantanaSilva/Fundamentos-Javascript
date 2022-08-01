//Desafio 3 - Objetos - Adicionando campos

/*
Adicionar informações importantes que ainda estão faltando, como telefone e também seus valores.
*/

const cliente = {
  nome: "André",
  idade: 36,
  cpf: "34558745863",
  email: "andre@email.com",
};

cliente.fone = "11986339748";

console.log(cliente);
//nome: 'André',
//idade: 36,
//cpf: '34558745863',
//email: 'andre@email.com',
//fone: '11986339748'

//Utilizado cliente.fone para adicionar um novo campo ao objeto

// Dica: da pra usar o mesmo método para substituição caso o campo já exista.

cliente.fone = "21987552419";
console.log(cliente);
//nome: 'André',
//idade: 36,
//cpf: '34558745863',
//email: 'andre@email.com',
//fone: '21987552419'

// Aconteceu a substituição dos valores dentro do campo fone


