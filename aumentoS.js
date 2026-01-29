let salario = Number(prompt("Digite o salário:"));

let percentual, novoSalario, reajuste;

if(salario <= 400) percentual = 15;
else if(salario <= 800) percentual = 12;
else if(salario <= 1200) percentual = 10;
else if(salario <= 2000) percentual = 7;
else percentual = 4;

reajuste = salario * percentual / 100;
novoSalario = salario + reajuste;

alert(novoSalario.toFixed(2) + "\n" + reajuste.toFixed(2) + "\n" + percentual + "%");
document.writeIn(novoSalario.toFixed(2) );
document.writeIn(reajuste.toFixed(2) );
document.writeIn(percentual + "%");
