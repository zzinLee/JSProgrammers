const num_list = [3,4,5,2,1];

function solution(num_list){
  let odd = '' ;
  let even = '' ;
  num_list.forEach(elem => {  
    elem%2 === 1 ? odd+=elem : even+=elem;
  });
  return +odd + (+even);
}

console.log(solution(num_list));