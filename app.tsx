//credits to stackoverflow

const mergeSortedArrays = (arr1 = [], arr2 = []) => {
   const res = [];
   let i = 0;
   let j = 0;
   while(i < arr1.length && j < arr2.length){
      if(arr1[i] < arr2[j]){
         res.push(arr1[i]);
         i++;
      }else{
         res.push(arr2[j]);
         j++;
      }
   };
   while(i < arr1.length){
      res.push(arr1[i]);
      i++;
   };
   while(j < arr2.length){
      res.push(arr2[j]);
      j++;
   };
   return res;
};
var startTime = performance.now()
console.log('test cases#1 array1 bigger than array 2')
console.log(mergeSortedArrays([1,2,3,4],[5,6,7]))
console.log('test cases#2 array2 bigger than array 1')
console.log(mergeSortedArrays([1,2,3],[4,5,6,7]))
console.log('test cases#3 array2 same size as 1')
console.log(mergeSortedArrays([1,2,3,4],[5,6,7,8]))
console.log('test case#4 array1 and 2 are the same')
console.log(mergeSortedArrays([1,2,3,4],[1,2,3,4]))
console.log('test case#5 array1 is blank')
console.log(mergeSortedArrays([],[1,2,3,4]))
var endTime = performance.now()
console.log(`Performance time for test is ${endTime - startTime} milliseconds`)
