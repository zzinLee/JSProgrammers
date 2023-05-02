function solution(angle)
{
    if(angle<90){
        return 1;
    }
    else if(angle === 90){
        return 2;
    }
    else if(angle === 180){
        return 4;
    }
    else
        return 3;
}

//배열 메소드로 풀수도 있다
function FilterSolution(angle){
  const arr = [0,90,91,180].filter(x=> angle>=x);
  console.log(arr);
  return arr.length;
}

FilterSolution(89); //예각 1
FilterSolution(91); //둔각 3
FilterSolution(90); //직각 2 
FilterSolution(180); //평각 4