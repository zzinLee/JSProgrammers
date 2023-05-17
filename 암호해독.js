function mysolution(cipher, code){
  return cipher
  .split('')
  .filter((_,i)=>(i+1)%code===0)
  .join('');
}

function basicsolution(cipher, code){
  const arr = cipher.split('');
  let str = '';
  for(let i=code-1; i<arr.length ; i+=code){
    str += arr[i]
  }
  return str;
}

console.log(basicsolution("pfqallllabwaoclkk",2));