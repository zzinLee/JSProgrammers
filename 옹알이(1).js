function solution(babbling){
  const words = ["aya","ye","woo","ma"];
  let count = 0;
  for(let bab of babbling){
    for(const word of words ){
      bab = bab.replaceAll(word,"X");
    }
    bab = bab.replaceAll("X","");
    if(bab.length===0) {++count;}
  }
  return count;
}

/*replaceAll없던시절*/
function RGXsolution(babbling){
  const ans = 0;
  const regex = /^(aya|ye|woo|ma)+$/;
  babbling.forEach(word=>{
    if(regex.test(word))
      ++ans;
  })
  return ans;
}