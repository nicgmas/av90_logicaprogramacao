// Peça 1
let cod1 = Number(prompt("Código peça 1:"));
let qtd1 = Number(prompt("Quantidade peça 1:"));
let valor1 = Number(prompt("Valor unitário peça 1:"));

// Peça 2
let cod2 = Number(prompt("Código peça 2:"));
let qtd2 = Number(prompt("Quantidade peça 2:"));
let valor2 = Number(prompt("Valor unitário peça 2:"));

// Cálculo do total
let total = qtd1 * valor1 + qtd2 * valor2;

// Saída no formato pedido
alert("VALOR A PAGAR: R$ " + total.toFixed(2));
document.writeIn("VALOR A PAGAR: R$ " + total.toFixed(2));
