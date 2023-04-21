function solution(numbers) {
    let sum = 0;
    for(const i of numbers){
        sum += i;
    }
    return (sum/numbers.length).toFixed(1);
}

//Number.prototype.toFixed([Digits])
//(123.456).toFixed(); -> 123
//(123.456).toFixed(1); -> 123.5
//(123.456).toFixed(2); -> 123.46

function reducesolution(numbers){
    const answer = numbers.reduce((acc,cur)=>acc+cur)/numbers.length;
    return answer;
}

const arr = [1,2,3,4,5,6,7,8,9,10]
console.log(reducesolution(arr));