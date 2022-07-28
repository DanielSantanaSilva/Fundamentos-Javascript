// Exercios extras 1 - Arrays vazios

const arrayVazia = [];

console.log(arrayVazia);
console.log(arrayVazia.length);
// []
// 0

console.log(arrayVazia[0]); //undefined

const arrayVazia1 = [, , ,];
console.log(arrayVazia1.length);
console.log(arrayVazia1[0]);
console.log(arrayVazia1[1]);
console.log(arrayVazia1[2]);

console.log(arrayVazia1);
/*
3
undefined
undefined
undefined
*/

//array com 3 posições, porém em nenhuma dessas posições existe um valor.
//De certa forma, podemos pensar que este array foi criado como um gaveteiro com três gavetas e todas elas estão “vazias”, sem nenhum valor de dado guardado.

arrayVazia1.push(50); // (.push)método utilizado para adicionar valor no final do array
console.log(arrayVazia1);
console.log(arrayVazia1.length);
//[ <3 empty items> ]
//[ <3 empty items>, 50 ]
//4

//O JavaScript manteve as posições vazias e adicionou o 50 ao final do array. Após a execução, ele passou a ter 4 posições, mas somente um elemento (o número 50). Chamamos este tipo de estrutura de array esparso
