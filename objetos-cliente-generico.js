//Desafio 11 - Cliente genérico
/*
Gerar uma função que permita a criação de novos clientes a partir de um modelo.
*/

//

function cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  };
}

//Função construtora

const daniel = new cliente("Daniel", "345587458789", "daniel@email.com", 1000);
// (new) uma palavra reservada no Javascript.
// a partir da função cliente estamos usando a palavra new para criar um novo cliente, Uma nova instancia criada a partir da função construtora.

console.log(daniel);
/*
 cliente {
  nome: 'Daniel',
  cpf: '345587458789',
  email: 'daniel@email.com',
  saldo: 1000,
  depositar: [Function (anonymous)]
}
*/
