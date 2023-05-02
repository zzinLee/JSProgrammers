//길이가 n boolean배열 included
//a, d 정수
// a a+d a+2d a+3d .. a+(n-1)d

function solution(a, d, included) {
  const n = included.length;
  const scores = [];
  let sum = 0; 
  
  for(let i=0; i<n; i++){
      scores.push(a+i*d);
      sum += scores[i]*included[i];
  }
  
  return sum;
}

//이게 내 풀이의 디벨롭 버전!
function solutionA(a,d,included){
  let sum = 0;
  const n = included.length;

  for(let i=0; i<n;i++){
    if(included[i]){
      sum+=(a+i*d);
    }
  }
  return sum;
}

//이건 공부용
function solutionB(a,d,included){
  return included.reduce((acc,flag,i)=>{
    return flag? acc+a+i*d : acc
  },0)
}