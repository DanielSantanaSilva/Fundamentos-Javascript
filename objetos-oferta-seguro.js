//Desafio 9 - Objetos - Oferta seguro

/*
Percorrer um objeto e verificar se existe a chave 'dependentes' e caso exista, enviar uma mensagem de oferta de seguro.
*/

// Object.keys(); (Object.values(); Object.entries

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

/*
Extrair uma lista de chaves do objeto

const propsClientes = Object.keys(cliente)

console.log(propsClientes)

[
  'nome',
  'idade',
  'cpf',
  'email',
  'fones',
  'dependentes',
  'saldo',
  'depositar'
]
*/

function oferecerSeguro(obj) {
  const propsClientes = Object.keys(obj);
  if (propsClientes.includes("dependentes")) {
    console.log(`Oferta de seguro de vida para ${obj.nome}`);
  }
}
oferecerSeguro(cliente);
//Utilizado Object.keys(), para verificar as chaves dentro do objeto, depois feita a comparação para ofertar o seguro caso exista uma chave chamada "dependentes dentro do objeto"

console.log(Object.values(cliente));
// Utilizado para verificar os valores dentro do objeto cliente.

console.log(Object.entries(cliente));
//Utilizado para verificar todas informações em uma estrutura de array

//Métodos utilizados para converter chaves e valores para arrays
