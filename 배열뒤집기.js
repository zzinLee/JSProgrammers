const num_list = [1,2,3,4,5,6,7,8];

//기본풀이
function solution(num_list){
  return num_list.reverse();
}
console.log(solution(num_list));

//만약 배열메서드reverse 없이 한다면? push pop연산 (새로운 배열 생성)
function solutionarr(num_list){
  const arr  = [];
  const n = num_list.length;

  for(let i=0; i<n; i++){
    let val = num_list.pop();
    arr.push(val);
  }
  return arr;
}
console.log(solutionarr(num_list));

//만약 배열메서드reverse 없이 한다면? 인덱스 이용하기 (새로운 배열 생성)
function solutionidx(num_list){
  const n = num_list.length;
  const arr = new Array(n);
  
  for(let i in num_list){
    arr[n-1-i] = num_list[i];
  }
  return arr;
}
console.log(solutionidx(num_list));
