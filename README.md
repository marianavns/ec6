# EcmaScript 6

## Arrow Functions

A _arrow function_ é uma função anônima, ou seja: ou "guardamos" o que precisa ser feito por essa função dentro de uma variável (const, let ou **var**) OU ela pode ser passada como parâmetro em outra função.

### Arrow Function dentro de uma variável

Essa é a forma tradicional de escrever uma função de soma:

```js
function somaNumeros (a, b) {
    return a + b
}

console.log(somaNumeros(2,3))
```

E assim escrevemos como arrow function:

```js
const somaNumeroArrow = (a, b) => a + b

console.log(somaNumeroArrow(10, 30))
```

O resultado será exatamente o mesmo, mas com arrow function usamos menos letras! Tudo o que foi feito aqui foi guardar uma tarefa - a tarefa de somar - dentro de uma variável, a `somaNumero`. Assim, sempre que dois números precisarem ser somados, chamamos a variável que possui dentro dela essa "habilidade".

Observação: Se a função tiver apenas um argumento, pode-se omitir os parênteses:

```js
const escreveNome = nome => console.log(nome)
escreveNome("Mariana")
```

```js
const somaCom10 = numero => numero + 10
somaCom10(40)
```

### Arrow Function para criar um objeto

Só relembrando: objeto é um elemento que representa alguma entidade. Se quisermos representar a entidade "pessoaParticipanteDoTreinamento", temos esse possível resultado:

```js
{
    nome: "Dandara",
    idade: 27
}
```

Para criar um objeto como esse e ter a liberdade de mudar estes dados a qualquer momento, para qualquer participante, contamos com a ajuda da arrow function, desta forma:

```js
const criarObjeto = (nome, idade) => (
    {
        nome, 
        idade
    }
)
console.log(criarObjeto("Dandara", 27))
```

Resultado detalhado (no console do Chrome):

![](.\assets\03-01-object-dandara.png)

* Sim, o "desenho" da arrow function muda um pouco para criar um objeto. Deixa de ser:
  `nomeDaFuncao = (argumento) => {}` 

  e passa a ser:

  `nomeDaFuncao = (argumento) => ( {} )`

  _Agora temos parênteses extras._

Guarde a informação acima sobre arrow functions criando objetos! Ela será muito útil na hora de manipular registros de pessoas, filmes, funcionários e todo o resto nos bancos de dados!

#### Arrow Function pode ser uma função construtora?

Vamos lá... Para criar um objeto "um pouco mais completo e manipulável" que o objeto no tópico anterior, usa-se uma função assim: 

```js
function participante (nomeInformado, idadeInformada){
    this.nome = nomeInformado
    this.idade = idadeInformada
}

console.log(new participante ("Marcela", 30))
```

Sendo esse o resultado mais detalhado no console: 

![](.\assets\03-02-constructor-marcela.png)

O problema é que não é possível fazer isto com Arrow Function por causa do "this" :(

Mas ainda vamos voltar nisso!






























































































