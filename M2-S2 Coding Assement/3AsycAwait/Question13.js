let count = 0;
let store = setInterval(() => {
  console.log("Loading...");
  count++;
  if (count == 5) {
    clearInterval(store);
    console.log("Loaded successfully");
  }
}, 1000);

// let store=setInterval(() => {
//     console.log("Loading...")
// }, 1000);

// setTimeout(() => {
//     clearInterval(store);
// console.log("loaded Successfully")
// }, 5000);
