# Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

# Exercício 14: Cálculo do Fatorial

---

## 📑 Índice

1. [📖 Descrição](#descrição)  
2. [💻 Código](#código)  
3. [🚀 Como Executar](#como-executar)   
4. [🛠️ Tecnologias Utilizadas](#tecnologias-utilizadas)  
5. [📜 Licença](#licença)  

---

## Descrição

Este programa em JavaScript solicita ao usuário que informe um número inteiro e, em seguida, calcula e exibe o **fatorial** desse número utilizando um loop `for`.

---

## Código

Abaixo está o código-fonte do programa:

```JavaScript
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

```

---

## Como Executar

🛠️ Instruções para executar localmente

1. Instale o Node.js se ainda não tiver: https://nodejs.org

2. Abra o terminal e instale o prompt-sync (usado para entrada do usuário):

```
npm install prompt-sync
```

3. Salve o arquivo como `exercício_14.js` e execute com:

```
node exercício_14.js
```

---

## Tecnologias Utilizadas

- Linguagem: JavaScript
- Node.Js

---

## Licença

Este projeto está licenciado sob a MIT License.

