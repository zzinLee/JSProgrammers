
//아스키코드를 이용한 풀이
function mysolution(age){
  const arr = 
  (age+'').split('').map(i=>+i+97);

  return String.fromCharCode(...arr);
}

//더 좋은 풀이
function solution(age){
  return age
  .toString()
  .split('')
  .map(i=>'abcdefghij'[i])
  .join('');
}