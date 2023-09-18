/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log(resultado)

resultado = bool1 && bool2 && bool3
console.log(resultado)

resultado = !resultado && (bool1 || bool2)
console.log(resultado)

console.log(typeof resultado)*/

/*let primeiroNumero = prompt("Digite um número!")
let segundoNumero = prompt("Digite outro número!")

const soma = primeiroNumero + segundoNumero
console.log(soma)*/

/*let idade = prompt("Digite sua idade!")
let idadeDoSeuAmigo = prompt("Digite a idade do seu amigo!")

let idadeMaior = idade > idadeDoSeuAmigo
const diferença = idade - idadeDoSeuAmigo*/

/*let par = prompt("Digite um número par!")
let resto = par % 2

let impar = prompt("Digite um número impar!")*/

/*let idade = prompt("Digite sua idade!")
const idadeMeses = Number(idade) * 12

const idadeDias = Number(idade) * 360

const idadeHoras = 360 * 24*/

/*let numero1 = prompt("Digite um número!")
let numero2 = prompt("Digite um número!")

let maior = numero1 > numero2
console.log("O primeiro número é maior que o segundo número?", maior)

let igual = numero1 === numero2
console.log("O primeiro número é igual ao segundo?", igual)

let divisivel = numero1 % numero2
console.log("O primeiro número é divisivel pelo segundo número?", divisivel)*/

/*const nome = "Gus"
const nome2 = "tavo"

console.log(nome + nome2)

const nome3 = "10"
const nome4 = "00"



console.log(nome3 + nome4)*/

/*const name = "Gustavo"
const idade = 16 
const frase = `eu nome é ${name} e tenho ${idade} anos`

console.log(frase)*/

/*let nome = prompt("Qual o seu nome?")
let cor = prompt("Qual sua cor favorita?")

console.log(`A cor favorita de ${nome} é ${cor}`)*/

/*let nome = prompt("Digite seu nome!")
let cor = prompt("Digite sua cor favorita!")

console.log("Meu nome é " + nome + " e minha cor favorita é " + cor)*/

/*const nome = "Gustavo Gonçalves"

console.log(nome.length)*/ //17 (conta o número de letras e com espaço)

/*const frase = "EAE GALERAAAA!"

console.log(frase.toLowerCase())*/ //deixa toda frase minuscula (eae galeraaaa!)

/*const frase = "eae galeraaaa"

console.log(frase.toUpperCase())*/ //deixa toda frase maiuscula (EAE GALERAAAA)

/*const email = " gustavogoncalvezs@gmail.com "

console.log(email.trim())*/ //esse comando tira os espaços antes e depois da string

/*const frase = "Hoje comi club social"

console.log(frase.includes('club')) //true
console.log(frase.includes('jantei'))*/ //false
//esse comando mostra se a palavra dentro do () esta na frase,

/*const frase = "Hoje comi bolacha"

console.log(frase.replace('bolacha', 'biscoito'))*/ //troca as palavras que estão no primeiro parentes (bolacha) para o segundo (biscoito)

/*const lista = ['banana', 'chocolate', 'frango']
             //0       , 1         , 2
console.log(lista[2]) //frango */
//esse comando mostra qual é o elemento que está no número escolhido dentro dos []

/*let aleatorio = prompt('Digite um número de 0 a 3')
const premios = ['celular', 'videogame', 'pc', 'tv']
              //0        , 1          , 2   , 3
console.log(premios[aleatorio]) //videogame */

/*const premios = ['celular', 'videogame', 'pc', 'tv']

console.log(premios.length)*/ //4

/*const premios = ['celular', 'videogame', 'pc', 'tv']

console.log(premios.includes('celular')) //true
console.log(premios.includes('tablet')) //false */

/*const numero = [1, 2, 3]
numero.push(4) //esse comando sempre ira adicionar qualquer número ou qualquer outra coisa no final

console.log(numero) //[1, 2, 3, 4] */

/*const comida = ['pão', 'churrasco', 'arroz doce']
comida.pop() //esse comando ira tirar o ultimo elemento

console.log(comida) //['pão', 'churrasco'] */

/*const letras = ['A', 'B', 'C', 'D', 'E']
letras.splice(3) //esse comando ira tirar a partir do número que você por no ()

console.log(letras) //['A', 'B', 'C'] */

/*function imprimirOlaMundo() {
    console.log('Olá mundo!')
}
imprimirOlaMundo() //R=Olá mundo! */

/*function calcularArea(altura, largura) {
    const area = altura * largura
    console.log(area)
}
calcularArea(2, 3) //R=6 */

