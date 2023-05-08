function solution(numbers, direction){
  let val = 0;
  if(direction==='right')
  {
    val = numbers.pop(); 
    return [val,...numbers];
  }
  else
  {
    val = numbers[0];
    numbers.splice(0,1);
    return [...numbers,val];
  }
}