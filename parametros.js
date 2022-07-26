// Parâmetros de função
//2     //2
function soma(numero1, numero2) {
  return numero1 + numero2;
}

console.log(soma(2, 2));
console.log(soma(10, 20));

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
  return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Daniel", 37));
// function com concatenação e 2 parâmetros (nome e idade) na ordem

function Soma(Numero1, Numero2) {
  return Numero1 + Numero2;
}

function multiplica(Numero1, Numero2) {
  return Numero1 * Numero2;
}

console.log(Soma(4, 5));
console.log(multiplica(4, 5));
console.log(multiplica(Soma(4, 5), Soma(3, 3)));

// Função sem retorno e sem parêmetro
function cumprimentar() {
  console.log("oi gente!");
}

cumprimentar();

//Função sem retorno, com parâmetro: similar à anterior, porém agora a função recebe, via parâmetro, o nome da pessoa a ser cumprimentada. Dessa forma é possível reaproveitar a função para que funcione de maneira parecida com o nome de qualquer pessoa (desde que esteja no formato de dado string.

function cumprimentaPessoa(pessoa) {
  console.log(`oi, ${pessoa}!`);
}

cumprimentaPessoa("Helena");

// função cumprimentar() não precisa receber nenhum parâmetro. Mas logo abaixo vemos que ela está sendo utilizada para montar uma string na função cumprimentaPessoa(nomePessoa). Isso significa que a string ”Oi gente!” deve estar disponível para outras partes do programa - ou seja, deve ser retornada com o uso da palavra-chave return.

function Cumprimentar() {
  return "Oi gente!";
}

function CumprimentaPessoa(nomePessoa) {
  console.log(`${Cumprimentar()} Meu nome é ${nomePessoa}`);
}

CumprimentaPessoa("Daniel"); // saida: “Oi gente! Meu nome é Daniel”

// Função com return e mais de um parâmetro
function operacaoMatematica(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(operacaoMatematica(15, 30, 45)); // saida:90

//Em JavaScript, os parâmetros de funções tem undefined como valor predefinido. (Não recebeu um valor como parâmetro)
function comParametro(param) {
  console.log(param);
}
comParametro();
