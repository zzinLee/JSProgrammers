function mysolution(my_string){
  return my_string.split('').map(change).join('');
}
function change(ch){
  if(ch.toUpperCase() === ch){
    return ch.toLowerCase();
  }
  else{
    return ch.toUpperCase();
  }
}

function mysecondsolution(my_string){
  return my_string.split('')
  .map((ch)=>ch===ch.toUpperCase()? ch.toLowercase() : ch.toUpperCase())
  .join('');
}

function basicsolution(my_string){
  const str = my_string.split('');
  const n = str.length;
  let ans = '';
  for(let i=0; i<n; i++)
  {
    let ch = str[i];
    if(ch===ch.toUpperCase())
      ans += ch.toLowerCase();
    else
      ans += ch.toUpperCase();
  }
  return ans;
}

console.log(basicsolution("cccCCC"));

function Forsolution(my_string){
  let ans = '';
  for(const i of my_string)
    ans += i.toUpperCase() === i ? i.toLowerCase() : i.toUpperCase();
  
  return ans;
}

//틀린풀이이다.
function error(my_string){
  const arr = my_string.split('');
  for(let i of arr){
    console.log(i);
    i = i===i.toUpperCase() ? 
    i.toLowerCase() : i.toUpperCase();
    console.log(i);
  }
  console.log(arr);
  return arr;
}

//string type 대상으로 for..of..문 쓸 수 있다!
//Array 로 굳이 만들지 않아도 된다! 
//for...of..는 이터러블을 이용한 반복문
// Array method가 아님!!
