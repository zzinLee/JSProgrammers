function solution(arr, query) {
  let array = [...arr];
  query.forEach((index,i)=>{
      if(i%2===0){
          array = array.slice(0,index+1)
      }
      else{
          array = array.slice(index);
      }
  });
  return array;
}

function solution(arr, query) {
  query.forEach((index,i)=>{
      if(i%2===0){
          arr.splice(index+1,arr.length-index-1);
      }
      else{
          arr.splice(0,index);
      }
  });
  return arr;
}