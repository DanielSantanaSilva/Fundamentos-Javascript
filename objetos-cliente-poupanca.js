//Desafio 12 - Cliente poupança
/*
Aproveitar o CLiente que já existe e criar a partir dele um novo tipo de cliente para contas poupança.
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

function clientePoupanca(nome, cpf, email, saldo, saldoPoup) {
  cliente.call(this, nome, cpf, email, saldo);
  this.saldoPoup = saldoPoup;
}

const daniel = new clientePoupanca(
  "Daniel",
  "34556232115",
  "daniel@email.com",
  1000,
  500
);

console.log(daniel);
/*
clientePoupanca {
  nome: 'Daniel',
  cpf: '34556232115',
  email: 'daniel@email.com',
  saldo: 1000,
  depositar: [Function (anonymous)],
  saldoPoup: 500
}
*/

clientePoupanca.prototype.depositarPoup = function (valor) {
  this.saldoPoup += valor;
};

daniel.depositarPoup(300);

console.log(daniel);
/*
}
clientePoupanca {
  nome: 'Daniel',
  cpf: '34556232115',
  email: 'daniel@email.com',
  saldo: 1000,
  depositar: [Function (anonymous)],
  saldoPoup: 800
}
*/

// Utilizado prototype e conceito de herança para criar uma nova função para (clientePoupanca)
