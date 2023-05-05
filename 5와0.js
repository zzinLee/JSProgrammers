function solution(l,r) {
	const answer = [];
	for(let i=l; i<=r; i++){
		if(![...String(i)].every(ch=>ch==='5' || ch==='0'))
			continue;
		answer.push(i);
	}
	return answer.length ? answer : [-1]
}

/*
5와 0으로 표현되는 이진수로 나타낼 수 있을 것 가틍데..
 */

function* generator() {
  let i=1;
  while(1){
    yield Number(Number(i).toString(2))*5
    i++;
  }
}

function solutino(l,r){
  const n = generator();
  let a = 0;
  const ans = [];

  while(a<l){
    a = n.next().value;
  }
  while(a<=r){
    ans.push(a);
    a = n.next().value;
  }
  return ans.length ? ans : [-1]
}

//제너레이터로 주사위 만들어보기
function* Dice10Times(){
  let count = 0;
  let MAX = 10;
  while(count<MAX){
    yield Math.round(Math.random()*6)
    count++;
  }
}