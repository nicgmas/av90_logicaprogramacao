const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

for(let i = 0; i < input.length; i += 2) {
    const X = parseInt(input[i]);
    const Y = parseInt(input[i + 1]);
    
    if(X === Y) break;
    
    if(X < Y) {
        console.log('Crescente');
    } else {
        console.log('Decrescente');
    }
}