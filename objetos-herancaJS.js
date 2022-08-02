// Exemplo/Exercício Utilizando Herança de classes em JS

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
  exibirSaldo(saldo) {
    console.log(this.saldo);
  }
}

// Foi definido uma classe de cliente com uma série de propriedades (características) e comportamentos (métodos ou funções). Vamos criar uma nova classe que vai herdar as características do cliente e terá um comportamento específico

class ClientePoupanca extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoupanca) {
    super(nome, email, cpf, saldo);
    this.saldoPoupanca = saldoPoupanca;
  }
  depositarPoupanca(valor) {
    this.saldoPoupanca += valor;
  }
}

//Já temos um novo tipo de objeto com um comportamento único, o depositarPoupanca()

const hachiko = new ClientePoupanca(
  "Hachiko",
  "hachiko@gmail.com",
  "32145698778",
  50,
  100
);

hachiko.depositar(10);
hachiko.depositarPoupanca(50);

console.log(hachiko);
/*
ClientePoupanca {
  nome: 'Hachiko',
  email: 'hachiko@gmail.com',
  cpf: '32145698778',
  saldo: 60,
  saldoPoupanca: 150
}
*/

//Por meio da herança é possível invocar propriedades e comportamentos definidos na classe base, aquela de quem ClientePoupanca herda, e invocar o método específico da poupança.

//Reaproveitando o código não é necessário reescrever o método depositar(), O objeto tem acesso a esse método pelo mecanismo da herança.
