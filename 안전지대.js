
const b = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]];
console.log(solution(b));

function solution(board) {
  const n = board.length;
  const deepcopy = JSON.parse(JSON.stringify(board));
  const diff = [
      [-1,-1],[-1,0],[-1,1],
      [0,-1],[0,1],
      [1,-1],[1,0],[1,1]
  ];

  board.forEach((row, i)=>{
    row.forEach((val, j)=>{
        if(val === 1){
          for(let [di,dj] of diff){
            let newi = i + di;
            let newj = j + dj;
            if(newi<0 || newi>=n || newj<0 || newj>=n) {continue;}
            deepcopy[newi][newj]=1;
        }
      }
    })
  })
  
  return n*n-deepcopy.flat().filter((v)=>v===1).length;
  
}
