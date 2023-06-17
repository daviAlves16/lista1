let prompt = require('prompt-sync')();

let qtdAdd = Number(prompt(`Quantos numeros deseja inserir no vetor?:  `));
let numeros = []

for(let i = 0; i < qtdAdd; i++){
    let numero = Number(prompt(`Digite o ${i + 1}º numero: `));
    numeros.push(numero)
}
numeros.reverse();
console.log('O vetor é: ', numeros)