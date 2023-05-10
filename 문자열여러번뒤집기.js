//splice쓰면 되겠다. 원본을 편집해야하니까
//splice(시작 인덱스, 편집할 요소의 갯수, 넣어줄 요소들 )
//이때 모든 문자열은 배열 형태로 바꾸어준 후 시작해야 한다.
//splice로 메서드체이닝 하면 안 된다. 잘린 문자열이 반환되기 때문이다. 

function solution(my_string, queries){
  let mystring = [...my_string];
  for(let [s,e] of queries){
    //s~e 인덱스까지 자르고 거꾸로 배열
    let reversed_piece = mystring.slice(s,e+1).reverse();
    mystring.splice(s,e-s+1,...reversed_piece);
  }
  return mystring.join('');
}
/* 같은 풀이 다른 표현 */
function sameSolution(my_string, queries){
  let mystring = my_string.split('');
  queries.forEach(([s,e])=>{
    const reversed_piece = mystring.slice(s,e+1).reverse();
    mystring.splice(s,reversed_piece.length,...reversed_piece);
  })
  return mystring.join('');
}

