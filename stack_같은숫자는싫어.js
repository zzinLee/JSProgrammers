function solution(arr){
  const ans = [];
  arr.reduce((prev,cur)=>{
    if(prev!==cur){ans.push(cur)}
    return cur;
  },'');
  return ans;
}

function stackSolution(arr){
  const stack = [];
  let prev = null;
  arr.forEach((val,idx)=>{
    if(prev!==val)
      stack.push(val);
    prev = val;
  })
  return stack;
}
const arr = [4,4,4,3,3,1,1,1,0,0,1];
console.log(stackSolution(arr));