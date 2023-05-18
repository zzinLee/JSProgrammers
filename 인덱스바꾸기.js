function solution(my_string, num1, num2){
  const str = my_string.split('')
  return str.reduce((acc,cur,i)=>{
    if(i===num1){
      acc += str[num2];
    }
    else if(i===num2){
      acc += str[num1]
    }
    else{
      acc += cur;
    }
    return acc;
  },'');
}
console.log(solution('hello',1,2));
console.log(solution('I love you',3,6));

function basicsolution(my_string, num1, num2){
  let ans = '';
  const n = my_string.length;
  for(let i=0; i<n; i++){
    if(i===num1)
      ans += my_string[num2]
    else if(i===num2)
      ans += my_string[num1]
    else
      ans += my_string[i]
  }
  return ans;
}
console.log(basicsolution('hello',1,2));
console.log(basicsolution('I love you',3,6));


function distructsolution(my_string,num1,num2){
  const str = my_string.split('');
  [str[num1], str[num2]] = [str[num2], str[num1]];
  return str.join('');
}
console.log(distructsolution('hello',1,2));
console.log(distructsolution('I love you',3,6));

function splicesolution(my_string,num1,num2){
  const str = my_string.split('');
  let ch = my_string[num1];
  str.splice(num1, 1, str[num2]);
  str.splice(num2, 1, ch);
  return str.join('');
}
console.log(splicesolution('xnde',0,1));
console.log(splicesolution('hawlol',2,5));
