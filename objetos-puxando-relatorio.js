//Desafio 8 - Objetos - Puxando relatório
/*
Percorrer um objeto e extrair informações básicas do cliente em um formato mais legível e de forma automatizada para fornecer a outros departamentos do banco.
*/

//For...in

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

let relatorio = "";

for (let info in cliente) {
  if (
    typeof cliente[info] === "object" ||
    typeof cliente[info] === "function"
  ) {
    continue;
  } else {
    relatorio += `${info}: ${cliente[info]}
    `;
  }
}

console.log(relatorio);
/*  
idade: 37
cpf: 34558745863
email: daniel@email.com
saldo: 100
*/

// Utilizado o for in para percorrer o objeto.
