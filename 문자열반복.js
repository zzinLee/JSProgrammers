//"hello" 3 입력시 "hhheeellllllooo"

function solution(my_string,n){
  let str = '';
  for(const i of my_string)
    str += i.repeat(n);
  return str;
}

/*
map 배열 메소드는 요소를 매핑하는 것.
콜백함수를 시행한 요소로 변경 
*/
function Asolution(my_string,n){
  const ans = [...my_string].map(i=>i.repeat(n)).join('');
  return ans;
}

function Bsolution(my_string,n){
  return my_string.split('').reduce((acc,cur)=> acc+cur.repeat(n), '');
}
