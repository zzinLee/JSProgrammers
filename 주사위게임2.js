function solution(a, b, c) {
  if(a===b && b===c)
  { return 27*(a**6); }
  
  else if(a!==b & a!==c & b!==c)
  { return a+b+c; }
  
  else
  {
      return (a+b+c)*((a**2)+(b**2)+(c**2));
  }
}

//Set solution
function SETsolution(a,b,c)
{
  const set = new Set([a,b,c]);
  switch([...set].length){
    case 1: return calculate([a,b,c],3);
    case 2: return calculate([a,b,c],2);
    case 3: return calculate([a,b,c]);
  }
}
const calculate=(arr,n=1)=>{
  const [a,b,c] = arr; //디스트럭쳐링
  let result = 1;
  for(let i=1; i<=n ; i++){
    result *= (a**i) + (b**i) + (c**i); 
  }
  return result;
}