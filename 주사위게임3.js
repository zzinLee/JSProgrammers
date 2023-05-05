function solution(a,b,c,d){

  let diceSet = new Set([a,b,c,d]);
  let dice = [...diceSet].length;

  switch(dice){
    case 1: 
      return (1111 * a);
    case 2: 
      return twoSum(a,b,c,d);
    case 3:
      return threeSum(a,b,c,d);
    case 4:
      return Math.min(a,b,c,d);
  }

}

function twoSum(a,b,c,d){
  const arr = [a,b,c,d];
  const obj = {};
  for(const i of arr){
    obj[i] = 
    obj[i] === undefined ? 1 : ++obj[i];
  }
  
  if(obj[a]===2){
  [p,q] = Object.keys(obj).map(v=>+v);
  return (p+q) * Math.abs(p-q);
  }

  else{
    [p,q] = 
    Object.keys(obj).sort((i,j)=>{
    return obj[j]-obj[i];
    }).map(v=>+v);
    return (10*p+q)**2;
  }

}

function threeSum(a,b,c,d){
  const arr = [a,b,c,d];
  const obj = {};
  for(const i of arr){
    obj[i] = 
    obj[i] === undefined ? 1 : ++obj[i];
  }
  [p,q,r] = Object.keys(obj).sort((i,j)=>{
    return obj[j]-obj[i];
  })
  return q*r;
}