function solution(num_list) {
  //모든 원소들의 곱
  const x = [...num_list].reduce((acc,cur)=>{
      return acc*cur;
  },1)
  //모든 원소들의 합의 제곱
  const y = ([...num_list].reduce((acc,cur)=>{
      return acc+cur;
  },0))**2;
  
  return (x<y)? 1 : 0;
}

function ASolution(num_list){
  let sum = num_list.reduce((a,b)=>a+b,0)
  let mul = num_list.reduce((a,b)=>a*b,1)
  return mul < Math.pow(sum,2) ? 1 : 0;
}

