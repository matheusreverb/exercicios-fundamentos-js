//Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. 
//Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2º mês.

const mesArray = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

function nomeDoMes(numero) {
    if (numero < 1 || numero > 12) {
        console.log(`Não existe o número de mês ${numero} digite um número entre 1 e 12`)
    } else {
        const numeroConversao = --numero
        return console.log(mesArray[numeroConversao])
    }
}

nomeDoMes(02)