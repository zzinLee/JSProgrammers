/* 본 함수는 조합함수로, 
arr에 정수배열이 주어지며 
selectnum에 선택할 수의 갯수가 주어집니다 */

function Combination(arr, selectNum){
  const result = [];

  if(selectNum === 1)
    return arr.map((v)=>[v]);
  //arr=[1,2,3] 이라면, return [[1],[2],[3]] 

  arr.forEach((fix,idx,origin)=>{
    const rest = origin.slice(idx+1);
    const combi = Combination(rest, selectNum-1);
    const attached = combi.map((com)=> [fix,...com]);
    result.push(...attached);
  })

  return result;
}
//그 결과값을 출력하도록 할고에요
//경우의 수를 return 하는 것이 아닙니당



function CombiCount(n,r){
  if(r===0) return 1;
  if(r===1) return n;
  return factorial(n) / factorial(r) / factorial(n-r);
}

function factorial(n){
  if(n===0) return 1;
  return n*factorial(n-1);
}
