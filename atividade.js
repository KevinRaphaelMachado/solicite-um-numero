
// pedindo ao usuario que digite a quantidade de notas o valor das notas  e depois calculando a media.
const prompt = require("prompt-sync")();

let notas = [];
let soma = 0;


let quantidade = +prompt('digite a quantidade de notas ' )

for(let i = 0; i < quantidade; i++) {
let nota = +prompt('digite sua nota')
notas.push(nota)
}

function media(notas) {


for(let i = 0; i < notas.length; i++) {
        soma += notas[i];
}   
    return soma / quantidade


}
console.log(media(notas));