function greetUser(){
let name=promp('enter the name');
if(!name){
name="Guest"
console.log("hello Guest!");}
else{
console.log(" hello " + name);
}}