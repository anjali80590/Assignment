let boxen=require('boxen');
let message='hurry\nI am using my first module'
let box=boxen(message,{
    padding:1,
    margin:1,
    borderStyle:'double',
    align:'center'
})
console.log(box);