/*function imprimaNome() {
    console.log(`Olá ${imprimaNome}`) 
}
imprimaNome('Gustavo') R=Olá Gustavo
imprimaNome('Roberto') R=Olá Roberto
imprimaNome('Carlos') R=Olá Carlos */

/*function calcularArea(altura, largura) {
    const area = altura * largura
    console.log(area)
}
calcularArea(2, 3)
console.log(calcularArea) //Variavel Local */

/*const calcularArea1 = 'altura'

function calcularArea(altura, largura) {
    const area = altura * largura
    console.log(calcularArea1)
    console.log(area)
}
calcularArea(2, 3) //Variavel Global */

/*const nome = 'Gustavo'

function imprimaNome() {
    const meuSobrenome = 'Gonçalves'
    console.log(nome)
    console.log(meuSobrenome)
}
imprimaNome() //R=Gustavo Gonçalves */

/*function calculos(numero1, numero2){
     soma = numero1 + numero2
    return soma
}
const calculoSoma = calculos(2, 3)
console.log(calculoSoma) //5 */

/*const numero = [1, 2, 3, 4, 5]
function arrayNumeros(array){
    const ultimoNumero = array[4]
    const primeiroNumero = array[0]
    const novoArray = [ultimoNumero / 2, primeiroNumero / 2]
    return novoArray
}
console.log(arrayNumeros(numero)) //2,5 e 0,5 */

/*const numero = [100, 123, 456, 313, 567]
function arrayNumeros(array){
    const ultimoArray = array[4]
    const primeiroArray = array[0]
    const novoArray = [ultimoArray / 2, primeiroArray / 2]
    return novoArray
}
console.log(arrayNumeros(numero)) //283,5 e 50 */

/*const professor = {
    nome : 'Calros' ,
    idade : 45 ,
    tarefas : ['Dar aula', 'e responder dúvidas'], //estrutura padrão de um objeto
    
    contarPiada : function(){
        console.log('é pa vê ou é pa comê?')
    }
}
console.log(professor.idade) R=45
console.log(professor.nome) R=Carlos
console.log(professor.tarefas) R=['Dar aula', 'e responder dúvidas']
console.log(professor.contarPiada) R=[Functions: contarPiada */

/*const professor = {
    nome: "Vitor",
    idade: 27,
    email: 'vitor@gmail.com'
   }
   //Ira trocar os valores
   professor.nome = 'Mika'
   professor['email'] = 'profmika@gmail.com'

   console.log(professor.nome) R=Mika
   console.log(professor.email) R=profmika@gmail.com */

/* const jogo = {
    nome: 'Red Dead Redemption',
    direor: 'Rob Nelson',
    lancamento: 2018,
    elenco: ['Arthur Morgan', ',John Marston', 'e Dutch'],
   }
   console.log('Nome do jogo:', jogo.nome) R=Nome do jogo: Red Dead Redemption
   console.log('Diretor do jogo:', jogo.direor) R=Diretor do jogo: Rob Nelson
   console.log('Data de lançamento:', jogo['lancamento']) R=Data de lançamento: 2018
   console.log('Alguns personagens:', jogo['elenco']) R=Alguns personagens:['Arthur Morgan', ',John Marston', 'e Dutch */

/*  const pessoa = {
    nome : 'Gustavo',
    idade : 16,
    musicaFav : 'GoodByes',
   }
   console.log(`O meu nome é ${pessoa.nome}, e tenho ${pessoa.idade} anos e minha música favorita é ${pessoa.musicaFav}`)
R= O meu nome é Gustavo, e tenho 16 anos e minha música favorita é GoodByes */

/* const donoDoPet = {
    nome: "Gustavo",
    pet: { acessando objetos dentro dos objetos {{}}
    nomeDoPet: "Bob e Malu",
    raca: "Vira-latas", 
    idade: 6
   }
   }
   console.log('Nome dos meus cachorros:', donoDoPet.pet.nomeDoPet) 
   R= Nome dos meus cachorros: Bob e Malu */

/*  const curso = {
    nome: "Noturno Frontend",
    linguagens: ["JS", "CSS", "HTML"]
   }
   console.log(curso.linguagens[0]) acessando arrays dentro de objetos {[]}
    R=JS */

/*  const professores = [
        {nome: "Andrei", modulo: 1},
        {nome: "Vitor", modulo: 2}, 
        {nome: "Mina", modulo: 3}
       ]
       console.log(professores[1].nome) acessando arrays de objetos [{}] 
       R=Vitor */

