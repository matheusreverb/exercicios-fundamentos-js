//Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+"na
// quantidade especificada no parâmetro.

function simboloMais(param) {
    let test = ""
    for (let i = 0; i < param; i++) {
        test += "+"
    }
    console.log(test)
}

simboloMais(10)
