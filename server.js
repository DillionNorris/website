
const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
const startMongo = require("./db");
const User = require("./user");
const upload = multer({ dest: __dirname + "/public/images" });


const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//app.use(bodyParser.json);

startMongo();

//!----------------------------------------------------------------
//! LOAD PAGES


app.get("/", (req, res) => {
 // res.sendFile(__dirname + "/home.html");
 console.log("loading page");
 res.sendFile(__dirname + "/index.html");
});

//sever start
app.listen(3000, () => {
  console.log("listening on port 3000...");
});







//!----------------------------------------------------------------
// !SIGN UP USER
//!----------------------------------------------------------------



app.post("/api/signup", async (req, res) => {
  let result = validateNewUser(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
  }

  const user = await User.findOne({ username: req.body.username });

  // find duplicate
  if (user) {
    res.status(400).send("Error: Duplicate user");
    return;
  }

  user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = await bcrypt.genStalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();
  res.send("Succsess!");
});

const validateNewUser = (user) => {
  const schema = Joi.object({
    username: Joi.String().required(),
    email: Joi.String().email().required(),
    password: Joi.String.required(),
  });
  return schema.validate(user);
};

//!----------------------------------------------------------------
// !LOG IN USER
// !----------------------------------------------------------------
app.post("/api/login", async (req, res) => {
  let result = validateLoginUser(req.body);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }


let user = await User.findOne({username: req.body.username})

if (!user) {
  return res.status(400).send("User not found");
  re
}
const isMatch = await bcrypt.compare(req.body.password,user.password);

if (!isMatch) {
  res.status(400).send("incorrect password");
}
res.send("success");


});



const validateLoginUser = (user) => {
  const schema = Joi.object({
    username: Joi.String().required(),
    password: Joi.String.required(),
  });
  return schema.validate(user);
};

//!----------------------------------------------------------------
//! CONNECTION TO MONGO DB
//!----------------------------------------------------------------
/*
mongoose.connect("mongob://localhost/db")
.then(()=>console.log("connedted to db"))
.catch(error => console.log("couldnt connect",error));
*/


//!----------------------------------------------------------------
//! ARTICAL ADD AND DELETE
//!----------------------------------------------------------------

//*validate 
const articleSchema = new mongoose.Schema({
author: String,
sample:String,
url:String,
});


const Article = mongoose.model("Article", articleSchema);


createArticle = async()=>{
  const article = new Article({
    author : article.body.author,
    sample : article.body.sample,
    url: article.body.url,
  });
  article.save();
}
// get articles


/*
app.get("/api/articles", (req, res) => {
  getArticles(res);
});
const getArticles = async (res) => {
  const article = await Team.find();
  res.send(teams);
};

*/









//!----------------------------------------------------------------
//!  COMMITMENT NEWS ADD AND DELETE
//!----------------------------------------------------------------








//!----------------------------------------------------------------
//! ROSTER ADD AND DELETE
//!----------------------------------------------------------------



