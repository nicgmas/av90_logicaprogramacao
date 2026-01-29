let A,B,C,D;

A = Number(prompt("Digite A:"));
B = Number(prompt("Digite B:"));
C = Number(prompt("Digite C:"));
D = Number(prompt("Digite D:"));

if (B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && A % 2 === 0) {
    alert("Valores aceitos");
    document.writeIn("Valores aceitos");
} else {
    alert("Valores nao aceitos");
    document.writeIn("Valores nao aceitos");
}
