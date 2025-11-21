const express = require('express');
const session = require('express-session');

const app = express();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
 res.send('Hello, Express.js!');
});

app.use(
    session({
        secret:"mysecret",
        resave:false,
        saveUninitialized:true,
    }))


app.get("/recount",(req , res) =>{
    if( req.session.count){
        req.session.count++;
    } else {    
    req.session.count = 1;
   }
    res.send(`Session Count Initialized ${req.session.count}`);
})

app.get("/test",(req , res) =>{
    res.send("Test Sucessful");
})

