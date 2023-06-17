let prompt = require('prompt-sync')();

let qtdAdd = Number(prompt(`Quantos numeros deseja inserir no vetor?:  `));
let numeros = []
let achou = false

for(let i = 0; i < qtdAdd; i++){
    let numero = Number(prompt(`Digite o ${i + 1}º numero: `));
    numeros.push(numero)
}

for(let i = 0; i < qtdAdd; i++){
    if(achou == false){
        if(numeros[i] < 0){
            console.log("Indice do primeiro numero negativo é: ", i)
            achou = true
        }
    }
}