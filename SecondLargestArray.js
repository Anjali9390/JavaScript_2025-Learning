function findMissingNumber(arr, n) {
  let total = (n * (n + 1)) / 2;
  let sum = arr.reduce((acc, num) => acc + num, 0);
  return total - sum;
}
console.log(findMissingNumber([1, 2, 3, 5], 5));
