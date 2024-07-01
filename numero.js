// Solicita ao usuário um número usando prompt
let prompt = require('prompt-sync')();
let numero = prompt("Digite um número:");

// Converte o número em uma string para manipulação de caracteres
let numeroescolhido = numero.toString();

// Converte a string em um array de caracteres
let arrayNumeros = numeroescolhido.split('');

// Ordena o array em ordem decrescente
arrayNumeros.sort(function(a, b) {
    return b - a;
});

// Junta os caracteres do array de volta em uma string
let maiorNumero = arrayNumeros.join('');

// Mostra o maior número possível que pode ser formado
console.log(`O maior número possível formado pelos algarismos de ${numero} é: ${maiorNumero}`);
