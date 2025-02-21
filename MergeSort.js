function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
  }
  console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); 
  