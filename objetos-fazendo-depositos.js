//Desafio 7 - Objetos - Fazendo depósitos

/*
Adicionar uma propriedade que permita "ações", para que os clientes que estão cadastrados consigam fazer operações bancárias
*/

const cliente = {
  nome: "Daniel",
  idade: 37,
  cpf: "34558745863",
  email: "daniel@email.com",
  fones: ["55(11)98677-8598", "55(21)98763-2589"],
  dependentes: [
    {
      nome: "Sara",
      parentesco: "filha",
      dataNasc: "20/07/2022",
    },
    {
      nome: "Eduardo",
      parentesco: "irmão",
      dataNasc: "12/07/2020",
    },
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
};

console.log(cliente.saldo);
cliente.depositar(50);
console.log(cliente.saldo);
//100
//150

// Utilizamos funções para dar comportamento para o objeto, (método)
// this = esse, =+ incrementar.
