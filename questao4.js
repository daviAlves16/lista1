let prompt = require('prompt-sync')();

let notas = []
let media = 0;

for(let i = 0; i < 80; i++){
    let nota = Number(prompt(`Digite a nota do ${i + 1}º aluno: `));
    notas.push(nota)
    media = media + nota
}

for(let i = 0; i < 80; i++){
    console.log(`Aluno ${i+1}:`, notas[i])
}
console.log('A media da turma é: ', media/80)