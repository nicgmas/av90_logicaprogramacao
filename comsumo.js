let X = Number(prompt("Distância total percorrida (km):"));
let Y = Number(prompt("Total de combustível gasto (litros):"));

let consumo = X / Y;

alert(consumo.toFixed(3) + " km/l");
document.writeIn(consumo.toFixed(3) + " km/l");
