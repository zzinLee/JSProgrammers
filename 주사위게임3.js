/* 내 풀이 */
function solution(a,b,c,d){

  let diceSet = new Set([a,b,c,d]);
  let dice = [...diceSet].length;

  switch(dice){
    case 1: 
      return (1111 * a);
    case 2: 
      return twoSum(a,b,c,d);
    case 3:
      return threeSum(a,b,c,d);
    case 4:
      return Math.min(a,b,c,d);
  }
}

function twoSum(a,b,c,d){
  const arr = [a,b,c,d];
  const obj = {};
  for(const i of arr){
    obj[i] = 
    obj[i] === undefined ? 1 : ++obj[i];
  }
  
  if(obj[a]===2){
  [p,q] = Object.keys(obj).map(v=>+v);
  return (p+q) * Math.abs(p-q);
  }

  else{
    [p,q] = 
    Object.keys(obj).sort((i,j)=>{
    return obj[j]-obj[i];
    }).map(v=>+v);
    return (10*p+q)**2;
  }

}

function threeSum(a,b,c,d){
  const arr = [a,b,c,d];
  const obj = {};
  for(const i of arr){
    obj[i] = 
    obj[i] === undefined ? 1 : ++obj[i];
  }
  [p,q,r] = Object.keys(obj).sort((i,j)=>{
    return obj[j]-obj[i];
  })
  return q*r;
}

/* another solution */
function solution(...nums){
  nums.sort();//숫자를 오름차순으로

  const cnt = new Set(nums).size;
  switch(cnt){
    case 1 : return 1111 * nums[0];
    case 4 : return Math.min(...nums);

    default: {
      const obj = {};
      nums.forEach((num)=>
        obj[num] = (obj[num]||0)+ 1 );
      
      
      const SetCnt = new Set(Object.values(obj));
      //(3,1), (2,1,1), (2)

      //(3,1)
      if(SetCnt.has(3)){
        //(a,a,a,b) 일수도 (a,b,b,b) 일수도 있기 때문에
        //등장 빈도수가 높은게 p 낮은게 q
        if(nums[0]===nums[1]){
          p = nums[0];
          q = nums[3];
        }
        else{
          p = nums[3];
          q = nums[0];
        }
        return (10 * p + q)**2 ;
      }

      //(2,1,1)
      if(SetCnt.has(1)){
        return nums.reduce((acc,cur)=>acc*(
          obj[cur]===2 ? 1 : cur
        ),1)
      }

      //(2,2)
      return (nums[0]+nums[3]) * Math.abs(nums[0]-nums[3]);
    }
  }
}