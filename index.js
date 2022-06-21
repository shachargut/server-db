require("dotenv").config()

const express = require('express'),
    app = express(),
    PORT = process.env.PORT =3001;

    

const router = require('./Routs')
app.use(express.json()) 
app.use(require('cors')())

// function loger (req,res,next){
//     const token = req.body.token
//     //validate
//     console.log("log");
//     next()}

// app.use(loger)
app.use("/api",router)

app.listen(PORT, () => console.log(`server is running => ${PORT}`))
require('./DataAcsesLayer/db').connect();
