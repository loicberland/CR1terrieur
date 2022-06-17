require('dotenv').config()

const express = require('express');
const app = express()
const router = require('./app/router')

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.static("./public"));

app.use(router);

app.use((req,res)=>{
  res.status(404).render('404');
})

app.listen(process.env.PORT, () =>{
  console.log(`http://localhost:${process.env.PORT}`)
})