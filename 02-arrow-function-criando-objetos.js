// CRIANDO OBJETOS COM ARROW FUNCTIONS

        const criarObjeto = (nome, idade) => (
            {
                nome, 
                idade
            }
        )
        console.log(criarObjeto("Dandara", 27))
 
            // { 
            //     nome: 'Dandara', 
            //     idade: 27 
            // }

            

// CRIAR OBJETO COM SEU PRÓPRIO CONSTRUTOR - AQUI NÃO PODEMOS USAR ARROW FUNCTIONS

        function participante (nomeInformado, idadeInformada){
            this.nome = nomeInformado
            this.idade = idadeInformada
        }
        console.log(new participante("Marcela", 30))

            // participante { 
            //     nome: 'Marcela', 
            //     idade: 30 
            // }

