function* generatorOdd(){
  let i = 1;
  while(true){
    yield (2*i-1);
    i++;
  }
}

function solution(numbers, k){
  const n = numbers.length;
  let odd = generatorOdd();
  let ans = 0;
  for(let i = 0; i<k; i++)
    ans = odd.next().value;
  ans %= n ;
  if(ans === 0)
    return n;
  return ans;
}

/* */

function solutionA(numbers, k){
  return numbers[(--k*2)%numbers.length];
}

function solutionB(numbers, k){
  return numbers[(2*(k-1))%numbers.length];
}