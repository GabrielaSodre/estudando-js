// console.log("TESTE 1");
// console.log("TESTE 2");

// let i = 0;
// while(i < 10) {
//     console.log("TESTE WHILE" + i);
//     i++;
// }

//Desenhe um quadrado de # na tela
// let lado = 7;
// for(let i = 0; i < 7; i++) {
//     let linha = "";
//     for(let j = 0; j < lado; j++) {
//         linha += "# ";
//     }
//     console.log(linha);
// }
// let linha =""
// let lado = 7;
// for(let i = 0; i < lado; i++){
//     linha += "# ";
// }
// for (let i = 0; i < lado; i++) {
//     console.log(linha);
// }

// break e continue
// for(let i = 1; i < 20; i++){
//     if(!(i % 2 ==0)) {
//         continue;
//     }
//     console.log(i);
// }

for(let i = 1; i <= 10; i++) {
    if(i % 8 == 0 && i != 8){
        console.log(i);
        break;
    }
}