function mysolution(s){
  const stack = [];
  const arr = s.split('');
  const n = arr.length;
  stack.push(arr[0]);

  for(let i=1; i<n; i++){
    let val = arr[i];
    if(val===')'){
      if(stack[stack.length-1]==='(' )
        stack.pop();
      else{
        stack.push(val);
      }
    }
    else{
      stack.push(val);
    }
  }
  return stack.length ? false : true ;
}

const arr1 = '((()()()))()'
const arr2 = '((()'
const arr3 = '()()())'
console.log(mysolution(arr1),mysolution(arr2),mysolution(arr3));

function solution(s){
  let ans = 0;
  for(let param of s){
    ans += param === '(' ? 1 : -1 ;
    if(ans)
  }
}