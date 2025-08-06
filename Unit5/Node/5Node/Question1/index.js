// npm install express express-rate-limit
// index.js
const express = require('express');
const rateLimit = require('express-rate-limit');
const apiRouter = require('./routes/api');

const app = express();
const PORT = 3000;


const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5, 
  message: { error: "Too many requests, please try again later." }
});


app.use('/api', apiRouter(limiter)); 
app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
