// tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString);

console.log(numero + numeroString);

// conversão explícita

//Number()
//String()

console.log(numero + Number(numeroString));


//Vamos fazer alguns exemplos de conversão de números e booleanos através de String():

let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

//Outra opção para transformarmos um valor em String é usar o toString():

let telefone1 = 12341234;
console.log("O telefone é " + telefone.toString()); // O .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

// Exemplos de conversão de textos e booleanos através de Number():

// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação

//Podemos usar o operador de soma + para fazer a conversão de textos para números, colocando-os antes das variáveis:

let largura1 = "10";
let altura1 = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis


let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

let usuarioConectado1 = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.



/* Não utilizar nenhum dos termos da lista abaixo como identificadores, seja de variáveis, funções, classes ou qualquer outro bloco que precise de um nome. As únicas exceções são from, set e target, que são seguras e comumente utilizadas.

arguments
as
async
await
break
case
catch
class
const
continue
debugger
default
delete
do
else
eval
export
extends
false
finally
for
from
function
get
if
import
in
instanceof
let
of
new
null
return
set
static
super
switch
target
this
throw
true
try
typeof
var
void
while
with
yield

Como as linguagens estão em constante desenvolvimento, o JavaScript também restringe o uso de mais algumas palavras que podem ser utilizadas nas próximas versões:

enum
implements
interface
package
private
protected
public

*/

//Dica de boas práticas: sempre procure nomear/identificar seu código da forma mais semântica possível, pensando em qual é o dado que está sendo salvo na variável e para que ele será utilizado. Além de evitar palavras reservadas, faz com que o código fique mais compreensível e de leitura mais fluida.

var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)

/* Variáveis declaradas com var ou let podem ser reatribuídas. Porém, uma variável declarada com let só pode ser usada no mesmo escopo em que está definida. No caso da declaração const, significa que a variável sempre terá uma referência ao mesmo objeto ou valor primitivo, porque essa referência não pode ser alterada. A referência em si é imutável, mas o valor mantido pela variável não se torna imutável.

o JavaScript moderno tem uma opção, a chamada const, que justamente não pode ser variável — não podemos alterar o valor dela.

Ou seja, a declaração const numero = 1; não pode receber nenhum outro valor, e aparentemente esse é um comportamento esperado, e também uma boa prática. */


let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100