let arr = ["task1", "task2", "task3", "task4", "task5"];
arr.shift();
arr.unshift("newTask1", "newTask2");
arr.splice(arr.length - 1, 1, "newTask3");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
