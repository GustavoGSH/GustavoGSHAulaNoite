//Exercicio 1:
/*
const anoDeNascimento = 2006
const anoAtual = 2023
const idade = anoAtual - anoDeNascimento

console.log(idade) //R=17 anos 

//Exercicio 2:

const numero1 = 34
const numero2 = 79

const soma = numero1 + numero2  //R=113
const subtração = numero1 - numero2  //R=-45
const multiplicação = numero1 * numero2  //R=2686
const divisão = numero1 / numero2  //R=0.43....
const modulo = numero1 % numero2  //R=34

console.log(soma, subtração, multiplicação, divisão, modulo) 

//Exercicio 3:

const numero1 = 2
const numero2 = 3

console.log(numero1 === numero2, numero1 != numero2, numero1 > numero2, numero1 >= numero2, numero1 < numero2, numero1 <= numero2)
//R= 1- false, 2-true, 3-false, 4-false, 5-true, 6-true 

//Exercicio 4:

const temIdadeParaDirigir = false
const temCarteiraDeMotorista = false
const temCarroPropio = false

if (temIdadeParaDirigir && temCarteiraDeMotorista){
    console.log('Você pode dirigir')
} else if(temCarroPropio || temCarteiraDeMotorista){
    console.log('Você pode dirigir')
} else if(!temIdadeParaDirigir || !temCarteiraDeMotorista){
    console.log('Você não pode dirigir')  //R=Imprimiu essa
} else{ 

}

//Exercicio 5:

const nomes = [" GuStAvO ", " jAmElÃo", "CArlÃO"];

console.log(nomes[0].toLowerCase()); //R= gustavo
console.log(nomes[1].toLowerCase()); //R= jamelão
console.log(nomes[2].toLowerCase()); //R= carlão

console.log(nomes[0].toUpperCase()); //R= GUSTAVO
console.log(nomes[1].toUpperCase()); //R= JAMELÃO
console.log(nomes[2].toUpperCase()); //R= CARLÃO

console.log(nomes[0].trim()); //R=GuStAvO
console.log(nomes[1].trim()); //R=jAmElÃo
console.log(nomes[2].trim()); //R=CArlÃO

console.log(nomes[0].includes("A")); //R=true
console.log(nomes[1].includes("A")); //R=true
console.log(nomes[2].includes("A")); //R=true

console.log(nomes[0].replaceAll("A", "#")); //R= GuSt#vO
console.log(nomes[1].replaceAll("A", "#")); //R= j#mElÃo
console.log(nomes[2].replaceAll("A", "#")); //R= C#rlÃO 

//Exercicio 6:

const nome = 'Gustavo'
const idade = 16
const cidade = 'São Leopoldo'

const templateString = `Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}`
console.log(templateString) //R=Olá, meu nome é Gustavo, tenho 16 anos e moro em São Leopoldo

const concatenacao = 'Olá, meu nome é ' +nome+ ' , tenho ' +idade+ ' anos e moro em ' +cidade+ ''
console.log(concatenacao) //R=Olá, meu nome é Gustavo , tenho 16 anos e moro em São Leopoldo

//Exercicio 7:

const lado = 7

function calcularAreaQuadrado(calculo){
    const area = lado * lado
    console.log(area)
}
calcularAreaQuadrado(lado) //R=49

const altura = 34
const largura = 12

function calcularRetangulo(calculo2){
    const area2 = altura * largura
    console.log(area2)
}
calcularRetangulo(altura, largura) //R=408

const base = 12
const altura2 = 6

function calcularTriangulo(calculo3){
    const area3 = base * altura2
    console.log(area3)
}
calcularTriangulo(base, altura2) //R=72 

//Exercicio 8,9 e 10:

const aluno = {
  nome: "Kiko",
  idade: 18,
  curso: "TI",
};
console.log(
  `Nome do aluno é ${aluno.nome}, e ele tem ${aluno.idade} anos e esta cursando ${aluno.curso} na Unisinos`
);
//R=Nome do aluno é Kiko, e ele tem 18 anos e esta cursando TI na Unisinos

aluno.notas = [];
aluno.notas.push(8, 10, 7);

aluno.media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3;

console.log(
  `Nome do aluno é ${aluno.nome}, e ele tem ${aluno.idade} anos e esta cursando ${aluno.curso} na Unisinos, as notas dele são ${aluno.notas[0]}, ${aluno.notas[1]}, e ${aluno.notas[2]}, e a media final foi ${aluno.media}`
);
//R=Nome do aluno é Kiko, e ele tem 18 anos e esta cursando TI na Unisinos, as notas dele são 8, 10, e 7, e a media final foi 8.3

aluno.país = 'Brasil'
aluno.anoDaEscola = 3
aluno.cidade = 'Florianopolis'

console.log(`Nome do aluno é ${aluno.nome}, e ele tem ${aluno.idade} anos e esta cursando ${aluno.curso} na Unisinos. Ele mora no ${aluno.país}, e vive em ${aluno.cidade}, e ele esta no ${aluno.anoDaEscola} ano do ensino médio da escola`)
//R=Nome do aluno é Kiko, e ele tem 18 anos e esta cursando TI na Unisinos. Ele mora no Brasil, e vive em Florianopolis, e ele esta no 3 ano do ensino médio da escola


//Exercicio 11:

let ação = false;
let comedia = true;
let terror = false;
let ficção = false;
let aventura = false;

if (ação) {
  console.log(
    "Você gosta de filmes de ação! Explosões e perseguições são incríveis."
  );
} else if (comedia) {
  console.log("Você gosta de filmes de comédia! Rir é o melhor remédio."); //R=Imprimiu esse
} else if (terror) {
  console.log("Você gosta de filmes de terror! Prepare-se para muitos sustos.");
} else if (ficção) {
  console.log(
    "Você gosta de filmes de ficção científica! Viaje para outros mundos e realidades."
  );
} else if (aventura) {
  console.log(
    "Você gosta de filmes de aventura! Explore lugares incríveis e enfrente desafios emocionantes."
  );
} else {
  console.log("Não sei qual é o seu gênero de filme favorito.");
} 

//Exercicio 12:

let contagem = 10

while(contagem >= 0){
     if(contagem > 0){
     console.log(`Começando contagem regressiva ${contagem}`)
  } else{
     console.log(`Contagem concluida ${contagem}`)
  }
  contagem--
}//R=Começando contagem regressiva 10 9 8 7 6 5 4 3 2 1 0 contagem concluida

//Exercicio 13:

const numeros = [7 * 1, 7 *2, 7*3, 7*4, 7*5, 7*6, 7*8, 7*9, 7*10]

for(let i = 0; i < 9; i++){
  const elementos = numeros[i]
  console.log(elementos) //R= 7, 14, 21, 28, 35, 42, 56, 63, 70
} */