let express=require('express');

let app=express();

app.get('/home',(req,res)=>{
    res.send('<h1>Welcome to home page </h1>')
})

app.get('/aboutus',(req,res)=>{
    res.json({message:'welcome to about us'})
})

app.get('contactus',(req,res)=>{
    res.json({email:"me@gmail.com",phone:'1231314'})
})

app.use((req,res)=>{
    res.status(404).send("page not found")
})

app.listen(1000,()=>{
    console.log('http://localhost:1000');
})
