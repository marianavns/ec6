// FUNÇÃO TRADICIONAL

function somaNumeros (a, b) {
    return a + b
}

console.log(somaNumeros(2,3))


// ARROW FUNCTION

const somaNumero = (a, b) => {
    a + b
}

console.log(somaNumeros(10, 20))

// ARROW FUNCTION COM APENAS UM ARGUMENTO

const escreveNome = nome => console.log(nome)
escreveNome('Mariana')

const somaCom10 = numero => numero + 10
console.log(somaCom10(40))

