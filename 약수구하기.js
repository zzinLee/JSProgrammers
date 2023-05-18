function firstsolution(n){
  const arr = [];
  for(let i=1; i<=n; i++){
    if(n%i === 0)
      arr.push(i);
  }
  return arr;
}


function setsolution(n) {
	let s = new Set();
	for(let i=1; i<=n; i++){
        if(s.has(i))
            continue;
        else if(n%i === 0){
            s.add(i);
            s.add(n/i);
        }
    }
	return [...s].sort((a,b)=>a-b);
}

function solution(n) {
	let s = new Set();
	for(let i = 1; i<= Math.sqrt(n) ; i++){
		if(n%i===0){
			s.add(i);
			s.add(n/i);
		}
	}
	return [...s].sort((a,b)=>a-b);
}

function solution(n){
  return Array(n)
  .fill(0)
  .map((v,i)=>v+i+1)
  .filter(v=>n%v===0);
}