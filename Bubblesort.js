const arr = [9,1,3,8,2,6,0,7,4,5];

function bubblesort(arr){
    for(let k=0; k<arr.length; k++){
        for(let i=0; i<arr.length-1; i++){
             if(arr[i] > arr[i+1]){
                [arr[i], arr[i+1]]=[arr[i+1],arr[i]];
                /*
                디스트럭쳐링이용 안하면
                let tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
                */
            }
        }
        console.log( `사이클 ${k+1}: `+arr);
    }
}

bubblesort(arr);
