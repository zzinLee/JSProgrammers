function solution(n){
  const matrix = Array.from(Array(n), ()=>Array(n).fill(0));
  //[y,x] 
  const move = [[0,1], [1,0], [0,-1],[-1,0]];
  let filler = 1;
  let x = 0, y =0;
  let direct = 0;

  while(filler<=n*n){
    matrix[y][x]=filler;
    let newX = x + move[direct][1];
    let newY = y + move[direct][0];
    
    if(newX < 0 || newX >=n || newY < 0 || newY >= n ||
      matrix[newY][newX]!==0)
      {
        direct = (direct+1)%4;
        newX = x + move[direct][1];
        newY = y + move[direct][0];
      }
      
    x = newX;
    y = newY;
    console.log(y,x);
    filler++;
  }
  return matrix;
}

console.log(solution(4));
console.log(solution(5));




/* 다음날 내 머리에 남은 풀이는? */
function solution(n) {
  const move = [[0,1], [1,0], [0,-1], [-1,0]];
  let ref = 0; //move순회
  
  let a = 1;
  
  const matrix = Array.from(Array(n), ()=>Array(n).fill(0));
  let i=0, j=0; //matrix순회
  
  while(a <= n*n){
      
      matrix[i][j]=a;
      
      let newi = i + move[ref][0]
      let newj = j + move[ref][1]
      
      if(newi>=n || newi<0 || newj >=n || newj<0 || matrix[newi][newj]!==0){
          ref = (ref+1)%4; //move.length
          i = i + move[ref][0];
          j = j + move[ref][1];
      }
          
      else{
          i = newi;
          j = newj;
      }
      
      a++;
      
  }
  return matrix;
}