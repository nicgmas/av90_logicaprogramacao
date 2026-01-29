let dias = Number(prompt("Idade em dias:"));

let anos = Math.floor(dias / 365);
dias = dias % 365;

let meses = Math.floor(dias / 30);
let diasRestantes = dias % 30;

alert(anos + " ano(s)\n" + meses + " mes(es)\n" + diasRestantes + " dia(s)");
document.writeIn(anos + " ano(s)");
document.writeIn(meses + " mes(es)");
document.writeIn(diasRestantes + " dia(s)");
