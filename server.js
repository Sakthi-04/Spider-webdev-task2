//jshint
const express = require("express");
const mongoose = require("mongoose")
const User = require("./models/user.js")
const app=express();

mongoose.connect("mongodb+srv://sakthi:dTQMWAFdpgQlHdt2@secretsanta.zswpadw.mongodb.net/?retryWrites=true&w=majority",function(){
  console.log("DB connected")
})

app.listen(3000,function(){
  console.log("Server running")
})

app.get("/",function(req,res){
  res.send("Server is running")
})

app.get("/test",function(req,res){
  const user = new User({
    username:"johndoe",
    password:"johndoe"
  })
  user.save().then(function(x){
    res.send(x)
  }).catch(function(err){
    console.log(err)
  })
})

app.get("/get-users",function(req,res){
  User.find().then(function(user){
    res.send(user)
  })
})
app.post("/names",function(req,res){
  const user = new User({
    username:"library",
    email:"library@gmail.com",
    password:"books"
  })
  user.save().then(function(x){
    console.log(x);
    res.send(user)
  })
})
app.get("/names",function(req,res){
  User.find().then(function(user){
    res.send(user)
  })
})

// app.get("/", function(request, response){
//   response.send("Hello");
// });
// app.get("/contact", function(request, response){
//   response.send("MY Contact is this...plx call me");
// });
// app.get("/about", function(request, response){              //about represents the route from the main local page
//   response.send("loreum epsum is a bad ass tool of writing");
// });
// app.listen(3000, function(){
//   console.log("MY server has started at 3000");
// });
