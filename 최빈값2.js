arr1 = [1,2,3,3,3,4];
arr2 = [3,3,3,3];
arr3 = [1,1,1,2,2,2];


function solution(array){
    let map  = new Map();
    for(const i of array){
        map.set(i, (map.get(i) ?? 0 ) + 1);
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
