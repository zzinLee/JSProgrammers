function solution(arr){
  const X = [];
  arr.forEach((v)=>{
    for(let i=0; i<v ; i++){
      X.push(v);
    }
  })
  return X;
}

function solutionReduce(arr){
  return arr.reduce((list,num)=>
  [...list, ...Array(num).fill(num)],[]);
}

const arr = [5, 1, 4];
console.log(solutionReduce(arr));