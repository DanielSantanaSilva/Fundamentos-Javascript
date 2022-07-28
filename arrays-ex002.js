// Exercicios extras 2 - push e pop são usados para adicionar/remover

const jantarDeHoje = ["🍔", "🌭", "🍕"];
jantarDeHoje.pop();
jantarDeHoje.pop();

jantarDeHoje.push("🍳");
jantarDeHoje.push("🥗");
jantarDeHoje.push("🍏");

console.log(jantarDeHoje);

//No jantar de hoje, a pizza e o cachorro quente não estão presentes por conta do código jantarDeHoje.pop(), que remove o último elemento da lista. Já o ovo, a salada e a maçã verde entraram na lista com comando push.