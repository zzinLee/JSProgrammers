//양의 정수 n이 매개변수로 주어질 때, 
//n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 
//n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

/*my solution*/
function mysolution(n){
  let i = n;
  let sum = 0;
  if(n%2 === 1){
      while(i>0){
          sum += i;
          i=i-2;
      }
      return sum;    
  }
  else{
      while(i>0){
          sum += i ** 2;
          i=i-2;
      }
      return sum;
  }
}

/*
다른사람풀이
fill()메서드와 map()메서드를 동시 사용하기
*/
function solution(n){
  //크기가 n인 배열을 생성하고 fill()
  //map메서드로 요소들을 순회하여 
  const arr = Array(n).fill().map((val,idx)=> idx+1 );
  return (n%2===1) ?
    //odd
    arr.reduce((acc,cur)=> cur%2===1 ? acc+cur : acc , 0) :
    //even
    arr.reduce((acc,cur)=> cur%2===0 ? acc+cur**2 : acc, 0);
}
