const express = require('express'),
    app = express(),
    PORT = 3002;

const router = require('./Routs')
app.use(express.json()) 
app.use(require('cors')())
app.get("/",(req,res)=>{res.send("Hello World")})
app.use("/api",router)

app.listen(PORT, () => console.log(`server is running => ${PORT}`))
require('./DataAcsesLayer/db').connect();
