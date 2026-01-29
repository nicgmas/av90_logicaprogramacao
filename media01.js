let A, B, MEDIA;

A = parseFloat(prompt("Digite a primeira nota (0.0 a 10.0):"));
B = parseFloat(prompt("Digite a segunda nota (0.0 a 10.0):"));

MEDIA = (A * 3.5 + B * 7.5) / 11.0;

alert("MEDIA = " + MEDIA.toFixed(5));
document.writeln("MEDIA = " + MEDIA.toFixed(5));
