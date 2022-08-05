//Desafio 13 - Cliente poupança
/*
Aproveitar o CLiente que já existe e criar a partir dele um novo tipo de cliente para contas poupança.
*/

// Utilizando agora conceitos de classe

class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }
  exibirSaldo() {
    console.log(this.saldo);
  }
}

class ClientePoupanca extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoupanca) {
    super(nome, email, cpf, saldo);
    this.saldoPoupanca = saldoPoupanca;
  }
  depositarPoupanca(valor) {
    this.saldoPoupanca += valor;
  }
}

const daniel = new ClientePoupanca(
  "Daniel",
  "daniel@email.com",
  "36541256247",
  1000,
  2000
);

console.log(daniel);
/*
ClientePoupanca {
  nome: 'Daniel',
  email: 'daniel@email.com',
  cpf: '36541256247',
  saldo: 1000,
  saldoPoupanca: 2000
}
*/

daniel.depositar(100), daniel.depositarPoupanca(2000);

console.log(daniel);
/*
}
ClientePoupanca {
  nome: 'Daniel',
  email: 'daniel@email.com',
  cpf: '36541256247',
  saldo: 1100,
  saldoPoupanca: 4000
}
*/
