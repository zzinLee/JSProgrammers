const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let input = [];
let answer = '';

rl.on('line',function(line){
	input = line.split(' ');
	rl.close();
});

rl.on('close',function(){
	let str = input[0];
	
    [...str].forEach((i)=>{
        if(i === i.toUpperCase()){
            answer += i.toLowerCase();
        }
        else{
            answer += i.toUpperCase(); 
        }
    })
    console.log(answer);
		process.exit();
});