/*  const curso = {
        nome: "Frontend",
        linguagens: ["JS", "CSS", "HTML"]
       }
       curso.numeroEstudantes = 50 adicionar propriedades aos objetos
       console.log(curso.numeroEstudantes) 
       R=50 */

/*  const jogo = {
        nome: 'Red Dead Redemption',
        diretor: 'Rob Nelson',
        lancamento: 2018,
        elenco: ['Arthur Morgan', ',John Marston', 'e Dutch'],
       }
       jogo.atores = ['Roger Clark', ',Rob Wiethoff', 'e Benjamin Byron Davis']
       console.log(`o ator ${jogo.atores[0]} atua como ${jogo.elenco[0]} no ${jogo.nome}`)

       jogo.atores[0] = 'Xuxa' trocar o primeiro ator
       console.log(jogo.atores) R=[ 'Xuxa', ',Rob Wiethoff', 'e Benjamin Byron Davis' ]
       console.log(jogo.diretor) R=Rob Nelson
       console.log(jogo.nome) R=Red Dead Redemption
       console.log(jogo.lancamento) R=2018 */

/*       const usuario = {
 nome: 'Prof',
 idade: 25,
 email: 'prof@senacrs.com.br',
 cidade: 'São Paulo'
       }
console.log(usuario)

const usuario2 = {
    ...usuario
}
console.log(usuario2) Vai ficar igual o de cima, mas posso mudar as propriedades */

/*const pessoa = {
    nome: 'Gustavo',
    idade: 16
}

function copiaPessoa(teste) {
  const copia = {...teste} //copiando o objeto 'pessoa'
  copia.comidaFav = ['Churrasco', 'Pizza', 'Hamburguer'] 
  copia.melhorAmigo= {
  nomeAmigo: 'Felipe',
  idadeAmigo: 17
  }
console.log("O nome da pessoa é", copia.nome, "e suas comidas preferidas são", copia.comidaFav[0], ",", copia.comidaFav[1], "e", copia.comidaFav[2], ". Seu melhor amigo se chama", copia.melhorAmigo.nomeAmigo,
"e tem", copia.melhorAmigo.idadeAmigo, "anos") R=O nome da pessoa é Gustavo e suas comidas preferidas são Churrasco , Pizza e Hamburguer . Seu melhor amigo se chama Felipe e tem 17 anos
}
copiaPessoa(pessoa) */

/*const Lado1 = 5

function calcularAreaQuadrado(calculo){
    const area = Lado1 * Lado1
    console.log(area)
}
calcularAreaQuadrado(Lado1, Lado1) //R=25


const altura = 15
const largura = 5

function calcularRetangulo(calculo2){
    const area2 = altura * largura
    console.log(area2)
}
calcularRetangulo(altura, largura) //R=75


const base = 6
const altura2 = 12

function calcularTriangulo(calculo3){
    const area3 = (base * altura2) /2
    console.log(area3)
}
calcularTriangulo(base, altura2) //R= 36 */

