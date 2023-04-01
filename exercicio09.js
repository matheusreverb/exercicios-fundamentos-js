//Escreva uma função que receba dois parâmetros, O primeiro parâmetro é o elemento que repetirá, enquanto
//que o segundo será o número de vezes que haverá repetição. Um array será tornado.

function repeat(num, index) {
    const array = []

    for (let i = 0; i < index; i++) {
        array.push(num)
    }
    console.log(array)
}

repeat(2, 8)