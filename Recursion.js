//Let's do this with Recursion idea
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//input
let number = 0;

rl.on('line',function(line){
  number = +line;
  rl.close();
});

//function 
function _draw(height){
  let str = '';
  for(let i=1; i<=height; i++){
    str = '';
    for(let j=1; j<=i; j++){
      str += '#';
    }  
    console.log(str);
  }
}

//recursion을 도입해보자.
function recursion(h){
  let str = '';
  if(h===0){return;}
  recursion(h-1);
  for(let i=0; i<h; i++)
    str+='#';
  console.log(str);
}


//output function
rl.on('close', function(){
  console.log('[Recursion]');
  recursion(number);
  process.exit();
});