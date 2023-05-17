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

function ForMethodsolution(my_string){
  let ans = '';
  for(const i of my_string)
    ans += i.toUpperCase() === i ? i.toLowerCase() : i.toUpperCase();
  
  return ans;
}