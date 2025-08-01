let express=require('express');
let app=express();

app.get('/',(req,res)=>{
    res.status(200).send('welcome');
})


let users = [
  
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
    { id: 3, name: "Bob Smith", email: "bob@example.com" },
  
];
app.get("/users/get", (req, res) => {
  res.status(200).json(users[0]);
});
app.get('/users/list',(req,res)=>{
    res.status(200).json(users)
})
app.use((req,res)=>{
    res.status(404).send({message:"page not found"})
})
app.listen(2000,()=>{
console.log('http://localhost:2000')
})