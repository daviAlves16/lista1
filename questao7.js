let prompt = require('prompt-sync')();

let qtdAdd = Number(prompt(`Quantos numeros deseja inserir no vetor?:  `));
let indices = []
let numeros = []

for(let i = 0; i < qtdAdd; i++){
    let numero = Number(prompt(`Digite o ${i + 1}º numero: `));
    numeros.push(numero)
}

let num = Number(prompt(`Digite um numero que queira buscar na lista:  `));


for(let i = 0; i < qtdAdd; i++){
    if(numeros[i] === num){
        indices.push(i)
    }
}

console.log('Os indices encontrados com esse numero são: ', indices)