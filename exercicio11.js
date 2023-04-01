//Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:
const array = [7, 14, "olá"]

function receberPrimeiroEUltimoElemento() {
    const arrayFirstLast = [array[0], array[array.length - 1]]
    return console.log(arrayFirstLast)
}

receberPrimeiroEUltimoElemento()