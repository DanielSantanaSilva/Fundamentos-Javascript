// Exemplos de sintaxe de espalhamento ou spread operator

const fichaGuerreiro = {
  nome: "Aragorn",
  classe: "guerreiro",
};

const equipGuerreiro = {
  espada: "Andúril",
  capa: "capa élfica +2",
};

const guerreiro = { fichaGuerreiro, equipGuerreiro };

console.log(guerreiro);
/*
{
    fichaGuerreiro: { nome: 'Aragorn', classe: 'guerreiro' },
    equipGuerreiro: { espada: 'Andúril', capa: 'capa élfica +2' }
}
*/

//Vou utilizar o spread operator, adicionando a sintaxe de três pontos (reticências) antes do nome de cada objeto literal, com cada objeto separado por vírgula

const guerreiroList = { ...fichaGuerreiro, ...equipGuerreiro };
console.log(guerreiroList);
/*
{
  nome: 'Aragorn',
  classe: 'guerreiro',
  espada: 'Andúril',
  capa: 'capa élfica +2'
}
*/

//Dica:  caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o mesmo nome de chave. Por exemplo:

const mage = {
  nome: "Gandalf",
  classe: "mago",
};
const warrior = {
  nome: "Aragorn",
  classe: "guerreiro",
};

const ranger = {
  nome: "Legolas",
  classe: "ranger",
};

const personagens = { ...mage, ...warrior, ...ranger };
console.log(personagens);
//{ nome: 'Legolas', classe: 'ranger' }

//O JavaScript sobrescreveu as chaves com o mesmo nome a cada ocorrência, assim o resultado final foi somente o último objeto declarado dentro do objeto personagens.

//Dica: Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser usado com cuidado em caso de loops ou funções recursivas.
