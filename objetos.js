// Objetos

// Comoc riar um objeto no JavaScript?
console.clear()
let pessoa ={
    nome: 'Alice',
    'nome-da-pessoa': 'Exemplo',
    idade: 26,

}
console.log(pessoa)

console.log(pessoa.nome)
console.log(pessoa['nome'])

pessoa.altura= 1.77
console.log(pessoa)


delete pessoa.altura
console.log(pessoa)

for(let chave in pessoa) {
    console.log(chave)
}