function solution (a,b){
  let num1 = Number(''+a+b);
  let num2 = 2 * a * b;
  const ans = (num1>num2) ? num1 : num2 ;
  return ans;
}

console.log(solution(2,91), solution(91,2));