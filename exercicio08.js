//Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a 
//multiplicação deles. Porém, não utilize o operador de multiplicação.

function multiplicar(num1, num2) {
    const array = []
    let result = 0
    for (let i = 0; i < num2; i++) {
        array.push(num1)
    }

    function sum() {
        return result += num1
    }
    array.map(sum)

    return console.log(result)
}

multiplicar(8, 4)

//Outra forma

function multiplicar2(num1, num2) {
    const array = []
    let result = 0
    for (let i = 0; i < num2; i++) {
        array.push(num1)
    }

    for (let i = 0; i < array.length; i++) {
        result = result + array[i]
    }

    console.log(result)
}

multiplicar2(8, 5)