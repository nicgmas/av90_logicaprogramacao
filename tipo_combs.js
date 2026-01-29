let alcool = 0, gasolina = 0, diesel = 0;

while(true) {
    let codigo = (prompt("Código (1-4):"));
    
    if(codigo === 4) break;
    if(codigo === 1) alcool++;
    else if(codigo === 2) gasolina++;
    else if(codigo === 3) diesel++;
}

alert("MUITO OBRIGADO\n" +
      "Alcool: " + alcool + "\n" +
      "Gasolina: " + gasolina + "\n" +
      "Diesel: " + diesel);

document.write("MUITO OBRIGADO<br>");
document.write("Alcool: " + alcool + "<br>");
document.write("Gasolina: " + gasolina + "<br>");
document.write("Diesel: " + diesel);
