//intStrs 문자열 배열 -> '숫자'
//s번 인덱스에서 시작
//l개 (길이) 문자열 잘라서 정수로 변환
//이때 변환한 정수값이 k보다 큰 값을 담은 배열
function solution(intStrs, k, s, l){
  let ans = [];
  for(const str of intStrs){
    let piece = [...str].splice(s,l).join('');
    if(+piece>k){
      ans.push(+piece);
    }
  }
  return ans;
}

function solution(intStrs, k, s, l){
  return intStrs.map(v=>+v.slice(s,s+l)).filter(v=>v>k); 
}
