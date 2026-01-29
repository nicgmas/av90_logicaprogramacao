let preco = {1:4.00,2:4.50,3:5.00,4:2.00,5:1.50};
let total = (prompt("Código:")) * parseInt(prompt("Qtd:")) * preco[parseInt(prompt("Código:"))];

alert("Total: R$ " + total.toFixed(2));
document.writeIn("Total: R$ " + total.toFixed(2));
