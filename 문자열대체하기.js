function mysolution(my_string, overwrite_string, s) {
    const arr = my_string.split('');
    arr.splice(s,overwrite_string.length, overwrite_string)
    //splice 메서드는 자른 배열을 반환함
    return arr.join('');
}

function solution(my_string, overwrite_string,s){
    let str = '';
    str +=  
        my_string.slice(0,s) + 
        overwrite_string + 
        my_string.slice(overwrite_string.length+s)
    return str;
}