// Estruturas Condicionais
// Condição -> Calculo Lógico

// const altura = 1.59;

// if(altura >= 1.60)
//     console.log("Entrou no brinquedo!"); 
// else
//     console.log("Não entrou no brinquedo!")

// let nivelIngles = 2;
// if(nivelIngles == 1)
//     console.log("Nivel Iniciante")
// else if(nivelIngles == 2)
//     console.log("Nível Básico");
// else if(nivelIngles == 3)
//     console.log("Nível Intermediário");
// else if(nivelIngles == 4)
//     console.log("Nível Avançado");
// else if(nivelIngles == 5)
//     console.log("Nível Fluente");
// else
//     console.log("Nível de inglês desconhecido");


// let saldo = 150;
// if(saldo > 100)
//     console.log("Comprar um livro");

// if(saldo > 200)
//     console.log("Comprar um tênis");

// if(saldo > 100)
//     console.log("Comprar uma bolsa");

// let conseguiuFazerCompra = false;
// let saldo = 300;
// if(saldo > 200) {
//     console.log("Fez a compra do tênis")
// }
    
// let num1 = 7, num2 = 8, num3 = 13;
// if(num1 > num2 && num1 > num3) {
//     if(num2 > num3) {
//         console.log(num1 + " > " + num2 + " > " + num3)
//     }
//     else {
//         console.log(num1 + " > " + num3 + " > " + num2)
//     }
// }
// else if (num2 > num1 && num2 > num3){
//     if(num1 > num3){
//         console.log(num2 + " > " + num1 + " > " + num3)
//     }
//     else{
//         console.log(num2 + " > " + num3 + " > " + num1)
//     }
// }
// else{
//     if(num1 > num2) {
//         console.log(num3 + " > " + num1 + " > " + num2)
//     }
//     else{
//         console.log(num3 + " > " + num2 + " > " + num1)
//     }
// }

let mes = 4;

switch (mes){
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Esse mês não existe");
        break;
}
