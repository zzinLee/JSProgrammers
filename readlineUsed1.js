//readline으로 숫자 출력

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line',function(line){
    input = line.split(' ');
    rl.close();
});

rl.on('close', function(){
    console.log('a = '+ Number(input[0]));
    console.log('b = '+ Number(input[1]));
    process.exit();
});