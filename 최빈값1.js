arr1 = [1,2,3,3,3,4];
arr2 = [1,1,2,2];

function solution(arr){
    arr.sort((a,b)=>a-b)

    let j=0;
    let max_count = 0;
    let max_value = 0;
    let dupmax = false;

    for(let i=0; i<arr.length;i++){
        let value = arr[i];
        let count = 0;
        while(value === arr[j]){
            count++;
            j++;
        }

        if(max_count < count){ 
            max_count = count; 
            max_value = value;
            dupmax = false;
        }
        else if(max_count === count)
        {
            dupmax = true;
        }
    }

    if(dupmax){
        return -1;
    }
    return max_value;

}

console.log(solution(arr1), solution(arr2));