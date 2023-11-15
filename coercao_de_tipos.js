// Coerção de tipos

// Coerção explícita

const numero = 10;
console.log(numero, typeof numero)
const numeroEmString = String(numero)
console.log(numeroEmString, typeof numeroEmString)

console.log(Number("11212"))
console.log(parseFloat('22212123.121'))
console.log(parseInt('22212123.121')) // ajuda arededondar número

console.log(Boolean(1))


// Coerção implícita(automática)

console.clear()
console.log(18 +1)
console.log(18 + '1') //  ele junta os dois textos

console.log('10' - 1) // assim ele realmente faz a operação

console.log(10 * '3') // assim também, só para soma que não

console.log(10 - 'asas') // NaN Not a Number

