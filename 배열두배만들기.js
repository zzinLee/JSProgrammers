function Asolution(numbers) {
    //map은 새로운 배열을 만든다.
    numbers=numbers.map(i=>2*i);
    return numbers;
}

//const solution = (numbers) => numbers.map(i => 2*i)

function Bsolution(numbers){
    for(let i=0; i<numbers.length; i++)
        numbers[i] *= 2;
    return numbers;
}
//이는 for in으로도 실행가능함

function Csolution (numbers){
    const answer =[];
    for(const i of numbers){
        answer.push(i*2);
    }
    return answer;
}