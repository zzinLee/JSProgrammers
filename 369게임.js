function mysolution(order){
  let count = 0;
  (''+order).split('').forEach((v)=>{
    if(v==='3' || v==='6'|| v==='9')
      count++;
  })
  return count;
}

function Methodsolution(order){
  return (''+order).split('').filter(v=>(+v)%3===0 && (+v)!==0).length;
}

function MatchAllsolution(order){
  return [...order.toString().matchAll(/[3|6|9]/g)].length;
}
function Splitsolution(order){
  return (''+order).split(/[369]/).length - 1;
}
function Setsolution(order){
  const mySet = new Set([3,6,9]);
  return String(order).split('').filter((n)=>mySet.has(+n)).length;
}
