// Criando uma classse

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

const daniel = new Cliente("Daniel", "daniel@email.com", "34556986321", 1000);

console.log(daniel);

daniel.exibirSaldo();

/*
Cliente {
  nome: 'Daniel',
  email: 'daniel@email.com',
  cpf: '34556986321',
  saldo: 1000
}
1000
*/

// Sempre damos o nome de uma classe com a letra maiúscula, (Cliente)

//o construtor recebe por parâmetro o que precisamos passar para construir um cliente, e os nossos métodos, lembrando que o método é uma função que executa no contexto de um objeto, a diferença é que com classes não precisamos escrever a palavra-chave function, só declaramos a função aqui passando, abrindo e fechando chaves e passando o parênteses vazio ou com valores, e o JavaScript já interpreta que isso é um método, uma função que vai rodar no contexto dos objetos que criarmos
