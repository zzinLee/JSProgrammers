function solution(arr, intervals){
  const answer =[];
  for(const [a,b] of intervals){
    answer.push(...arr.slice(a,b+1));
  }
  return answer;
}


/* 유심히 볼까? */
function solution(arr, intervals){
  const answer = [];
  for(const [a,b] of intervals){
    answer = answer.concat(arr.slice(a,b+1));
  }
  return answer;
}
//이건 오류고
function solution(arr, intervals){
  let answer = [];
  for(const [a,b] of intervals){
    answer = answer.concat(arr.slice(a,b+1));
  }
  return answer;
}
//이건 된다.
//왜냐하면..
//concat하여 새롭게 return 된 배열의 주소가 다르고,
//answer이 가르키는 데이터(배열)의 주소를 변경해야 하므로!
//let answer 이 되어야 함.