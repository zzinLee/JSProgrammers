//동명이인 생각을 못해서 틀린 풀이
function Wrongsolution(participant, completion) {
  const obj = {};
  participant.forEach((p)=>{
      obj[p] = 0;
  })
  completion.forEach((c)=>{
      obj[c] = 1;
  })
  
  return Object.keys(obj).sort((a,b)=>obj[a]-obj[b])[0];
}

//object의 특성을 이용한 풀이
function solution(participant, completion){
  const obj = {};
  participant.forEach((p)=>{
    obj[p] = ( obj[p]|| 0) + 1;
  })
  completion.forEach((c)=>{
    obj[c] -= 1;
  })

  return Object.keys(obj).filter(v=> obj[v] === 1)[0]
  //동명이인 아닌 사람: 완주하면 0
  //동명이인 2명 중에 한명만 완주하면 : 1
  //완주하지 못하면 1이다.
}
/* test */
const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];
console.log(solution(participant, completion));

//Map을 이용한 풀이 
function mapSolution(participant, completion){
  const Runner = new Map();
  const n = participant.length;
  for(let i=0; i<n; i++){
    let runner = participant[i];
    let complete = completion[i];
    Runner.set(runner, (Runner.get(runner)|| 0) + 1 );
    Runner.set(complete, Runner.get(complete)-1);
  }
  for(let [key, val] of Runner){
    if(val>0) return key;
  }
}
//Map을 이용한 풀이2
function mapSolution2(participant, completion){
  const Runner = new Map();
  for(const p of participant){
    Runner.set(p, (Runner.get(p)||0)+1);
  }
  for(const c of completion){
    Runner.set(c, Runner.get(c)-1);
  }

  for(let [key,val] of Runner){
    if(val>0) return key;
  }
}
/*test*/
const participants = ["mislav", "stanko", "mislav", "ana"]
const completions = ["stanko", "ana", "mislav"];
console.log(mapSolution(participants, completions));

function ANOTHERsolution(participant, completion){
  //완주한 사람들 object type으로
  const finished = completion.reduce((obj,cur)=>{
    obj[cur] = obj[cur] ? obj[cur]+1 : 1 ;
    return obj;
  },{})
  //participant는 이름(문자열)으로 구성된 배열
  return participant.find(val=>{
    if(finished[val]){
      finished[val]-=1;
    }
    else{
      return true;
    }
  })
}