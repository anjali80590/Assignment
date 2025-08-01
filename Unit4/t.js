// let arr=[1,18,9,81,98,124,78]
// let store=arr.map((item)=>item>100)
// console.log(store)
// let sortarr=arr.sort((a,b)=>a-b);
// console.log(sortarr)

// let arr=[1,2,3,4,5]
// arr.splice(0,5)
// console.log(arr)

// let arr=[
//     {},
//     {}
// ]
// ways  to create arr object 
// let arr=[1,2,3,4,1,2]
// let newarr=new Set(arr);
// console.log(newarr)

// function abc(a,b,c){

// }
// function pqr(a=0,b,c){

// }
// console.log(abc.length)
// console.log(pqr.length)

// console.log([]===[])
// console.log([]==[])


// first class function 
// pure function impure function 
// function currying 
// diff let var and const 
// primitve and nonprimitive 
// optional chaining 

// console.log([]==[])//points to reference
// console.log([]===[])

// let str=['anjali','yadav'];
// let result=[];
// for(let i=0;i<str.length;i++){
//     let word=str[i][0].toUpperCase()+arr[i].slice
// }

// function palidromecheck(str){
//     let left=0;
//     let right=str.length-1;
//     while(left<right){
//         if(str[left]!==str[right])
//         {
//             return false;
//         }
//         left++;
//         right--;
        
//     }
//     return true;
// }
// console.log(palidromecheck('aaaa'))

// function mergetwostring(str1,str2){
//     let n=str1.length;
//     let result=''
//     for(let i=0;i<n;i++){
//       result+=str1[i]
//       result+=str2[i]
//     }n
//     return result
// }
// console.log(mergetwostring('anjali','hara'))


// useReducer  count,toggle,todo,form,auth 


// 1️⃣ Client-Side Rendering (CSR) - The browser loads a minimal HTML file and uses JavaScript to render the UI on the client side.
// 2️⃣ Server-Side Rendering (SSR) - The server generates the complete HTML page and sends it to the browser before JavaScript runs.
// 3️⃣ React StrictMode - A development tool that checks for potential problems by running extra checks. (No effect in production.)
// 4️⃣ Error Boundaries - Special components that catch JavaScript errors in child components and show a fallback UI instead of breaking the app.
// 5️⃣ Code Splitting - Breaking the app into smaller chunks so only the needed code loads when required, improving performance.
// 6️⃣ Lazy Loading - Loading components or resources only when needed, instead of loading everything at once.
// 7️⃣ Pure Component - A component that re-renders only when props or state change (uses shallow comparison for optimization).
// An Impure Component is a component that re-renders even when its props and state have not changed, because it does not implement any optimization
// 1️⃣2️⃣ State Uplifting (Lifting State Up) - Moving state to the nearest common parent component so multiple child components can share and sync data.
// function solve(code, age) {
//   //write code here
//   if (code == 101 && age >= 18) {
//     console.log("Eligible to vote");
//   } else if (code == 101 && age <= 18) {
//     console.log("Not eligible to vote");
//   } else if (code == 102 && age >= 20) {
//     console.log("Eligible to vote");
//   } else if (code == 102 && age <= 20) {
//     console.log("Not eligible to vote");
//   } else if (code == 103 && age >= 21) {
//     console.log("Eligible to vote");
//   } else if (code == 103 && age <= 21) {
//     console.log("Not eligible to vote");
//   }
// }
// unction decodeMessage(string) {
//     //write code here
//     let maxLength = 1
//     let currentLength =1
//     for(let i=1;i<string.length;i++){
//       if(string[i] === string[i-1]){
//         currentLength ++
//         if(currentLength > maxLength){
//           maxLength = currentLength
//         }
//       }
//       else {
//         currentLength =1;
//       }
//     }
//     console.log(maxLength)
// }function magicWords(word1,word2){
//   let merged = ""
//   let i = 0
//   let j = 0
//   const len1 = word1.length
//   const len2 = word2.length
  
//   while(i<len1 || j<len2){
//     if(i<len1){
//       merged += word1[i]
//       i++
//     }
//     if(j<len2){
//       merged +=word2[j]
//       j++
//     }
//   }
//   return merged
// }
// function runProgram(input) {
//   // Write code here
//   input = input.trim().split("\n")
//   let word1 = input[0]
//   let word2 = input[1]
//   console.log(magicWords(word1,word2))
// }
// if (process.env.USER === "") {
//   runProgram(``);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }
// function isValid(seq){
//   let balance =0
//   for(let ch of seq){
//     if(ch ==='(')
//     balance ++
//     else balance --
//     if(balance<0) 
//     return false
//   }
//   return balance == 0
// }
// function parenPuzzle(s,index,current,resultSet){
//   if(index ==s.length){
//   if(current.length > 0 && isValid(current)){
//     resultSet.add(current)
//   }
//   return
// }
// parenPuzzle(s,index+1,current+s[index],resultSet)
// parenPuzzle(s,index+1,current, resultSet)
// }
// function solve(str){
//   // write your code here
//   const resultSet = new Set()
//   parenPuzzle(str,0,'',resultSet)
//   console.log(resultSet.size)
// }


