const texto1 = "Olá, Mundo!";
const texto2 = "Olá, Mundo";
const password = "senhaSuperSegura456";
const StringDeNumeros = "34567";

const citacao = "Meu nome é ";
const meuNome = "Daniel";
console.log(citacao);

// concatenação (+)

console.log(citacao + meuNome);

//transformação/conversão do código Unicode em caractere utilizando o console.log()

const cifrao = "\u0024";
const aMaiusculo = "\u0041";
const tique = "\u2705";
const hiragana = "\u3041";

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

//A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém:

const senha = "minhaSenha123";
console.log(senha.length); // 13 caracteres

/*padronizando todos os inputs para o formato de texto que será comparado antes mesmo de fazer a comparação.
Nesse caso, transformando todos os caracteres em letras minúsculas.*/

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();
console.log(cidade === inputMinusculo); // true

//template string OU template literal
