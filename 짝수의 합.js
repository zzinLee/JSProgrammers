function solution(n){
    let sum = 0;
     
    while(n){
        if(n%2===0)
            sum+=n;
        n--;
    }
    
    return sum;
}
