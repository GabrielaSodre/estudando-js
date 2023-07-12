// Escreva um programa que receba um texto e calcule a quantidade de letra de "a". O programa deve considerar maisculas e minusculas.
let texto = "Escreva um programa que receba um texto e calcule a quantidade de letra de a. O programa deve considerar maisculas e minusculas."
console.log(texto.length);

num = 128.85;
//Escreva um programa que calcule a raiz quadrada de um número e mostre na tela.
console.log(Math.sqrt(num));

//Escreva um programa que  arredonde um número para o inteiro mais próximo.
console.log(Math.round(num));

//Escreva um programa que  calcule o valor absoluto de um número.
console.log(Math.abs(num));

//Escreva um programa que  gere um número aleatório entre 10 e 20.
console.log(Math.floor(Math.random() * (20 - 10 + 1) + 10));

//Escreva um programa que converta uma string para um número decimal e arredonde para o número inteiro anterior.
console.log(Math.floor(Number.parseFloat(num)));

//Verifique se um número é um valor finito, infinito, NaN ou não.
numero = 667/3.45;
if(isNaN(numero)) {
    console.log("Esse valor não é um número");
} 
else {
    console.log("Você digitou um número");
}
if(isFinite(numero)) {
    console.log("Você digitou um número finito");
}
else {
    console.log("Você digitou um número infinito");
}

//Escreva um programa que verifique se a string "ba" contém em outras outra string.
let text = "Está um dia lindo, muito bom para jogar baralho"
if(texto.includes("ba")){
    console.log("contem");
}
else {
    console.log("Não há")
}

//Escreva um programa que  converte uma string para letras maiúsculas e para letras minúsculas e mostre na tela.
