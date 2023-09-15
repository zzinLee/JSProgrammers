function solution(score){

  let finalscore = [];
  for(let [eng,math] of score){
    finalscore.push((eng+math)/2);
  }

  let sorted = [...finalscore].sort((a,b)=>b-a);

  return finalscore.map((v)=>sorted.indexOf(v)+1);
}