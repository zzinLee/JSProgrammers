function solution(n){
    let i=1;
    while(Math.floor(7*i/n)<1)
    {
        i++;
    }
    return i;   
}


function solution(n) {
    let i=1;
    while((6*i)%n!==0){i++;}
    return i;
}

function solution(slice, n) {
    let pizza=1;
     while(Math.floor((pizza*slice)/n)<1)
     {
         pizza++;
     }
     return pizza;
 }