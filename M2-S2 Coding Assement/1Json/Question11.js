function extractAndReverse(arr) {
  let subArray = arr.slice(2, 4);
  let reversedSubArray = subArray.reverse();
  return reversedSubArray;
}

let arr = [15, 30, 45, 60, 75, 90];
console.log(extractAndReverse(arr));
console.log(arr);
