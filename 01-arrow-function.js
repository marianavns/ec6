/// FUNÇÃO TRADICIONAL

        function somaNumeros (a, b) {
            return a + b
        }
        console.log(somaNumeros(2,3))



/// ARROW FUNCTION SEM CHAVES E SEM RETURN

        var somaNumero = (a, b) =>  a + b
        console.log(somaNumero(10, 20))
            // Não precisa de chaves nem return pq é apenas para mostrar o resultado no console. Se adicionar as chaves, só funciona com return.

            

/// ARROW FUNCTION COM CHAVES E COM RETURN

        var somaNumero33 = (a, b) => {
            return a + b 
        }
        console.log(`${somaNumero33(10, 20)} é o resultado.`)
            // Se o valor da função for usado em outro lugar, a arrow function PRECISA ter chaves e um return. PRECISA.



/// ARROW FUNCTION COM APENAS UM ARGUMENTO

        const escreveNome = nome => console.log(nome)
        escreveNome('Mariana')

        const somaCom10 = numero => numero + 10
        console.log(somaCom10(40))
            // Os parenteses no argumento são dispensáveis.

