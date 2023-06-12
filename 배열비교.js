function compute(arr) {
  return arr.map((v)=>{
      if( v>=50 && v%2===0 )
          v/=2;
      else if( v<50 && v%2===1 )
          v = 2*v +1 ;
      return v;
  })
}

function solution(arr){
  let prev_arr = [];
  let cur_arr = [...arr];
  let i = 0;
  
  while(true){
      prev_arr = cur_arr;
      cur_arr = compute(prev_arr);
      i++;
      
      if(JSON.stringify(prev_arr) === JSON.stringify(cur_arr))
        break;
      //if(cur_arr.every((v,i)=>v===prev_arr[i]))
      //  break;
        
  }
  return i-1;
}
