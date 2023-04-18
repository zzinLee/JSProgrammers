//JS특
function solution(array) {
    array.sort((a,b) => {return a-b;});
    return array[ Math.floor(array.length/2) ];
}

//sort를 구현해보고 싶다!simple sort logic
//1.가장 작은 값을 원래 배열에서 찾는 함수 정의
//1-1.가장 작은 값을 어떻게 찾나?
function min1(arr){
    let min=arr[0];
    //배열의 요소들과 전부 비교 for..of..
    for(const i of arr){
        min = min < i ? min : i;
    }
    return min;
}
//1-2.똑같은 거 forEach로도 해보자
function min2(arr){
    let min = arr[0];
    arr.forEach((it)=>{
        min = min < it ? min : it; 
    })
    return min;
}

//MAIN
const arr = [-1,3,2,4,5];
const newArray =[];
//4.반복한다.
for(let i=0; i<arr.length ; i++){
    //최소값 찾아낸다
    let m = min1(arr);  
    //2.새로운 배열에 push하고 
    newArray.push(m);
    //3.원래 배열에서 그 값은 지운다.
    for(let j=0; j<arr.length; j++)
    {
        if(arr[j] === m){
            arr[j]=10000;
            break;
        }
    }
}
console.log(newArray);

//5. 가운데 꺼 꺼내기
console.log(
    newArray[Math.floor(newArray.length/2)]
);
