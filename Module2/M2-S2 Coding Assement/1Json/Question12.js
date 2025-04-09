function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

function sumOfArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function sortAndConcat(arr1, arr2) {
  let sortedArr1 = arr1.slice().sort((a, b) => a - b);
  let sortedArr2 = arr2.slice().sort((a, b) => a - b);
  return sortedArr1.concat(sortedArr2);
}

let arr1 = [5, 12, 8, 3, 20];
let arr2 = [15, 2, 30, 7, 25];

console.log(filterEvenNumbers(arr1));
console.log(sumOfArray(arr1));
console.log(sortAndConcat(arr1, arr2));
