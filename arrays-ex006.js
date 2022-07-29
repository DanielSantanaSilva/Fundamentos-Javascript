// Exemplos, Utilizando alguns métodos de array e laços de repetição para acessar e alterar strings

const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
  nomeMaiusculas += nome[i].toUpperCase();
}
console.log(nomeMaiusculas); 
//ALURA


const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  
//Fundamentos de JS Alura
