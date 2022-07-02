require('dotenv').config()

const express = require('express');
const app = express()
const router = require('./app/router')
const session = require('express-session');

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.static("./public"));

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: false,
  })
)

app.use((req,res,next)=>{
  if(req.session.user){
      res.locals.user = req.session.user
  }
  next()
})

app.use(router);

app.use((req,res)=>{
  res.status(404).render('404');
})

app.listen(process.env.PORT, () =>{
  console.log(`http://localhost:${process.env.PORT}`)
})