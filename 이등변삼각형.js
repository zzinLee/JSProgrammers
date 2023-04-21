//readline으로 이등변삼각형 출력해보기 예제

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let str = '';

//이때 line 읽어 오는 거 string으로 읽어옴.
rl.on('line', function(line){
    input = line.split(' ');
    rl.close();
})

rl.on('close', function(){
    for(let i=1; i<=input[0]; i++){
        for(let j=0; j<i; j++){
            str += '* ';
        }
        str += '\n';
    }
    console.log(str);
    process.exit();
})
