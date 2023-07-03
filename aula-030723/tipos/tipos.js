// Tipagem Estática -> Definição de um tipo a cada variável (Java, C, C++)
// Tipagem Dinâmica -> O tipo da variável é definido de acordo com o seu valor (JavaScript, Python)

// typeof -> operador que retorna o TIPO da variavel

let variavel = 22; // number
console.log(typeof variavel);

variavel = 74.74 // number
console.log(typeof variavel);

variavel = "Prof. Gabriel"; // string
console.log(typeof variavel);

variavel = true;
console.log(typeof variavel); // boolean

variavel = {nome: "Gabriela", idade: 20}; // objeto
console.log(variavel);

variavel = [1, 2, 3, 4, 5]; //vetor, também pe um objeto
console.log(variavel);

variavel = function() { return 1 }; //função
console.log(variavel);

variavel = undefined; //indefinido
console.log(variavel); //undefined

variavel = null; // nulo, vazio, mas o tipo é objeto
console.log(variavel);

variavel = NaN // (NOT A NUMBER), mas o tipo é num
console.log(variavel);
console.log(0/0)
