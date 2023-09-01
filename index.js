/*
exercicio 1

a) ele faz o teste para saber se o numero que o usuario digitou é
par ou não

b) los numeros: 2,4,6,8,10 e assim por diante (numeros pares no caso)

c) los numeros 1,3,5,7,9 e assim por diante (numeros impares)



exercicio 2

a) o codigo serve para dar o preço de uma fruta sem ter que escrever o preço para cada 
uma das frutas,  caso que no supermecado tenha mais do que 5 frutas, além de que
com switch o codigo fica mais bonito e legivél

b) vai ser impresso: O preço da fruta Maçã é R$ 2.25

c) se retirássemos esse break o codigo seguiria reto e daria o preço do default
O preço da fruta Pêra é R$ 5




exercicio 3

a) a primeira linha esta convertendo á numero o prompt que o usuario digitou

b) se fosse 10 vai imprimir: Esse úmero passou no teste
se fosse -10 não imprimi nada já que no condicional não tem o else

c) tem sim um erro, porque quando queremos imprimir mensagem não da certo porque esta 
dentro do escopo local do if, e não podemos puxar direto desde fora o que esta num escopa local
*/





// exercicio 1 codigo

const idade = Number(prompt("Qual é sua idade"))

if (idade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}



// exercicio 2 codigo

const turno = prompt("Digite seu turno: M (matutino), V (Vespertino), N (Noturno)").toUpperCase()

if (turno === 'M') {
    console.log("Bom dia!")
}else if(turno === "V") {
    console.log("Boa tarde!")
} else if (turno === "N"){
    console.log("Boa noite!")
} else {
    console.log("Não digitou do jeito especificado")
}




// exercicio 3 codigo

const turno2 = prompt("Digite seu turno: M (matutino), V (Vespertino), N (Noturno)").toUpperCase()

switch (turno2) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Não digitou do jeito especificado")
        break

}





// exercicio 4 codigo

const genero = prompt("Qual é o gênero do filme").toLowerCase().trim()
const preco = Number(prompt("Qual é o preço do ingresso"))


if (genero === "fantasia" && preco < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}