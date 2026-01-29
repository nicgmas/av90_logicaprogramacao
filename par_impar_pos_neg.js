let pares = 0, impares = 0, positivos = 0, negativos = 0;
let i = 0;

while(i < 5) {
    let valor = Number(prompt("Digite um valor:"));
    
    if(valor % 2 === 0) pares++;
    else impares++;
    
    if(valor > 0) positivos++;
    else if(valor < 0) negativos++;
    
    i++;
}

alert(pares + " valor(es) par(es)\n" + 
      impares + " valor(es) impar(es)\n" + 
      positivos + " valor(es) positivo(s)\n" + 
      negativos + " valor(es) negativo(s)");

document.writeIn(pares + " valor(es) par(es)<br>");
document.writeIn(impares + " valor(es) impar(es)<br>");
document.writeIn(positivos + " valor(es) positivo(s)<br>");
document.writeIn(negativos + " valor(es) negativo(s)");

