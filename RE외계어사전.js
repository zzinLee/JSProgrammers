function solution(spell, dic) {
  //dic에 저장된 word마다 조건을 만족하면 true 를 반환하고
  //조건을 만족하지 않으면 false 를 반환하도록 하는 arr를 만들겠다.
    const arr = dic.map((word)=>{
      //각 요소마다 계산 끝낸 후 대입할거라 map method사용
      const checker = {}; //횟수 셀 때는 object 이용하면 GOOD
      //단어를 일일이 쪼갠 후 문자를 비교한다.
      word.split('').forEach((ch)=>{
        for(const a of spell)
          if(a === ch) { checker[a] = (checker[a] || 0 ) + 1 }
      })
      //checker에 dic의 요소에 해당하는 word의 
      //spell 단어 별 등장 횟수가 저장되어 있을 것이다.
  
      //checker의 value(등장횟수)로만 이루어진 배열 		
      const valueArr = Object.values(checker);
      
  //우선 spell에 제시된 모든 문자가 등장해야 하고,
      if(valueArr.length === spell.length){
        for(const val of valueArr){
          if(val ===1)//모두 1번씩만 등장했다면
            continue;
          else
            return false; //1번 이상 등장한경우 걸러야 함
        }
        return true; //true반환
      }
      return false; //그 외 나머지 false
    })
  
    //true가 하나라도 있다면 1 없다면 2
    return arr.includes(true) ? 1 : 2 ;
  }

//어떤 사람은 여기에 some 을 사용하기도 했다.
//sort를 이용했기에 틀린 풀이이긴 했지만
//some을 어떻게 쓰는지 익혀둘 필요가 있다!
function wrong_solution(spell,dic){
  return dic.some((word)=>{
    return spell.sort().toString() == [...word].sort().toString() ? 
      1 : 2 ;
  })
}

//2023.06.27풀이
function solution(spell, dic) {
  for(const word of dic){
      let checker = {};

      word.split('').forEach((a)=>{
          for(const alpha of spell){
              if(a === alpha)
              {
                  checker[alpha] = (checker[alpha]||0)+1;
                  break;
              }            
              else
                  continue;
          }
      })
      const checkArr = Object.values(checker);
      if(checkArr.length === spell.length && checkArr.every((v)=>v===1))
          return 1;
  }
  
  return 2;
}