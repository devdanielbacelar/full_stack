/* //Um comentário.
console.log('Olá mundo');
console.log('Este trecho é exibido no console do navegador'); 

let nome = 'Lino'; //String.
let sete;          //Inicializado mas não utilizado.

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');
*/
//Variáveis
/*
// Não podemos criar variáveis com palavras reservadas.
// Variáveis precisam ter nomes significativos (lógica).
// Não pode começar o nome de uma variável com número.
// Não pode conter espaços ou traços.
// Utilizamos camelCase.
let nomeCompletoDoCliente = "Daniel";
// Case-sensitive.
let nomeCliente = 'Daniel';
let nomecliente = 'Bacelar';

console.log(nomeCliente, nomecliente);
// São declarações diferentes.
// Não podemos declarar variáveis com LET.
// Não UTILIZE VAR, UTILIZE LET.

// CONSTANT

// Não podemos criar contantes com palavras reservadas.
// Contantes precisam ter nomes significativos (lógica).
// Não pode começar o nome de uma variável com número.
// Não pode conter espaços ou traços.
// Utilizamos camelCase.
// Case-sensitive.
// São declarações diferentes.
// Não podemos declarar variáveis com LET.
// Não UTILIZE VAR, UTILIZE CONST.
/*
// + - * /
// Strin = Text | Number = Número
const primeiroNumero = 5;
const segundoNumero = '10';
const resulstado = primeiroNumero * segundoNumero;

console.log(resulstado);
console.log(typeof primeiroNumero);
console.log(typeof segundoNumero);

*/

const nome = 'Noir';
const sobrenome = 'Ben';
const idade = 20;
const peso = 84;
const alturaEmM = 1.80;

let indiceMassaCorporal; // peso / (altura * altura)
let anoDeNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoDeNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoDeNascimento}.`);

