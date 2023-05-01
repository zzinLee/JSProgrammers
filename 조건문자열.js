//ineq > 또는 <
//eq는 = 또는 !
//조건을 만족하면 1 반환 아니면 0 반환

function mysolution(ineq, eq, n, m) {
  if(eq==="!"){
      return ineq === ">" ?
      (n>m ? 1 : 0) :
      (n<m ? 1 : 0) ;
  } 
  else{
      return ineq === ">" ?
      (n>=m ? 1 : 0):
      (n<=m ? 1 : 0);
  }
}


/*JavaScript같은 풀이*/

const operation = {
  '>=': (n,m)=> n>= m,
  '<=': (n,m)=> n<= m,
  '>!': (n,m)=> n>m,
  '<!': (n,m)=> n<m
};

function solution(ineq, eq, n, m){
  const op = operation[ineq+eq];
  return Number(op(n,m));
}
