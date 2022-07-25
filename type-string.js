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


/* o JavaScript é case-sensitive, ou seja, diferencia maiúsculas e minúsculas.
Isso significa que tudo o que escrevemos, sejam instruções próprias da linguagem (como console.log) ou quando damos nome a uma variável, tem que ser feito em um mesmo padrão, o que inclui a questão de maiúsculas e minúsculas. */

const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)

//template string OU template literal
