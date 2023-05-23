/*깊은복사와 얕은복사*/
function solution(board) {
  const n = board.length;
  const danger = JSON.parse(JSON.stringify(board));
  const dx = [-1,-1,-1,0,0,1,1,1];
  const dy = [-1,0,1,-1,1,-1,0,1];
  let nx = 0, ny = 0;
  
  for(let x=0; x<n; x++){
    for(let y=0; y<n ; y++){
      if(!board[x][y])
          continue;        
      for(let i=0; i<8; i++)
      {
        nx = x + dx[i]
        ny = y + dy[i]
              
        if(nx<0 || nx>=n || ny<0 || ny>=n)
          continue;
            
        danger[nx][ny]=1;
      }                              
    }
  }
  return n*n - danger.flat().filter(v=>v===1).length
}


/* 2번째 풀이 */
function othersolution(board){
  let bombSet = new Set();
  const direction = [
    [-1,-1], [-1,0], [-1,1],
    [0,-1], [0,1],
    [1,-1], [1,0], [1,1]
  ];

  const n = board.length;
  for(let i=0 ; i<n ; i++){
    for(let j=0; j<n; j++){
      if(board[i][j]===1){
        direction.forEach((val)=>{
          let [nextX, nextY] = val;
          [nextX, nextY] = [i+nextX,j+nextY];
          if(nextX>=0 && nextY>=0 && nextX<n && nextY<n){
            bombSet.add(nextX+' '+nextY);
            //Set로는 배열비교는 못한다.
            //따라서 문자열로 만들어서 비교했다.
          }
        })
      }
    }
  }

  return n*n - bombSet.size;
}

/* 마지막 풀이*/
function final (board){
  const direction = [
    [-1,-1], [-1,0], [-1,1],
    [0,-1], [0,1],
    [1,-1], [1,0], [1,1]
  ];

  let safezone = 0;

  board.forEach((row, x, self)=>
    row.forEach((val, y)=>{
      if(val===1)
        return false;
      return direction.some(([ox,oy])=>
      !!self[ox+x]?.[oy+y]) 
      ? false : safezone++;
      //주변에 하나라도 !!1 (truth) 있으면 
      //false 반환해야 한다
      //bomb! 이기 때문에!!!
    }));
  return safezone;
}

const board = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]
const example = [[0,0,1,1],[1,1,1,1],[0,0,0,0],[0,0,0,0]];

console.log(final(example));