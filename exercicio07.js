//Crie uma função que receba quatro números como parâmetros(numero, minimo, maximo, inclusivo) e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo.
//Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo.
//Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo.

function inBetween(num, min, max, between) {
    if (between == true) {
        return getResult(num, min, max)
    } else {
        return console.log(false)
    }
}

function getResult(num, min, max) {
    console.log(num >= min && num <= max)
}

inBetween(101, 11, 100, true)

//True
//False