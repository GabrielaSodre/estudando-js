function calc(n1, n2, op = "+") {
    switch(op){
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n1 / n2;
    }
}
console.log(calc(80, 6));
console.log(calc(80, 6, "*"));
console.log(calc(80, 6, "-"));

function desenhaTriangulo(altura) {
    for(let i = 1; i <= altura; i++) {
        let linha = "";
        for(let j = 0; j < i; j++) {
            linha += "* ";
        }
    }
}
desenhaTriangulo(10);