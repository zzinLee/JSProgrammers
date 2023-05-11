function solution(n){
  let answer = [];
  let i = 2;
  while(i<=n){
    if(n%i===0){
      answer.push(i);
      //소인수 분해니까! 인수로 나누기!
      n /= i;
    }
    else{
      i++;
    }
  }

  return [...new Set(answer)];
}