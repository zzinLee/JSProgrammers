function mysolution(numbers){
  const numObj = {
    zero: 0, 
    one: 1, 
    two: 2, 
    three: 3, 
    four: 4, 
    five: 5, 
    six: 6, 
    seven: 7, 
    eight: 8, 
    nine: 9
  };

  for(const key of Object.keys(numObj)){
    numbers = numbers.replaceAll(key, numObj[key]);
  }
  return +numbers;
  
}

//index를 이용한 풀이.
function IndexSolution(numbers){
  const number = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  for(let i = 0; i<number.length ; i++){
    numbers = numbers.split(number[i]).join(i);
  }
  return +numbers;
}
console.log(IndexSolution("onefourzerosixseven"));
// i=0 ) 'zero' 만나면 split => onefour/ 자르고 /sixseven
// join('대신 얘를 넣어줄거야')라는 뜻
// join 메서드는 ','를 인식하고 전달받는 인자를 넣어준다.
// join(i) => join(0) 이므로 onefour0sixseven
// i=1) 'one' 만나면 split => / /four0sixseven
// join(i) => join(1) 이므로 1four0sixseven
// i=4) 'four' 만나면 split => 1/ /0sixseven
// join(i) => join(4) 이므로 140sixseven
// ...반복..14067 