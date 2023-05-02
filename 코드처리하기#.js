//풀긴풀었는데 직관적이지는 않다.
function solution(code) {
  let str = '';
  let mode = 0;
  const n = code.length;

  for(let i=0; i<n; i++){
      
      if(mode === 0)
      {
          if(code[i]==='1')
          {
              mode = 1;
              continue;
          }
          
          if(i%2===0)
              str += code[i];
          
      }
      
      if(mode === 1)
      {
          if(code[i]==='1')
          {
              mode = 0;
              continue;
          }
          
          if(i%2===1)
              str += code[i];
      }
      
  }
  
  if(str.length === 0)
      return 'EMPTY';
  
  return str;
}
//테스트2	통과 (9.31ms, 39.8MB)
//테스트 10 	통과 (9.96ms, 39.7MB)


function solution(code){
  let mode = 0;
  let ans = '';

  for(let i=0; i<code.length; i++)
  {
    if(code[i]==='1')
    {
      if(mode === 0) {mode = 1}
      else{ mode=0 }
      continue; //다음반복문으로
    }

    if(mode === 0 && i%2 === 0) //짝수만 
    { ans += code[i] }
    
    else if(mode === 1 && i%2 === 1)//홀수만
    { ans += code[i] }

  }

  if(ans.length===0) { return 'EMPTY'; }

  return ans;
}
//test 2  	통과 (11.34ms, 39.5MB)
//test 10 	통과(13.30ms, 39.4MB)