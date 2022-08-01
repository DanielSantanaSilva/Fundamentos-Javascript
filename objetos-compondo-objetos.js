//Desafio 5 - Objetos - Compondo um objeto

/*
Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco.
*/

const cliente = {
  nome: "André",
  idade: 36,
  cpf: "34558745863",
  email: "andre@email.com",
  fones: ["55(11)98677-8598", "55(21)98763-2589", "55(31)9978-65479"],
};

cliente.dependentes = {
  nome: "Sara",
  parentesco: "filha",
  dataNasc: "20/07/2022",
};

console.log(cliente);
/*
 nome: 'André',
  idade: 36,
  cpf: '34558745863',
  email: 'andre@email.com',
  fones: [ '55(11)98677-8598', '55(21)98763-2589', '55(31)9978-65479' ],
  dependentes: { nome: 'Sara', parentesco: 'filha', dataNasc: '20/07/2022' }
  */

cliente.dependentes.nome = "Denise";
// Utilizado para acessar o objeto dentro do objeto e feita a alteração do valor dentro da propriedade.

console.log(cliente);
/*
 nome: 'André',
  idade: 36,
  cpf: '34558745863',
  email: 'andre@email.com',
  fones: [ '55(11)98677-8598', '55(21)98763-2589', '55(31)9978-65479' ],
  dependentes: { nome: 'Denise', parentesco: 'filha', dataNasc: '20/07/2022' }
  */
