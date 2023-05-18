function mysolution(s){
	const n = s.length;
	const mymap = new Map();
	for(let i=0; i<n; i++)
		mymap.set(s[i], (mymap.get(s[i]))+ 1);
	
	const arr = [];
	for(let [key,value] of mymap){
		if(value===1)
			arr.push(key);
	}
//filter로 바꿀수있다.
//[...mymap.entires()].filter([k,v]=> v===1).map([k]=>k);

	return arr.sort().join('');
}



function indexsolution(s){
  const ans = [];
  for(const ch of s){
    if(s.indexOf(ch) === s.lastIndexOf(ch))
      ans.push(ch);
  }
  return ans.sort().join('');
}
console.log(solution("abcabcadc"));

function sortsolution(s){
  const ans = [];
  const str = s.split('').sort();

  while(str.length){
    let target = str.shift();
    if(target === str[0]){
      while(target === str[0])
        str.shift();
    }
    else
      ans.push(target);
  }
}

function Goodsolution(s){
  const map = new Map();
  const str = s.split('');
  str.forEach((v)=>map.set(v,(map.get(v)||0)+1));
  return [...map]
  .filter((v)=>v[1]===1)
  .map((v)=>v[0])//이런것도 가능하다!!!!
  .sort().join('');
}

