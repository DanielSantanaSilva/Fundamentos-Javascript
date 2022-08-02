// Exemplo - Cadeia de protótipos

function cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  };
}

const daniel = new cliente("Daniel", "34555863215", "daniel@email.com", 500);

//Agora vamos definir um construtor que utiliza o Cliente para gerar um novo tipo de cliente.

function clientePoupanca(nome, cpf, email, saldo, saldoPoup) {
  cliente.call(this, nome, cpf, email, saldo);
  this.saldoPoup = saldoPoup;
}

const eduardo = new clientePoupanca(
  "Eduardo",
  "45632145236",
  "eduardo@email.com",
  1000,
  600
);

//Agora vamos manipular o comportamento do protótipo do objeto clientePoupanca, adicionando o código abaixo:

clientePoupanca.prototype.depositarPopup = function (valor) {
  this.saldoPoup += valor;
};

//Então podemos testar algumas propriedades e validar a ideia de cadeia de protótipos.

console.log(daniel.hasOwnProperty("saldoPoup")); //false
console.log(eduardo.hasOwnProperty("saldoPoup")); // true
console.log(daniel instanceof cliente); //true
console.log(typeof daniel); //object
console.log(typeof eduardo); //object
console.log(eduardo instanceof clientePoupanca); //true
console.log(Function.prototype.isPrototypeOf(cliente)); //true
console.log(cliente.constructor === Function); //true

//Na saída do console veremos que usando .hasOwnProperty(), a função “saldoPoup” só existe no objeto do tipo ClientePoupanca.

//Os objetos daniel e eduardo são do tipo object, ou seja, ambos herdam do protótipo de object, que está associado a todo objeto criado no JavaScript.
