let N = Number(prompt("Tempo em segundos:"));

let horas = Math.floor(N / 3600);
let minutos = Math.floor((N % 3600) / 60);
let segundos = N % 60;

alert(horas + ":" + minutos + ":" + segundos);
document.writeIn(horas + ":" + minutos + ":" + segundos);
