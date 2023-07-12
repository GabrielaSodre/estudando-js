// função ou function -> Rotina

// const num = 3;
// const num2 = 6;
// const soma = num + num2;
// console.log(soma);

// let num = 16;
// let quadrado = 16**2;
// console.log(quadrado);

// //...

// num = 16;
// quadrado = 16**2;
// console.log(quadrado);

// //...

// num = 16;
// quadrado = 16**2;
// console.log(quadrado);

// let num1= 4;
// let num2 = 5;
// function multiplicar() {
//     console.log("O primeiro numero é " + num1);
//     console.log("O primeiro numero é " + num2);
//     console.log("O produto é " + (num1 * num2));
// }
// console.log("Hello");

// console.log(isNaN(num)); // vai imprimir o retorno da função

// result = console.log("OI"); // essa função não tem retorno
// console.log(result);

const num = 12.4;
let result = isNaN(num); // true or false
console.log(result);

result = !(isNaN(num)); // Vai retornar se é ou não um número, pois estamos negando i is not a number
result = isFinite(num);
console.log(result);

result = parseInt(12.4); //conersão do float para int
console.log(result);

result = parseFloat(12);
console.log(result);

result = Number.isInteger(12.4); // inteiro (true / false)
console.log(result);

let numero = 22.548;
console.log(numero.toFixed(2)); // retorna uma string com 2 casas decimais

console.log(numero.toPrecision(4));

console.log(numero.toString()); // numero para string

//Funções de Texto

const texto = "Java Script";
console.log(texto.charAt(9)); //consegue pegae um caractere específico de um texto

console.log(texto.concat(" é muito bacana.", " Java é chato!"));

console.log(texto.charAt(texto.length - 1)); //imorime o ultimo caractere

console.log(texto.trim()); // remove espaços do fim e do início do texto

console.log(texto.replaceAll(" ", "")); //função que substitui

console.log(texto.includes("Java"));

if(texto.includes("Java")) {
    console.log("Java ou Java Script");
}

console.log(texto.toLowerCase());
console.log(texto.toUpperCase());

let busca = "JaVa";
console.log(texto.toLowerCase().includes(busca.toLowerCase()));
console.log(texto.replace("J", "A").replace("S", "T").replace("H", "A")); //funciona perfeitamente

console.log(texto.indexOf("Script")); //busca o caracter no texto e retorna a posição tanto de uma letra quanto da posição onde uma palavra começa, se não existir ele retorna -1

console.log(texto.substring(0, 4));//pega um treço do texto

//Math -> Biblioteca de Matemática
console.log(Math.ceil(2.3789)); //arredonda para cima, inteiro
console.log(Math.floor(2.3789)); //arredonda para baixo, inteiro
console.log(Math.round(2.3789)); //arredonda para o mais proximo
console.log(Math.sqrt(625)); //traz a raíz quadrada
console.log(Math.abs(-8)); // valor absoluto
console.log(Math.random()); // gera um numero aleatória entre 0 e 1, sem incluir o 1
console.log(Math.floor(Math.random() * 100 + 1)); // [1, 100] //randomico de 1 a 100

//autoboxing

let  num52 = 1;
num.toFixed();