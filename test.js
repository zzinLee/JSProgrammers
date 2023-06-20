const arr = ['conan', 'apples', 'apple', 'zone', 'park', 'astronaut'];

arr.sort((prev, cur) => {
  console.log(prev,cur);
  if (prev > cur) return 1;   
  if (prev < cur) return -1;
});

console.log(arr);
