// Trace - trace()

/*O método chamado trace() que, além de imprimir mensagens, também fornece um stack trace, uma espécie de rastro de execução das funções executadas.

De forma bem simples, o trace() vai mostrar o caminho percorrido pelo programa até chegar ao ponto em que a função console.trace() é chamada.*/

function ola() {
  function mundo() {
    console.trace("Ola Mundo");
  }
  mundo();
}

ola();

/* saida:
    Trace: Ola Mundo
    at mundo (c:\Users\PC GAMER\Desktop\Lina Open X\Estudos\Alura\JavaScript para back-end\Fundamentos - Javascript\algoritmos-trace.js:9:13)
    at ola (c:\Users\PC GAMER\Desktop\Lina Open X\Estudos\Alura\JavaScript para back-end\Fundamentos - Javascript\algoritmos-trace.js:11:3)
    at Object.<anonymous> (c:\Users\PC GAMER\Desktop\Lina Open X\Estudos\Alura\JavaScript para back-end\Fundamentos - Javascript\algoritmos-trace.js:14:1)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
*/

/* O método console.trace() imprime a mensagem "Ola Mundo" no topo e depois apresenta todo o caminho percorrido nos locais em que o console.trace() foi chamado.

Aqui a função ola() é chamada primeiro e a função mundo() é chamada posteriormente (observe que na lateral direita aparece o número da linha em que o console.trace() é chamado, que é o número "3"). */

/* O console.trace() é muito vantajoso quando pensamos em cenários complexos, pois fornece um stack trace (rastreamento de pilha) completo, com informações sobre os locais, módulos ou arquivos em que os métodos são chamados.

Esse método funciona como ferramenta importante para encontrarmos bugs e atua de mãos dadas com o interpretador. Essa prática é possível graças ao motor de interpretação do JavaScript (também chamado de engine) que utiliza uma pilha de chamadas (call stack) como regra de execução de funções. A pilha de chamadas trabalha com a estrutura de dados conhecida como pilha, que tem como regra que "o último a entrar é o primeiro a sair" - uma sigla conhecida na programação como LIFO, last-in-first-out.

Isso significa que, sempre que executarmos um script, o motor JavaScript organiza a execução de forma global e insere a execução da última função chamada no topo de pilha de chamadas.

Imagine blocos empilhados um em cima do outro, ou uma pilha de pratos. Se tentarmos retirar o último bloco ou o último prato, o que acontece? Certamente tudo irá desmoronar, e é assim que a pilha de chamadas funciona também; o motor JavaScript executa a última função chamada e se uma função chamar outra em seu escopo, um novo contexto de execução será criado e colocará a nova função no topo da pilha de chamadas.

O script só finaliza a execução quando a pilha de chamadas estiver vazia. */
