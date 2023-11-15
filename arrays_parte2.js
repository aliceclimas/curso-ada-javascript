// Arrays Parte II
// Métodos de Array - terminam com ()

// Fatiamento

let arr = [10,25,23,28,26]
let arr2 = []
// Slice
console.log(arr.slice(0,2))
console.log(arr.slice(2))

// Adicionar elementos

console.log('Antes de adicionar', arr2)
arr2.push(10,20,30) // push adiciona no final
arr2.unshift(0) // unshift adiciona no começo da array

arr2.pop()
console.log('Depois de remover', arr2) // pop remove o último elemento

arr2.shift()
console.log('Depois de remover com o shift', arr2)

console.log(arr.concat(arr2))

console.log(arr)

// como saber o índice do meu elemento?

let indiceElemento = arr.indexOf(25)
console.log(indiceElemento)

// onde está o último índice do elemento que você quer?
let arr3 = [1,2,3,3,5,3]
console.log(arr3.lastIndexOf(3))

// Tem o elemento ness array?
console.log(arr.includes(6))

console.log('Array normal', arr)
const arrayInverte = arr.reverse()
console.log('Array invertido', arrayInverte)