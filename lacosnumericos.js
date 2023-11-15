// Laços numéricos
const input = require('readline-sync')

// Acumulador
let acumulador = 0;
acumulador = acumulador + 5;
acumulador += 1;
acumulador++

console.log(acumulador)
// for

for(let i = 0;  i < 10; i++){
    console.log('Repetição')
}
for(let i = 12;  i > 8; i--){
    console.log('Repetição')

   
}
let nota;
//Resolvendo problema inicial
for (let i = 1; i <= 3; i++){
    nota = Number(input.question(`Informe a nota do aluno: ${i}`))

    soma = soma  + nota
}

console.log(`A média do aluno é ${soma / 3}`)