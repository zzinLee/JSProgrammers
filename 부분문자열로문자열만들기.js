//my_strings : 길이가 같은 문자열 배열 
//parts : 이차원 정수 배열
function solution(my_strings, parts) {
  let str = '';
  const n = my_strings.length;
  for(let i = 0 ; i<n ; i++){
      str += my_strings[i].slice(parts[i][0], parts[i][1]+1);
  }
  return str;
}

