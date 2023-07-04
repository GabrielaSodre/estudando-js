let num1 = 5
let result;

//Escreva um programa que verifique se um número é par ou ímpar
console.log(num1 %= 2)
console.log("Somente 0 representa par")

//Faça um programa que calcule a média aritmética de três números.

let num2 = 5;
let num3 = 10;
let num4 = 15;
let media = (num2 + num3 + num4)/3;

console.log(media);

//Escreva um programa que determine se um número é divisível por 3 e por 5 ao mesmo tempo.

let num5 = 30;
console.log((num5 % 3 == 0) && (num5 % 5 == 0));
//Faça um programa que calcule a área de um triângulo com base e altura.
let base = 5;
let altura = 10;
let area = base * altura
console.log(area)

//Escreva um programa que converta uma temperatura de graus Celsius para Fahrenheit.

let graus = 30
console.log(graus + 32)

//Faça um programa que calcule o delta das funções de segundo grau.
let a = 5;
let b = 15;
let c = 5;
let delta = ((b**2) - (4 * a * c));
console.log(delta)

// Faça um programa que retorna se uma determinada pessoa pode dirigir, baseado na sua idade (utilize operador ternário).
let idade = 17;
console.log(idade >= 18 && idade <= 65);