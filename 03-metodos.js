// CRIANDO PROPRIEDADES MÉTODOS

        // Métodos nada mais são que funções guardadas em um objeto. Também são propriedades. O nome da função é a chave, corpo da função fica no valor.
        // Já as propriedades são características. Podemos chamá-las por um ponto.

const operacoes = {
    materia: "matemática",
    disponiveis: ["subtração", "multiplicação"],
    mostraMateria: function escreve () {
        console.log( this.materia )
    },
    subtracao: function subtrai (a, b) {
        console.log( a - b ) 
    },
    multiplicacao: function multiplica (a, b) {
        console.log( a * b ) 
    }
}

console.log(operacoes.materia)
    // matemática

console.log(operacoes.materia.length)
    // 10, afinal matemática tem 10 letras

operacoes.mostraMateria()
    // matemática

operacoes.subtracao(100, 3)
    // 97
