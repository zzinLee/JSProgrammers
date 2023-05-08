function solution(num_list, n){
  const answer = [];
  while(num_list.length!==0){
    answer.push(num_list.splice(0,n));
  }
  return answer;
}

/*2차원 배열 만둘기!*/
/*중첩Array*/
function _2D_Array(ROW, COLUMN){
  const array = new Array(ROW);
  for(let i=0; i<ROW; i++){
    array[i] = new Array(COLUMN).fill(1);
  }
  console.log(array);
  return array;
}

_2D_Array(4,2);
_2D_Array(2,4);