function solution(a, b) {
    
  //1.a/b를 기약분수로 만든다.
  const m = Math.min(a,b);
  for(let i=2; i<= m; i++){
      if(a%i === 0 && b%i === 0){
          a=a/i;
          b=b/i;
          i--;
      }
  }
  
  //2.b의 소인수가 2와 5로만 이루어져있는지 확인한다.
  const factor = [];
  for(let i=2; i<=b; i++){
      if(b%i===0){
          factor.push(i);
          b /= i;
          i--;
      }
  }
  
  //3.확인하기
  return factor.every((v)=>v===2 || v===5) ? 1 : 2 ;
}

function bettersolution(a,b){
  let GCD = 1
  for(let i=1; i<Math.min(a,b); i++){
    if(a%i===0 && b%i===0)
      GCD = i;
  }

  b = b/GCD;

  while(b%2===0) b /= 2;
  while(b%5===0) b /= 5;
  
  return b===1 ? 1 : 2 ;
}