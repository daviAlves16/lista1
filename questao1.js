let prompt = require('prompt-sync')();
let notas = []

for(let i = 0; i < 10; i++){
    let nota = Number(prompt(`Digite a nota do ${i + 1}º aluno: `));
    notas.push(nota)
}

for(let i = 0; i < 10; i++){
    if(notas[i] > 5){
        console.log("Nota: ", notas[i])
    }
}
