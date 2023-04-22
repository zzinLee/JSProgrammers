//길이가 같은 문자열일 때
//str1.lenth === str2.length
function solution(str1, str2) {
    var answer = '';
    for(let i=0; i<str1.length; i++){
        answer+= str1[i]+str2[i]
    }  
    return answer;
}
console.log(solution('ABCD','abcd'));
//만약 길이가 다르다면?
function sol(str1, str2){
    let ans = ''; 
    let a = str1.length; 
    let b = str2.length;

    if(a > b){
        for(let i=0; i<b; i++){
            ans += str1[i] + str2[i];
        }
        for(let i=b; i<a; i++){
            ans += str1[i];
        }
        return ans;
    }
    else if(a < b){
        for(let i=0; i<a; i++){
            ans += str1[i] + str2[i];
        }
        for(let i=a; i<b; i++){
            ans += str2[i];
        }
        return ans;
    }
    else{
        for(let i=0; i<a; i++){
            ans += str1[i]+str2[i]
        }
        return ans;
    }
}
console.log(sol('ABCD','ab'));
console.log(sol('ABCD','abcd'));
console.log(sol('ABCD','abcdefg'));

//forEach으로 푸는 법
//forEach의 인자는 최대 3개까지 전달 가능하며
//(current value, current index, Array) 순으로 전달한다
function Solution(str1,str2){
    //배열로만들어서 배열메서드사용하기
    ans = '';
    const arr1 = str1.split('');
    const arr2 = str2.split('');

    arr1.forEach((cur,idx)=>{
        //str1이 더 긴 경우
        if(idx>=arr2.length){
            arr2[idx]='';
        }
        ans += cur + arr2[idx];
    })

    //str2가 더 긴 경우
    if(arr1.length<arr2.length){
        for(let i=arr1.length; i<arr2.length ;i++){
            ans += arr2[i]
        }
    }
    return ans;
}

console.log(
Solution('ABCDE','abc'),
Solution('ABC','abc'),
Solution('ABCDE','abcdefgh')
);