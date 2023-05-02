//[1,2,3,4,5],1,3 이면 결과값[2,3,4] index 1번부터 3번까지!

//인덱스반복문 풀이
function idxsolution(numbers, start, end){
  const ans = [];
  for(let i = start; i<=end ; i++){
    ans.push(numbers[i]);
  }
  return ans;
}
//0.04ms 33.4MB

//slice는 이상에서 미만임을 유의하자. 원본 변경은 없다!
function solution1(numbers, start, end){
  return numbers.slice(start,end+1);
}
//0.03ms 33.5MB

//splice 두번째 인자가 삭제할 요소의 갯수임을 유의하자. 원본 변경이 있다!
function solution2(numbers, start, end){
  const count = end - start + 1 ;
  return numbers.splice(start, count);
}
//0.03ms 33.4MB
