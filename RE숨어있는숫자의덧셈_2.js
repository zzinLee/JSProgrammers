function solution(my_string) {
  const str = my_string
  .replaceAll(/[a-z]/gi,'.');
  return str
  .split('.')
  .map(Number)
  .reduce((a,b)=>a+b,0);
}

const string1 = "aAb1B2cC34oOp"; //37
const string2 = "1a2b3c4d123Z"; //133

function ans(my_string){
  const str1 = my_string.split(/\D/g);
  // \D (not a digit) === /^[0-9]/
  const str2 = my_string.split(/\D+/g);
  console.log('차이를 확인해보자: \\D');
  console.log(str1);
  console.log('차이를 확인해보자: \\D+');
  console.log(str2);

  console.log('reduce실행');
  str2.reduce((acc,cur)=>{
    console.log(acc,Number(cur));
    acc += (+cur);
    return acc;
  },0)
  //Number('') === 0
}
console.log('[string1 실행 - aAb1B2cC34oOp]');
ans(string1);
console.log('[string2 실행 - 1a2b3c4d123Z]');
ans(string2);


/* regexp의 +의 사용 */
console.log('//** regexp에서 +의 사용 **//');
const word1 = 'candy';
const word2 = 'caaaandy';
const regExp = /a+/g
console.log(word1.match(regExp)); //['a']
console.log(word2.match(regExp)); //['aaaa']