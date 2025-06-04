// Este programa calcula o fatorial de um número fornecido pelo usuário

const prompt = require('prompt-sync')();

// Solicita ao usuário um número inteiro
let numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial: "));

// Verifica se o número é negativo
if (numero < 0) {
  console.log("Não é possível calcular o fatorial de um número negativo.");
} else {
  let fatorial = 1;

  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }

  console.log(`O fatorial de ${numero} é: ${fatorial}`);
}
