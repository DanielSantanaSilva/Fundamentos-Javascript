//Desafio 10 - Lista de dependentes
/*
Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista única, para análise de outros departamentos do banco.
*/

//Sintaxe de espalhamento - [...] ou  spread operator

const clientes = [
  {
    nome: "Daniel",
    cpf: "34558745863",
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
  },
  {
    nome: "Vitória",
    cpf: "348765713246",
    dependentes: [
      {
        nome: "Mia",
        parentesco: "filha",
        dataNasc: "10/01/2022",
      },
      {
        nome: "Hachiko",
        parentesco: "filho",
        dataNasc: "05/02/2022",
      },
    ],
  },
];

const listaDependentes = [
  ...clientes[0].dependentes,
  ...clientes[1].dependentes,
];

console.log(listaDependentes);
/*
[
  { nome: 'Sara', parentesco: 'filha', dataNasc: '20/07/2022' },
  { nome: 'Eduardo', parentesco: 'irmão', dataNasc: '12/07/2020' },
  { nome: 'Mia', parentesco: 'filha', dataNasc: '10/01/2022' },
  { nome: 'Hachiko', parentesco: 'filho', dataNasc: '05/02/2022' }
]
*/

// O operador de espalhamento (...) espalhou dentro de um novo array o conteúdo, acessou o array de objetos (clientes) a partir de cada índice indicado e colocou no array (listaDependentes) de forma espalhada.
//(como visto na saida acima)

console.table(listaDependentes);
// Cria uma tabela para mostrar o array em uma tabela.

/*
┌─────────┬───────────┬────────────┬──────────────┐
│ (index) │   nome    │ parentesco │   dataNasc   │
├─────────┼───────────┼────────────┼──────────────┤
│    0    │  'Sara'   │  'filha'   │ '20/07/2022' │
│    1    │ 'Eduardo' │  'irmão'   │ '12/07/2020' │
│    2    │   'Mia'   │  'filha'   │ '10/01/2022' │
│    3    │ 'Hachiko' │  'filho'   │ '05/02/2022' │
└─────────┴───────────┴────────────┴──────────────┘
*/
