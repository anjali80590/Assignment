let arr = ["task1", "task2", "Task3", "task4", "task5"];
arr.unshift("newTask1", "newTask2");
arr.splice(arr.length - 1, 1, "new task last");

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
