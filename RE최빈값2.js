arr1 = [1,2,3,3,3,4];
arr2 = [3,3,3,3];
arr3 = [1,1,1,2,2,2];

function solution(array){
    let map  = new Map();
    for(const i of array){
        map.set(i, (map.get(i) || 0 ) + 1);
    }

    map = [...map].sort((a,b) => {
        return b[1]-a[1];
    })

    return ( map.length === 1 || map[0][1] > map[1][1] ) ? 
    map[0][0] : -1 ;

}

console.log(solution(arr1));
console.log(solution(arr2));
console.log(solution(arr3));


function solution(array) {
    const mymap = new Map();
    
    for(const num of array)
        mymap.set(num, ( mymap.get(num) || 0 ) + 1)
    
    const arr = [];
    for(let [key,val] of mymap)
        arr.push([key,val]);
    arr.sort((a,b)=>b[1]-a[1]);
    
    if(arr.length===1)
        return arr[0][0];
    else{
        const [a,b] = arr;
        if (a[1]===b[1])
            return -1;
        else
            return a[0];
    }   
}