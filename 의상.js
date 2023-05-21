
//나의 발상은 약간 이랬는데..
function solution(clothes) {
  const closet = new Map();
  for(let [name, species] of clothes){
      if(closet.get(species))
          closet.get(species)+1;
      else
          closet.set(species, 1);
  }
  const n = closet.size; 
  //순열조합 개념..(이걸 구현하기가 넘 어려웠슴)
  //나중에 순열조합을 코드로 구현해봐야겠다 한번
}

//참조한 답안지는 이러헀다.
function solution(clothes){
  const obj = {};
  let result = 1;

  for(const [name, spec] of clothes){
    obj[spec] = (obj[spec] || 1) + 1;
  }

  for(let v in obj){
    result *= obj[spec];
  }

    return result-1;
}


