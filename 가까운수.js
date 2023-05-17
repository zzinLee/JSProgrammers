function mysolution(array,n){
  const arr = [];
  let diff=0, val = 0;

  for(let i=0; i<array.length; i++){
    val = array[i];
    diff = Math.abs(val-n);
    arr.push([val,diff]);
  }

  arr.sort((a,b)=>{
    if(a[1]===b[1])
      return a[0]-b[0];
    return a[1]-b[1];
  })

  return a[0][0];
}


function Greedy_solution(array,n){
  return array.reduce((a,b)=>
    Math.abs(a-n) < Math.abs(b-n) ? a :
    Math.abs(a-n)===Math.abs(b-n) ? Math.min(a,b) : b 
  )
}


function Sort_solution(array,n){
  return array.sort((a,b) =>
    Math.abs(a-n)-Math.abs(b-n) || a-b)
}
