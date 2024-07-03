// fatorial

let fatorial = 1;

const prompt = require('prompt-sync')();

// Pergunta ao usuário qual número quer calcular o fatorial
let num = prompt('Qual número será calculado o fatorial? ');

function somar(num) {

if (isNaN(num) || num < 0) {
    console.log('Por favor, insira um número inteiro não negativo válido.');
} else {
    
    for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }
    return fatorial
}
}
console.log(somar(num));