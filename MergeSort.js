//입력받을 곳.
const array = [21,10,12,20,25,13,15,22];

//임시배열, 메모리 낭비이긴 한데
const temp = new Array(10).fill(0);


//여기서 수행
function mergeSort(start, end){
  let mid = Math.floor((start+end)/2);
  let i = start;
  let j = mid + 1;
  let k = start;
  while(i<=mid && j<=end){
    if(array[i]<=array[j]){
      temp[k] = array[i];
      i++;
    }
    else{
      temp[k] = array[j];
      j++;
    }
    k++;
  }

  //앞의 것이 먼저 끝났냐? 그렇다면 j
  let tmp = i>mid? j : i;
  while(k<=end){
    temp[k] = array[tmp];
    k++;
    tmp++;
  }

  for(let t=start; t<=end ;t++){
    array[t] = temp[t];
  }

}

function partition(start,end){
  let mid = 0;
  //같으면 실행하지 않음.
  if(start<end){
    mid = Math.floor((start+end)/2);
    partition(start, mid);
    partition(mid+1, end);
    mergeSort(start,end);
  }
}

partition(0,array.length-1);
console.log(array);