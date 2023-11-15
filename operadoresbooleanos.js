// Operadores Booleanos
//Igualdade (== ou ===)
//Desiguladade 
// Maior que : >
// Maior ou igual a que: >=
// Menor que : <
// Menor ou igual a que : <=


const numero = 10;
console.log(numero > 20);
console.log(numero == 10);
console.log(numero == 10)
console.log(numero == '10')
// JavaScript só compara o conteúdo
console.log(10 === '10') // utilize esse para evitar bugs

console.clear() // Limpa o que foi impresso acima

console.log(10 != 10)
console.log(10 != '10')
console.log(10 !== '10')


// Conjunções lógicas
let idade = 26;
let tenhoCNH = true;

//  and &&
const possoDirigir = idade >= 18 && tenhoCNH === true
console.log('Posso dirigir?', possoDirigir)

// or => ||

idade = 40;
const votoFacultativo = idade < 28 || idade >= 70

// Not => !

const estouGostando = false;
console.log(!estouGostando)
