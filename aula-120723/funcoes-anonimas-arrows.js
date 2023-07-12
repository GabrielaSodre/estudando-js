function somar(n1, n2) {
    let soma = n1 + n2;
    return soma;
}
function dividir(num, den) {
    if(den == 0) {
        return;
    }
    else {
    return (num / den)
    }
}

const num = dividir(22, 1)
console.log(num);

// callback -> função que é passada como parâmetro de outra função
function erro() {
    console.log("DEU RUIM!")
    numErro++;
}
function sucesso() {
    console.log("Sucesso")
}

function requisicaoParaBanco(callbackSuccess, callbackError) {
    for(let i = 0; i < 1000000000; i++) { // isso vai demorar alguns segundos
        if(i === -100000) {
            // aqui gerou um erro
            callbackError();
        }
    } 
    callbackSuccess();
}


//FUNÇÃO ANÔNIMA SÓ FUNCIONAM EM CALLBACK EM 90% DAS VEZES

function teste() {
    console.log("Olá Mundo!")
}

setTimeout(teste, 2000); //recebe dois paramentros a função que sera executada e o tempo em milisegundos que ela vai demorar pra executar

setInterval(teste, 2000); //vai executar a fução de 2 em 2 segundos

setInterval(function() { //as funões anonimas são utilizadas quando não precisamos usar essas funções mais de uma vez
    console.log("Olá, Mundo com funções anônimas");
}, 3000);

setInterval(function(n1, n2) { //as funões anonimas são utilizadas quando não precisamos usar essas funções mais de uma vez
    console.log("Com Soma");
    console.log(n1 + n2)
}, 3000, 2, 3);

// Arrow functions -> funções de seta -> funções anônimas
setTimeout(function() {
    console.log("Settimeout com função anonima")
}, 2000);

setTimeout(() => {
    console.log("SrtTimeout com Função Arrow");
}, 2000);

// // Prametros =>  escopo/ instrução
(resultado, requisicao) => {
    console.log(resultado, requisicao);
    return 0;
}

//Testando a utilização das arrow functions
function teste(callback) {
    let valor = callback(130);
    console.log(valor);
}

//Primeira forma de executar "teste"
function callback(numero) {
    return (2 * numero);
}
teste(callback);

//Segunda forma de executar "teste" (Função anônima)
teste(function(numero){
    return (numero * 2);
});

//terceira forma de executar "teste" (Função arrow) - Modo 1
teste((numero) => {
    return (numero * 2);
});

//Quarta forma de executar "teste" (Função arrow) - Modo 2
teste(numero => (numero * 2)); // numero é parametro da arrow function e não de teste, os parenteses estão omitidos, como o escopo só tem uma linha podemos omitir as chaves, após omitirmos as chames ele entrende que o que está na frente já é o retorno por isso omitimos o retono

setTimeout(_ => console.log("Olá Mundo"), 3000);