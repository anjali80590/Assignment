let arr = [89, 45, 34, 67, 56, 98, 78, 69, 84, 90];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 40) {
    arr[i] = arr[i] + 20;
    if (arr[i] > 50) {
      count++;
    }
  } else if (arr[i] > 90) {
    arr[i] = 90;
    count++;
  } else if (arr[i] > 50) {
    count++;
  }
}
console.log("Count is ", count);
console.log(arr);
