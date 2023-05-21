function solution(num_list) {
  const n = num_list.length;
  for(let i=0; i<n; i++)
      if(num_list[i] < 0) return i;
  return -1;
}

function another(num_list){
  return num_list.findIndex(v=>v<0);
}