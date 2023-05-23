//일단 이건 내풀이... 넘길다
function solution(polynomial){
  const arr = polynomial.split(' + ');
  const xArr = [];
  const cArr = [];
  
  arr.forEach((v)=>{
      if(v[v.length-1] === 'x')
          xArr.push(v);
      else
          cArr.push(v);
  })
  
  const x = xArr.reduce((acc,cur)=>{
      if(cur[0]==='x')
          acc += 1;
      else{
          cur = cur.slice(0, cur.length-1);
          acc += (+cur);
      }
      return acc;
  },0)
  
  const c = cArr.reduce((acc,cur)=> acc+Number(cur),0);
  let ans = '';
  
  if(x!==0){
      ans += ( x===1 ? 'x' : x+'x');
      if(c!==0){
          ans += ' + ' + c; 
      }
  }
  
  else{
      if(c!==0)
          ans += c;
  }
  
  return ans; 
}
const polynomial1 = '3x + 7 + x';
const polynomial2 = 'x + x + x';
const polynomial3 ="8 + 1 + 2";

solution(polynomial1);
solution(polynomial2);
solution(polynomial3);
//String에도 갖고 있는 Arraymethod는?
//String.prototype.slice() -> method
//String.prototype.length; -> property
//String.prototype.incldues -> method

//Array.prototype.includes(element,fromIndex)
//String.prototype.includes(element,fromIndex) 검색을 시작할 위치 인덱스
// '' || 1 의 값은 1 이 된다.


function solutionA(polynomial){
  const arr = polynomial.split(' + ');

  const xNum = arr.filter(n=>n.includes('x'))
  .map((n)=> n.replaceAll('x', '') || '1') 
  .reduce((acc,cur)=> acc + Number(cur),0);

  const num = arr.filter((n)=>!n.includes('x'))
  .reduce((acc,cur)=> acc + Number(cur), 0);

  let ans = [];
  if(xNum) {
    ans.push(`${xNum===1 ? '' : xNum}x`);
  }
  if(num){
    ans.push(num);
  }
  //, 없으면 인식을 안하니까 괜찮네..
  return ans.join(' + ');
}
console.log( solutionA(polynomial1), solutionA(polynomial2), solutionA(polynomial3) );