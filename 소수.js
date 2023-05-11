//소수 여부 확인하기
function PrimeNumber(n){
  let i=2;
  while(i<n){
    if(n%i===0){
      return false;
    }
    i++;
  }
  return n;
}

//소수만들기 (무한생성기)
function* generator(){
  let i = 2;
  while(true){
    if(PrimeNumber(i))
      yield i;
    i++;
  }
}

//n 이하의 소수 생성기
function* prime_generator(n){
  let i = 2;
  while(i<=n){
    if(PrimeNumber(i))
      yield i;
    i++;
  }
}

console.log([...prime_generator(10)]);

//소인수분해 이걸로 풀기
function solution(n){
  const answer = [];
  const prime = prime_generator(n);
  for(const i of [...prime]){
    if(n%i===0)
      answer.push(i);
  }
  return answer;
}
console.log(solution(12));
console.log(solution(17));
console.log(solution(420));