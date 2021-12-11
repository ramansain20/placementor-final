require('dotenv').config();
const express = require("express");
const bodyparser = require("body-parser");
const placement = require("./routes/placement");
const internship = require("./routes/internship");
const authrouter = require("./routes/authroute");
const app = express();
const connectDB = require("./config/db");
const cookieParser= require("cookie-parser");
connectDB();
app.use(express.static('public'));


// Body-parser middleware
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use(internship);
app.use(placement);
app.use(authrouter);
app.use(cookieParser);
//cookies
app.get('/set-cookies',(req,res)=>{
  // res.setHeader('set-cookie','newAdmin=true');
  res.cookie('newAdmin',false);
  res.cookie('isAdmin',true,{maxAge:1000*60*60*24,httpOnly:true});
  res.send('you got the cookies');
})
app.get('/read-cookies',(req,res)=>{
res.json(res.cookie);
})


app.listen(process.env.PORT || 3000, () =>
  console.log(`server started at ${process.env.PORT || 3000}`)
);
