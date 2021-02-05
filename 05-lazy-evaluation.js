// LAZY EVALUATION

    /* É uma estratégia na programação. 
    É criada uma tarefa que só será executada se outra for. 
    Exemplo: Uma claculadora precisa de dois argumentos. Se os dois argumentos não forem adicionados, uma função randomica escolhe um número aleatório para completar o cálculo.*/

const geraRandomico = () => {
    console.log(`estratégia de lazy evaluation foi ativada.`)
    return Math.random() * 10
}

const multiplica = (a = 0, b = geraRandomico()) => console.log( a * b )

multiplica(2, 4)    // 8
multiplica(100)     // 100 multiplicado por algum número randômico
multiplica()        // 0