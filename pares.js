let pares = 0;
let i = 0;

while(i < 5) {
    let valor = Number(prompt("Digite um valor:"));
    if(valor % 2 === 0) pares++;
    i++;
}

alert(pares + " valores pares");
document.writeIn(pares + " valores pares");
