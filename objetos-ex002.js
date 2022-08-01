// Exemplos de Objeto literal e referência

const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
};

const objPersonagem2 = objPersonagem;

/*Se alterarmos apenas o objPersonagem2, o resultado é: 

const objPersonagem2 = objPersonagem
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento

A variável objPersonagem2 não fez uma cópia do objeto original, apenas serviu como referência para o objeto original objPersonagem. Assim, qualquer alteração em qualquer um dos objetos altera ambos. Isso porque o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original. mas não cria uma cópia
*/

//Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol):

let num = 50;
let num2 = num;

num2 = 100;
console.log(num); //50
console.log(num2); //100

// Mas podemos contornar esse comportamento quando criamos objetos. Além de utilizar a notação literal, objetos também podem ser criados através do método Object.create():

const objPersonagemCriado = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
};

const objPersonagemCriado2 = Object.create(objPersonagemCriado);
objPersonagem2.nome = "Gandalf, o Cinzento";

console.log(objPersonagemCriado.nome); //Gandalf
console.log(objPersonagemCriado2.nome); //Gandalf, o Cinzento

//Observando a saida do método Object.created() conseguimos ver que foi criado um novo objeto usando com protótipo o objeto utilizado como parêmetro.

// Dessa forma, objPersonagemCriado2 é uma instância diferente de objPersonagemCriado e pode ser trabalhada de forma independente.
