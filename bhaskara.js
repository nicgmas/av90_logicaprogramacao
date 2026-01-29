let A = Number(prompt("Digite A:"));
let B = Number(prompt("Digite B:"));
let C = Number(prompt("Digite C:"));

let delta = B * B - 4 * A * C;

if (A === 0 || delta < 0) {
    document.writeIn("Impossivel calcular");
} else {
    let x1 = (-B + Math.sqrt(delta)) / (2 * A);
    let x2 = (-B - Math.sqrt(delta)) / (2 * A);

    alert("R1 = " + x1.toFixed(5) + "\nR2 = " + x2.toFixed(5));
    document.writeIn("R1 = " + x1.toFixed(5) + "<br>");
    document.writeIn("R2 = " + x2.toFixed(5));
}
