function solution(emergency){
  
  let m = new Map();
  let desc = [...emergency].sort((a,b)=>b-a); //내림차순
  const desN = desc.length;

  for(let i=0; i<desN ; i++){
    m.set(desc[i],i+1);
  }

  return emergency.map(val=>m.get(val));
}
//get(key)로 value에 접근

function anotherSolution(emergency){
  let sorted = emergency.slice().sort(a,b=>b-a);
  //emergency.slice()로 새 배열 반환, 즉 복사
  return emergency.map(val=> sorted.indexOf(val)+1 );
  //중복이 없기 때문에 indexOf매소드 사용
}