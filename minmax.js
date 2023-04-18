const arr = [5,8,6,-10,4,-1,3,1,2];

//min basic
function minbasic(arr) {  
    let min = arr[0];
    for(let i=1; i<arr.length; i++){
        min = min < arr[i] ? min : arr[i];
    }
    console.log(min);
}
console.log('[minbasic(arr)]실행');
minbasic(arr);

//min for of
function minforof(arr){
    let min = arr[0];
    for(const i of arr){
        min = min < i ? min : i
    }
    console.log(min);
}
console.log('[minforof(arr)]실행');
minforof(arr);

//min for in
function minforin(arr){
    let min = arr[0];
    for(let i in arr){
        min = min < arr[i] ? min : arr[i]
    }
    console.log(min);
}
console.log('[minforin(arr)]실행');
minforin(arr);

////min forEach
function minforeach(arr){
    let min = arr[0];
    arr.forEach((it)=>{
        min = min < it ? min : it;
    })
    console.log(min);
}
console.log('[arr.forEach]실행');
minforeach(arr);