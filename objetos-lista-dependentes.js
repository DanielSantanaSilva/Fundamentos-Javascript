//Desafio 6 - Objetos - Lista de dependentes

/*
Verificar a melhor forma de agregar a informação de um novo dependente ao objeto Cliente.
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
  ],
};

cliente.dependentes.push({
  nome: "Eduardo",
  parentesco: "irmão",
  dataNasc: "12/07/2020",
});

//console.log(cliente);
/*
{
  nome: 'Daniel',
  idade: 37,
  cpf: '34558745863',
  email: 'daniel@email.com',
  fones: [ '55(11)98677-8598', '55(21)98763-2589' ],
  dependentes: [
    { nome: 'Sara', parentesco: 'filha', dataNasc: '20/07/2022' },
    { nome: 'Eduardo', parentesco: 'irmão', dataNasc: '12/07/2020' }
  ]
}
*/

// Tranformado dependentes em um array e utilizado o metodo push para adicionar um outro array com mais um dependente.

const filhoMaisNovo = cliente.dependentes.filter(
  (dependente) => dependente.dataNasc === "12/07/2020"
  // Utilizado método filter para filtrar e e usar uma funcão para comparação com a data e retornar o valor da propriedade caso seja true.
);

console.log(filhoMaisNovo);
console.log(filhoMaisNovo[0].nome);
//[ { nome: 'Eduardo', parentesco: 'irmão', dataNasc: '12/07/2020' } ]
//Eduardo
