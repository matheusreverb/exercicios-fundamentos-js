//Escreva uma função que receba um valor booleano ou número.
//Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso.
//Por exemplo, se a entrada for false, retornará true. Se o parâmetro for número,
//o retorno será o número inverso. Por exemplo, se for fornecido1, o retorno será -1.
//Se o parâmetro de entrada não for de nenhum dos tipos acima, retorne "booleano ou número esperados, mas o
//parâmetro é do tipo ...".

function inverso(args) {
    if (typeof args === "boolean") {
        return console.log(!args)
    }
    else if (typeof args === "number") {
        return console.log(args - args * 2)
    } else {
        console.error("Essa função só aceita booleanos ou números, mas o parâmetro é do tipo String")
    }

}

inverso("alouu")