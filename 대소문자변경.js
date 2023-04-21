//대문자를 소문자로
//소문자를 대문자로

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = '';

rl.on('line', function(line){
    input = line.split('');
    rl.close();
})

rl.on('close',function(){
    let str = '';

    for(let i=0; i<input.length; i++)
    {
        if(input[i].charCodeAt(0) >= 97){
            input[i] = String.fromCharCode(
                input[i].charCodeAt()-32
            )
            str += input[i];
        }
        else
        {
            input[i] = String.fromCharCode(
                input[i].charCodeAt()+32
            )
            str += input[i];
        }   
    }
    console.log(str);
    process.exit();
})