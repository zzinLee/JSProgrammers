const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line){
    input = line
    .split(' ')
    .map(i=>+i);
//in browser
//const arr = prompt('입력받기').split(' ').map(i=>Number(i));
    rl.close();
}).on('close', function(){
    console.log(`${input[0]} + ${input[1]} = ${input[0]+input[1]}`);
    process.exit();
})
