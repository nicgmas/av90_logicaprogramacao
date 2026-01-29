let senha;

while(true) {
    senha = Number(prompt("Digite a senha:"));
    
    if(senha === 2002) {
        
        document.writeIn("Acesso Permitido");
        break;
    } else {
        document.writeIn("Senha Invalida<br>");
    }
}
