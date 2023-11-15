// Funções

 // Comece definindo sua função

 //function saudacao() {
    //console.log('OLá,seja bem vinda(o) ano nosso curso de JavaScript')
 //}

 // Chamando sua função

 //saudacao()

 // Como enviar parâmetros para as funções?

 function saudacao(nome, curso) {
    console.log(`Olá,${nome} seja bem vinda(o) ano nosso curso de ${curso}`)

 }
 saudacao("Alice", 'HTML')

 function saudacao(nome, curso = 'HTML') {
    console.log(`Olá,${nome} seja bem vinda(o) ano nosso curso de ${curso}`)

 }
 saudacao("Alice")

 function soma(num1, num2) {
    console.log('Soma=' , num1+num2)
 }
 soma(10,20)

 function soma(num1, num2) {
    return num1 + num2
 }
 const resultado = soma(10,20)
 console.log(resultado)

 //Sempre opte por retornar valores, não com console.log


 function maiorQue(numero) {
    if (numero > 30){
        return true
    }
    return false
 }