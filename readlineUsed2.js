//readline으로 string 반복출력하는법

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line',function(line){
    input = line.split(' ');
    rl.close();
})

//input ['string',n]

rl.on('close',function(){
    let str = '';
    for(let i=0;i<Number(input[1]);i++){
        str += input[0];
        
    }
    //String.prototype.repeat(숫자) 메서드 사용가능
    //str = input[0].repeat(Number(input[1])
    console.log(str);
    process.exit();
})