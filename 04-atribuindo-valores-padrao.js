/// DEFAULT VALUES
    
    /* 
    Caso estejamos fazendo uma calculadora, por exemplo, e quisermos garantir que a operação será feita mesmo que o usuário deixe de adicionar um dos números, podemos criar um "valor padrão". 

    Este valor será adicionado automaticamente, impedindo que a aplicação quebre. Exemplo:
    */

const multiplica = (a = 0, b = 1) => {
    console.log(`a = ${a} e b = ${b} e o resultado é ${a * b}`)
}

multiplica(110, 3)  // 330
multiplica(110)     // 110, afinal b ficou valendo 1 por padrão
multiplica()        // 0, com a=1 e b=0
multiplica(2, 3)    // 6


/// DEFAULT VALUE ANCORADO EM OUTRA VARIÁVEL

    /* Neste caso, o 'a' vira a referencia: se a usuária não adicionou o segundo número, a aplicação vai entender que ela quer multiplicar o número por ele mesmo. */

const multiplica2 = (a = 0, b = a) => {
    console.log(`a = ${a} e b = ${b} e o resultado é ${a * b}`)
}

multiplica2(4, 10)  // 40
multiplica2(4)      // 16
multiplica2()       // 0