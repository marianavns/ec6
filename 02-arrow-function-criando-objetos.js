// CRIAR OBJETO COM AS FUNÇÕES NATIVAS DO JS

const criarObjeto = (nomeInformado, idadeInformada) => (
    {
        nome: nomeInformado, 
        idade: idadeInformada
    }
)

console.log(criarObjeto("Dandara", 27))

/* 
CONSOLE:
{ 
    nome: 'Dandara', 
    idade: 27 
}
*/


// CRIAR OBJETO COM SEU PRÓPRIO CONSTRUTOR

function participante (nomeInformado, idadeInformada){
    this.nome = nomeInformado
    this.idade = idadeInformada
}

console.log(new participante("Marcela", 30))

/*
CONSOLE:
participante { 
    nome: 'Marcela', 
    idade: 30 
}
*/
