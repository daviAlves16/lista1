let prompt = require('prompt-sync')();

let numeros = []

for(let i = 0; i < 3; i++){
    let numero = Number(prompt(`Digite o ${i + 1}º numero: `));
    numeros.push(numero)
}
numeros.reverse();
console.log('O vetor é: ', numeros)