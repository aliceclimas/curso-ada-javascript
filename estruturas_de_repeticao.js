// Estruturas de repetição


const input = require('readline-sync') 
// importando  biblioteca
const numerosor = 5;
let numero = Number(input.question('Qual numero voce escolhe?'))
console.log(numero, typeof numero)

while(numero !== numerosor){
    console.log('Digite um número')

    numero = Number(input.question('Qual numero voce escolhe?'))
}