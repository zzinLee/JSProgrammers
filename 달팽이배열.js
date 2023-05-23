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
    console.log(newY,newX);
    if(newX < 0 || newX >=n || newY < 0 || newY >= n ||
      matrix[newY][newX]!==0)
      {
        direct = (direct+1)%4;
        newY = y + move[direct][0];
        newX = x + move[direct][1];
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