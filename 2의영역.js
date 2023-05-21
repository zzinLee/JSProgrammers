function solution(arr){
  
  const start = arr.indexOf(2);
  if(start===-1) return [-1];

  const end = arr.lastIndexOf(2);
  return arr.slice(start, end+1);
}

//Array.prototype.indexOf() 
//값이 없으면 -1을 반환