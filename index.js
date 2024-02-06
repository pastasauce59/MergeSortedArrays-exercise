function mergeSortedArrays(arr1, arr2){
  let mergedArray = [];
  arr1.forEach(item => mergedArray.push(item));
  arr2.forEach(item => mergedArray.push(item));
  console.log(mergedArray.sort((a,b) => a-b));;
}


a1 = [0,3,4,31] 
a2 = [3,4,6,30]
mergeSortedArrays(a1, a2);