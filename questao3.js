let prompt = require('prompt-sync')();

let nomes = []
let notas = []

for(let i = 0; i < 5; i++){
    let nome = String(prompt(`Digite o nome do ${i + 1}º aluno: `));
    nomes.push(nome)
    let nota = Number(prompt(`Digite a sua nota: `));
    notas.push(nota)
}

for(let i = 0; i < 5; i++){
    if(notas[i] > 5){
        console.log('Nome:',nomes[i],', Nota:', notas[i])
    }
}
