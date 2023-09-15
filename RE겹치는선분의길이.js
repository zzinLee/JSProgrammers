function solution(lines) {
  let count = 0;

  const axis = new Array(201).fill(0);
  for(const line of lines){
    let left = line[0];
    let right = line[1];
    for(let i=left ; i<right; i++){
      axis[i]++;
    }
  }

  axis.forEach((v)=>{
    if(v>1) {count++;}
  })

  return count;
}



const lines1 = [[0, 1], [2, 5], [3, 9]];
const lines2 = [[-1, 1], [1, 3], [3, 9]];
const lines3 =  [[1, 2], [2, 3], [3, 4]];
console.log(solution(lines1));
console.log(solution(lines2));
console.log(solution(lines3));