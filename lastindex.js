let str = 'AbCdEFGG';
let pat = 'dE';

let i = str.lastIndexOf(pat);
let l = pat.length;
console.log(str.slice(0,i+l));

function solution(myString, pat) {
  const i = myString.lastIndexOf(pat);
  const l = pat.length;
  return myString.slice(0, i+l);
}