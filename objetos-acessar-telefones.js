//Desafio 4 - Objetos - Adicionar telefones

/*
Acessar lista de números de telefone das pessoas cadastradas no sistema e imprimi-la, verificando se há mais de uma número em algum cadastro.
*/

const cliente = {
  nome: "André",
  idade: 36,
  cpf: "34558745863",
  email: "andre@email.com",
  fones: ["55(11)98677-8598", "55(21)98763-2589", "55(31)9978-65479"],
};

cliente.fones.forEach((fones) => console.log(fones));
//55(11)98677-8598
//55(21)98763-2589
//55(31)9978-65479
