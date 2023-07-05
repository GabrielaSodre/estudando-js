// Escopo, é delimitado por chaves

// Escopo Global
// var no escopo global vai ser declarado na primiera linha, mas só é atribuido valor na linha que foi escrito

// console.log(numero1);
// var numero1 = 22;

// Operador de Concatenação +
const numero = 2 + 3 // Operador de Adição
const texto = "O numero é " + numero; //Operador de concatenação

console.log(texto);

console.log("A soma de " + 2 + " com " + 3 + " é igual a " + (2+3));

let idade = 18;
let mensagem = (idade >= 18) ? "Sua idade é " + idade + ", já pode ser preso!" : "Sua idade é " + idade + " ta chegando a sua vez!"
console.log(mensagem);

const nome = "Gabriela";
console.log("Bem-vindo " + nome + "! Você tem reunião hoje")