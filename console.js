const minhaVar = true;

console.log(minhaVar);

// Tratamento de erro!

console.error("Digite em um formato aceitavel");

console.log("deu erro");
console.error("deu erro");

console.log("deu erro");
console.error(new Error("deu erro"));
/* Saida 
deu erro
Error: deu erro
    at Object.<anonymous> (/home/juliana/Documents/alura/2206-fundamentosjs/comparacoes.js:21:15)
    at Module._compile (internal/modules/cjs/loader.js:1076:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
    at Module.load (internal/modules/cjs/loader.js:941:32)
    at Function.Module._load (internal/modules/cjs/loader.js:782:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47 */