/*const  anoDeNascimento = 2006
const anoAtual = 2023
const idade = anoAtual - anoDeNascimento

console.log(idade) //R= 17 



const numero1 = 84
const numero2 = 15
const soma = numero1 + numero2 //R=99
const resultado1 = soma

const subtracao = numero1 - numero2 //R=69
const resultado2 = subtracao

const multiplicacao = numero1 * numero2 //R=1260
const resultado3 = multiplicacao

const divisao = numero1 / numero2 //R=5.6
const resultado4 = divisao

const modulo = numero1 % numero2 //R= 9
const resultado5 = modulo

console.log(resultado1, resultado2, resultado3, resultado4, resultado5) 



const numero1 = 78
const numero2 = 87

const igual = numero1 === numero2 //R= false
const diferente = numero1 !== numero2 //R=true
const maior = numero1 > numero2 //R=false
const maiorIgual = numero1 >= numero2 //R=false
const menor = numero1 < numero2 //R=true
const menorIgual = numero1 <= numero2 //R=true

console.log(igual, diferente, maior, maiorIgual, menor, menorIgual)



const temIdadeParaDirigir = false
const temCarteiraDeMotorista = false
const temCarroPropio = false
const resultado1 = temIdadeParaDirigir && temCarteiraDeMotorista //false
const resultado2 = temCarroPropio || temCarteiraDeMotorista //false
const resultado3 = !temIdadeParaDirigir || !temCarteiraDeMotorista //R=true

console.log(resultado1, resultado2, resultado3) 



const listaDeNomes = [' pEDro ', ' JoNaS ', ' viTOR ']

console.log(listaDeNomes[0].toLowerCase()) //R=pedro
console.log(listaDeNomes[1].toLowerCase()) //R=jonas 
console.log(listaDeNomes[2].toLowerCase()) //R=vitor

console.log(listaDeNomes[0].toUpperCase()) //R=PEDRO
console.log(listaDeNomes[1].toUpperCase()) //R=JONAS
console.log(listaDeNomes[2].toUpperCase()) //R=VITOR

console.log(listaDeNomes[0].trim()) //R=pEDro
console.log(listaDeNomes[1].trim()) //R=JoNaS
console.log(listaDeNomes[2].trim()) //R=viTOR

console.log(listaDeNomes[0].includes('a')) //R=false
console.log(listaDeNomes[1].includes('a')) //R=true
console.log(listaDeNomes[2].includes('a')) //R=false

console.log(listaDeNomes[0].replaceAll('a', '#')) //R=pEDro
console.log(listaDeNomes[1].replaceAll('a', '#')) //R=JoN#S
console.log(listaDeNomes[2].replaceAll('a', '#')) //R=viTOR 



const nome = 'Gustavo'
const idade = 16
const cidade = 'São Leopoldo'

const templateString = `Olá, meu nome é ${nome}, e tenho ${idade} anos, e moro em ${cidade}`
console.log(templateString) //R=Olá, meu nome é Gustavo, e tenho 16 anos, e moro em São Leopoldo

const concatenacao = "Meu nome é " + nome + " ,e tenho " + idade + " anos, e moro em " +cidade+''
console.log(concatenacao) //R=Meu nome é Gustavo ,e tenho 16 anos, e moro em São Leopoldo



const notasDoAluno = {
    nome: 'Thomas',
    idade: 23,
    pais : 'Brasil',
    cidade : 'São Leopoldo',
    anoEscola : 2,
    curso: 'TI',
}
    notasDoAluno.notas = []
    notasDoAluno.notas.push(8, 4, 10)
 
   notasDoAluno.media = (notasDoAluno.notas[0] + notasDoAluno.notas[1] + notasDoAluno.notas[2]) /3

    notasDoAluno.pais = 'Brasil'
    notasDoAluno.anoNaEscola = 2
    notasDoAluno.cidade = 'São Leopoldo'

    console.log(`O nome do aluno é ${notasDoAluno.nome}, e ele tem ${notasDoAluno.idade} anos, ele é do ${notasDoAluno.pais} e mora em ${notasDoAluno.cidade}, ele esta no ${notasDoAluno.anoEscola} do ensino médio, e esta cursando ${notasDoAluno.curso}, as notas dele foram ${notasDoAluno.notas[0]}, ${notasDoAluno.notas[1]}, ${notasDoAluno.notas[2]}, e a media dele foi ${notasDoAluno.media} `)
// R= O nome do aluno é Thomas, e ele tem 23 anos, ele é do Brasil e mora em São Leopoldo, ele esta no 2 do ensino médio, e esta cursando 
TI, as notas dele foram 8, 4, 10, e a media dele foi 7.3 */

/*
if (1 === 2){ //false
    console.log("Os números são iguais")
} else { //true
    console.log('Os números não são iguais')
} //R= ira imprimir o else */

/*
const numero1 = 43
const numero2 = 34

if (numero1 > numero2){ 
    console.log('O número 1 é maior que o número 2') //R= é maior
} else if (numero1 < numero2){
    console.log('O número 1 é menor que o número 2')
} else{
    console.log('O número 1 é igual ao número 2') 
} */

/*const pokemonInicial = 'Squirtle'

if (pokemonInicial === 'bulbasaur'){
    console.log('Seu pokemon inicial é tipo planta e veneno')
} else if (pokemonInicial === 'charmander'){
    console.log('Seu pokemon inicial é tipo fogo')
} else if (pokemonInicial === 'Squirtle'){ //R=é tipo água
    console.log('Seu pokemon inicial é tipo água')
} else {
    console.log('Você não escolheu nenhum')
} */

/*let pokemon = 'Squirtle'
    switch (pokemon) {
        case 'Bulbasauro':
            console.log('Seu pokemon é do tipo planta e veneno')
            break;
    case 'Charmander':
        console.log('Seu pokemon é do tipo Fogo')
        break;
    case 'Squirtle':
        console.log('Seu pokemon é tipo água') //R=é tipo água
        default:
            break;
    } */

