let valor = Number(prompt("Digite um valor:"));

if (valor < 0 || valor > 100) {
    document.writeIn("Fora de intervalo");
} else if (valor <= 25) {
    document.writeIn("[0,25]");
} else if (valor <= 50) {
    document.writeIn("(25,50]");
} else if (valor <= 75) {
    document.writeIn("(50,75]");
} else {
    document.writeIn("(75,100]");
}
