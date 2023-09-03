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

















//desafio 1

const genero2 = prompt("Qual é o gênero do filme").toLowerCase().trim()
const preco2 = Number(prompt("Qual é o preço do ingresso"))
const escolha = prompt("Qual lanche vc quer, escolha um número: 1(pipoca),2(chocolate),3(doce)")

const lanchinho = ["","pipoca","chocolate","doce"]

if (genero2 === "fantasia" && preco2 < 15) {
    console.log(`Bom filme! e aproveite seu/sua ${lanchinho[escolha]} `)
}else {
    console.log("Escolha outro filme :(")
}






// desafio 2

const nome = prompt("qual e seu nome").toUpperCase()
const tipoJogo = prompt("Qual tipo de jogo quer assistir IN(internacional) ou DO(doméstico)").toUpperCase()
const etapaJogo = prompt("Qual estapa do jogo quer assistir SF(semi-final), DT(terceiro lugar), FI(final)").toUpperCase()
const categoria = Number(prompt ("qual categoria quer assitir 1, 2 ,3, 4"))
const quantidade = Number(prompt("Quantos ingressos quer comprar"))

const objSF = {
    c1: 1320,
    c2: 880,
    c3: 550,
    c4: 220
}


const objDT = {
    c1: 660,
    c2: 440,
    c3: 330,
    c4: 170
}


const objFI = {
    c1: 1980,
    c2: 1320,
    c3: 880,
    c4: 330
}





function valor (a,b) {
if (a==="SF"&&b===1){
    justo = objSF.c1
}else if(a==="SF"&&b===2) {
    justo = objSF.c2
}else if(a==="SF"&&b===3) {
    justo = objSF.c3
}else if(a==="SF"&&b===4) {
    justo = objSF.c4
}else if(a==="DT"&&b===1) {
    justo = objDT.c1
}else if(a==="DT"&&b===2) {
    justo = objDT.c2
}else if(a==="DT"&&b===3) {
    justo = objDT.c3
}else if(a==="DT"&&b===4) {
    justo = objDT.c4
}else if(a==="FI"&&b===1) {
    justo = objFI.c1
}else if(a==="FI"&&b===2) {
    justo = objFI.c2
}else if(a==="FI"&&b===3) {
    justo = objFI.c3
}else if(a==="FI"&&b===4) {
    justo = objFI.c4
}
 return justo
}

const numeroexacto = valor(etapaJogo,categoria)








function logica (EJ,C,Q) {
   
    if ( EJ==="SF" && C===1){
     valortotal = 1320 * Q
    } else if( EJ==="SF" && C===2){
     valortotal = 880 * (Q)
    } else if( EJ==="SF" && C===3){
     valortotal = 550*Q
    } else if( EJ==="SF" && C===4){
     valortotal = 220*Q
    }      else if ( EJ==="DT" && C===1){
     valortotal = 660 * Q
    }else if(EJ==="DT" && C===2){
     valortotal = 440*Q
    }else if(EJ==="DT" && C===3){
     valortotal = 330*Q
    } else if(EJ==="DT" && C===4){
     valortotal = 170 *Q
    }     else if (EJ==="FI" && C===1){
     valortotal = objFI.c1 * Q 
    } else if(EJ==="FI" && C===2){
     valortotal = 1320*Q
    } else if(EJ==="FI" && C===3){
     valortotal = 880*Q
    } else if( EJ==="FI" && C===4){
     valortotal = 330 * Q
    } 
    return valortotal
}   




const numerofinal = logica(etapaJogo,categoria,quantidade)

switch(etapaJogo){
    case "SF":
        valor = "Semi-Final"
        break
    case "DT":
        valor = "Desição do 3° lugar"
        break
    case "FI":
        valor = "Final"
        break
    default:
        break

}

const valordolaringresso = numeroexacto/4.10
const valordolartotal = numerofinal / 4.10

console.log(`---Dados de compra--- 
Nome do cliente: ${nome}
Tipo de jogo: ${tipoJogo === "IN" ? "Internacional" : "Nacional"}
Etapa do jogo: ${valor}
Categoria: ${categoria}
Qauntidade de ingressos: ${quantidade} ingressos
----Valores---
Valor do ingreso: ${tipoJogo === "DO" ? `${numeroexacto} R$` : `${valordolaringresso} $`} 
Valor total: ${tipoJogo === "DO" ? `${numerofinal} R$` : `${valordolartotal} $` }`)
