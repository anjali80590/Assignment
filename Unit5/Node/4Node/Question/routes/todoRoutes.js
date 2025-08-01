// expres.router it helps to create routes in separate files to keep the code clean 

// ✅ express.json()
// Parses incoming JSON data and converts it into a JavaScript object.
// ➡️ For APIs sending Content-Type: application/json.

// ✅ express.urlencoded({ extended: true })
// Parses incoming form data (from HTML forms) and converts it into a JavaScript object.
// ➡️ For Content-Type: application/x-www-form-urlencoded (default in HTML forms).


// req body 
// The request body is the part of an HTTP request that carries data sent by the client to the server, usually during POST, PUT, or PATCH requests.

// In Express.js, you can access this data using req.body, after parsing it with middleware like express.json() or express.urlencoded().


// req.params 
// Used to access route paramter or url paramter from url path 
// used to get sepcific id 
// /user/:id 

// req.query used to access query paramter from the url after ? used for search filter sort values


// Middleware
// Definition: Functions that execute during the request–response cycle.
// Use: Authentication, logging, error handling, etc.

// Error handling middleware
// Special middleware with 4 parameters: (err, req, res, next)

// . Status Codes & Response Methods
// res.status(200).json({})
// res.send(), res.json(), res.redirect()

// static files serves images css html 
// app.use(express.static("public"));

// // route chaining 
// app.route("/user").get(getUser).post(createUser).put(updateUser);

// request lifecucle request middleware route response

// app is the main express application 
// router is a module mini app for organsing routes 





// routes 
// let express=require('expess');
// let router=express.Router();
// let{getDelete,addDdleet}=require('../')
// router.get('/',getdelete);
// router.post('/add',add);


// model 
// let fs = require("fs");
// let path = require("path");

// let db = path.join(__dirname ,"db.json");

// let readFile = () => JSON.parse(fs.readFileSync(db, "utf-8"));

// let writeFile = (data) => fs.writeFileSync(db, JSON.stringify(data));
// module.exports = { readFile, writeFile };



let express=require('express');
let bodyParser=require('body-parser')
let Routes=require('./ModleRoutes')
let app=express();

app.use(bodyParser.json());
app.use("/routes", Routes);
app.use((req,res)=>{
    res.json({message:"not found"})
})



app.listen('1000',()=>{
    console.log('http://localhost:1000');
})








