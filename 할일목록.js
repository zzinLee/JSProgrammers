//배열을 배열로 풀기
function solution(todo_list, finished) {
  const n = todo_list.length;
  const ans = [];
  for(let i=0; i<n ; i++){
      if(!finished[i])
          ans.push(todo_list[i]);
  }
  return ans;
}

//배열을 object로 만들어서 풀기
function solution(todo_list, finished) {
  const work = {};
  todo_list.forEach((v,i)=>{
      work[v]=finished[i];
  })
  
  const ans = [];
  for(const key in work){
      if(!work[key])
          ans.push(key);
  }
  
  return ans;
}