const express=require('express')
let app=express();

app.get('/',(req,res)=>{
    res.send('This is home page')
    
})

app.get('/contactUs',(req,res)=>{
    res.send('contact us at contact@contact.com')
})

app.listen(3000,()=>{
    console.log('http://localhost:3000')
})