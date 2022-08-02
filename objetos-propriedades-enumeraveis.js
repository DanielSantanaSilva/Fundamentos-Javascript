// Propriedades enumeráveis

/*
Quando um objeto JavaScript é criado ele tem propriedades particulares (por exemplo, nome, cpf ou email e também outras propriedades herdadas do protótipo.

    Além do nome e do valor, cada propriedade tem também três atributos:
    
    Writable: Define se a propriedade pode ser adicionada a (ou escrita em) um objeto;

    Enumerable: Define se a propriedade é retornada, por exemplo, em um loop for...in ou utilizando Object.keys() / Object.values() / Object.entries(). Ou seja, se a propriedade é enumerável;

    Configurable: Especifica se a propriedade pode ser modificada ou deletada. Ou seja, se é configurável.

Por definição, todas as propriedades de um objeto criadas durante o desenvolvimento têm estes três atributos como true. Já a maior parte das propriedades herdadas do protótipo têm estes atributos como false e não podem ser enumeradas, adicionadas ou alteradas.
*/

//Podemos verificar os atributos de cada propriedade utilizando alguns métodos nativos do JavaScript:

const catalogo = {
  editora: "Casa do Código",
  catalogo: [
    {
      id: 50,
      titulo: "Primeiros Passos com NodeJS",
      autor: "João Rubens",
      categoria: "programação",
      versoes: ["ebook", "impresso"],
    },
  ],
};

console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"));
/*
{
value: 'Casa do Código',
writable: true,
enumerable: true,
configurable: true
}
*/

//Usei o método Object.getOwnPropertyDescriptor() para descrever os atributos da propriedade editora.

//Os métodos que começam com getOwnProperty… funcionam apenas em propriedades “próprias” do objeto.

//A propriedade editora foi criada por nós e não herdada do protótipo, assim ela pode ser alterada, removida e é enumerável - ou seja, vai ser percorrida em um loop for...in e indexada a um array com Object.keys() ou Object.entries().

// Dica: Objetos criados de forma literal (const obj = {a: 1}) utilizam Object.prototype como protótipo; objetos criados com new a partir de um construtor herdam a propriedade prototype de sua função construtora; Objetos criados com Object.create()recebem como prototype o primeiro parâmetro da função - que pode ser null.

//Protótipos e herança são temas vastos em JavaScript. A partir desta introdução, você pode praticar e se aprofundar no tema.
