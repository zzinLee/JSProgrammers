function mysolution(s){
  const sol = s.split(' ');
  return sol.reduce((acc,cur,idx)=>{
    if(cur==='Z'){
      acc -= Number(cur);
      return acc;
    }
    else{
      acc -= Number(cur);
      return acc;
    }
  },0);
}

function stacksolution(s){
  const stack = [];
  s.split(' ').forEach((val)=>{
    if(val === 'Z'){ stack.pop(); }
    else {stack.push(val);}
  })
  return stack.reduce((acc,cur)=> acc+cur, 0);
}