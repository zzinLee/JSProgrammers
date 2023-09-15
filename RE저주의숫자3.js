//3의 배수 이거나
//3을 포함하는 숫자는 제외하고 다음 숫자를 쓴다.

function solution(N){
  for(let i=1; i<=N; i++)
  {
    if(i%3===0)
      N++;
    else if(i.toString().includes('3'))
      N++;
  }
  return N;
}

console.log(solution(41));