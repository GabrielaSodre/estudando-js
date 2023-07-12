// Escreva um programa que verifique se um número é positivo, negativo ou zero e exiba uma mensagem correspondente.

let num = 0;

if(num < 0) {
    console.log(num +" é negativo.");
}
else if(num == 0) {
    console.log("Você digitou exatamente o numero zero.");
}
else if(num > 0) {
    console.log(num +" é positivo.");
}

// Crie um programa que receba a idade de uma pessoa e verifique se ela é maior de idade (18 anos ou mais) ou menor de idade.
let idade = 17;

if(idade < 18) {
    console.log("Você é menor de idade.")
}
else if(idade >= 18) {
    console.log("Você é maior de idade.")
}

// Escreva um programa que receba três números e determine qual deles é o maior.

let num1 = 5;
let num2 = 4;
let num3 = 3;

if(num1 > num2 && num1 > num3) {
    if(num2 > num3){
        console.log(num1 + " > " + num2 + " > " + num3)
    }
    else if(num3 > num2){
        console.log(num1 + " > " + num3 + " > " + num2)
    }
}
else if(num2 > num1 && num2 > num3) {
    if(num1 > num3){
        console.log(num2 + " > " + num1 + " > " + num3)
    }
    else if(num3 > num1){
        console.log(num2 + " > " + num3 + " > " + num1)
    }
}
else if(num3 > num1 && num3 > num2) {
    if(num1 > num2){
        console.log(num3 + " > " + num1 + " > " + num2)
    }
    else if(num2 > num1){
        console.log(num3 + " > " + num2 + " > " + num1)
    }
}
else {
    console.log("Os numeros são iguais")
}

// Crie um programa que receba dois números e verifique se seu produto é par ou ímpar.

let num4 = 3;
let num5 = 2;
let result;
let resto;

result = num4 * num5;

if(result % 2 == 0) {
    console.log("O resultado do produto é par");
}
else{
    console.log("O resultado do produto é ímpar");
}

// Escreva um programa que receba o nome de um dia da semana e exiba se é um dia útil ou um fim de semana.
let dia = "segunda"

if(dia == "segunda" || dia == "terça" || dia == "quarta" || dia == "quinta" || dia == "sexta") {
    console.log(dia + " é um dia útil");
} else if (dia == "sabado" || dia == "domingo") {
    console.log(dia + " não é dia útil")
}
else {
    console.log ("Dia não é válido")
}

// Faça um programa que receba um número de 1 a 7 e exiba o dia da semana correspondente (1 - domingo, 2 - segunda-feira, etc.).
let numero = 1;

switch (numero){
    case 1:
        console.log("Este dia da semana é dominngo")
        break;
    case 2:
        console.log("Este dia da semana é segunda")
        break;
    case 3:
        console.log("Este dia da semana é terça")
        break;
    case 4:
        console.log("Este dia da semana é quarta")
        break;
    case 5:
        console.log("Este dia da semana é quinta")
        break;
    case 6:
        console.log("Este dia da semana é sexta")
        break;
    case 7:
        console.log("Este dia da semana é sábado")
        break;
}
