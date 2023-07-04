let result;

// result = 4 + 5; //9
// console.log(result);

// result = 9 * 3; //27
// console.log(result);

// result = 3 + 7 * 12; //87
// console.log(result);

// result = ((3 + 7) * 12) / 6; //20
// console.log(result);

// // Operadores de Atribuição (=; +=; -=; /=, **=; %=)

// result = result + 30;
// console.log(result);

// result += 10;
// console.log(result);

// result -= 45;
// console.log(result);

// result **= 2; //expoente
// console.log(result);

// result /= 5;
// console.log(result);

// result %= 2
// console.log(result);

// Operadores de Incremento e Decremento

/*
    a++ -> Pós Incremento
    ++a -> Pré Incremento
    a-- -> Pós Decremento
    --a -> Pré Incremento
*/

// let a = 0;
// console.log(a); //0

// console.log(a++); //0, pois ele só adcionou um após o console.log ter executado
// console.log(a); // 1

// console.log(++a); //2. adiciona 1 antes do console.log ser executado

// console.log(--a); //1

// console.log(a--); //1
// console.log(a); //0

// Operadores Relacionais
/*
    < menor que
    > maior que
    <= menor ou igual
    >= maior ou igual
    == comparação de igualdade, igual a
    === igual a essa coisa e do mesmo tipo
    != diferente
*/
// const n1 = 9;
// const n2 = 11;
// const n3 = 9;
// const n4 = 13;
// const n5 = "11"

// result =  n1 < n2;
// console.log(result); //true

// result =  n1 > n2;
// console.log(result); //false

// result = n1 <= n2;
// console.log(result); //true

// result = n1 < n3; // false
// console.log(result);

// result = n1 <= n3;
// console.log(result); //true

// result = n1 >= n3;
// console.log(result);

// result = n1 > n3;
// console.log(result);

// result = n3 === n4;
// console.log(result);

// result = n1 == n3;
// console.log(result);

// result = n1 === n3;
// console.log(result);

// result = n1 != n3;
// console.log(result);

// result = n1 != n2
// console.log(result);

// result = n2 == n5; // 'vantagem' so js, compara um numero em num com um em texto
// console.log(result);

// result = n2 === n5;
// console.log(result);

// result = "Gabriela Sodré" == "Gabriela Costa"; //compara textos
// console.log(result);

// result = "Gabriela" == "Gabriela"; //compara textos
// console.log(result);

//Operadpres Lógicos

/*
    && -> E
    || -> OU
    ! -> NÃO
*/

// console.log(true);
// console.log(false);

// console.log(true && true); //true
// console.log(true && false); //false
// console.log(true && true && true && false && true); //false

// console.log(true || true); //true
// console.log(true || false); //true
// console.log(true || true || true || false || true); //true
// console.log(false || false); //false

// console.log(!true); //false, ! indica a negação
// console.log(!false); //true

// console.log(!true || false);
// console.log(true || true && false); //precedencia é o &&

// console.log((true || true) && false);

// // dada a idade, a pessoa é obriagda a votar
// let idade = 23;
// let calculo = idade >= 18 && idade <= 65
// console.log(calculo);

//Operador ternário

let mensagem;
let nota1 = 6.999;
let nota2 = 10;
let condicao = ((nota1 + nota2)/ 2) >= 7;
mensagem = condicao ? "Aprovado" : "Reprovado";
console.log(mensagem);