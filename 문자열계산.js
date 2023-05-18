function mysolution(my_string){
  const q = my_string.split(' ');
  let sum = 0;
  while(q.length !== 1){
    sum = (+q[0]);
    const cal = q.slice(0,3);
    if(q[1]==='+')
      sum += (+q[2]);
    else
      sum -= (+q[2]);
    q.splice(0,3,sum);
  }
  return q[0];
}
console.log(mysolution('7 - 8 + 3'));

//위 풀이를 queue를 이용하면 unshift로 풀 수 있다.
function qsolution(my_string){
  const que = my_string.split(' ');
  while(que.length !== 1){
    que.unshift(
      (+que.shift()) + 
      (que.shift()==='+'? 1 : -1)*(+que.shift())
    );  
  }
  return que[0];
}
console.log(qsolution('10 - 1 + 4'));


function anotherOne(my_string){
  const stack = [];
  let sign = 1;

  for(const ch of my_string.split(' ')){
    if(ch === '+'){
      sign = 1;
    }
    else if(ch ==='-'){
      sign = -1;
    }
    else{
      stack.push((+ch)*sign);
    }
  }

  return stack.reduce((a,b)=>a+b,0);
}
console.log(anotherOne('6 - 2 + 3'));