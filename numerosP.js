let positivos = 0;
let i = 0;

while(i < 6) {
    let valor = Number(prompt("Digite um valor:"));
    if(valor > 0) positivos++;
    i++;
}

alert(positivos + " valores positivos");
document.writeIn(positivos + " valores positivos");
