//10만원이상이면 5% 
//30만원이상이면 10%
//50만원이상이면 20%를 할인
//구매한 옷의 가격price가 주어질 때
//지불해야하는 금액을 return
function mysolution(price){
  return price>=500000 ? Math.floor(price*0.8) : 
      price>=300000 ? Math.floor(price*0.9) :
  price>=100000 ? Math.floor(price*0.95) : price ;
}


/*배열을 써보자! */
const discounts = [
  [500000, 0.8],
  [300000, 0.9],
  [100000, 0.95]
]

function solution(price){
  for(const discount of discounts){
    if(price>=discount[0]){
      return Math.floor(price*discount[1]);
    }
  }
  return price;
}