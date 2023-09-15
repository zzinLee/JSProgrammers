function solution(rank, attend){
  const arr = rank
  .map((v,i)=>[v,i])
  .filter(([_,i])=>attend[i])
  .sort((a,b)=>{
    console.log(a,b);
    return a-b;
  })
}

const rank = [6, 1, 5,  2, 3, 4];
const attend = [true, false, true, false, false, true];
console.log(solution(rank,attend));