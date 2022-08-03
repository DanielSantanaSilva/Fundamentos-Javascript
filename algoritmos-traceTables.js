//Uma forma muito comum de fazer o registro de valores de variáveis durante um teste de mesa é utilizando tabelas de rastreio, ou trace tables. Por exemplo, um teste de mesa para um for que imprime números de 0 a 5 no console poderia ser representado pelo seguinte teste de mesa/tabela de rastreio:

let num = 0;
console.log(num);

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

/*
0
1
2
3
4
5
*/

//O importante no teste de mesa (com ou sem uso da tabela) é percorrer cada linha e executar realmente o código, anotando as criações/reatribuições de variáveis, resultados de operações matemáticas (se houver), alterações em arrays e objetos, etc. Dessa forma, resultados não esperados na execução do código já vão aparecer na hora.
