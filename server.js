const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))


app.get("/",(req,res)=>{
    res.sendFile("./pages/index.html",{root: __dirname});
});

app.listen(port,err =>{
    if (err) {
        console.error(err)        
    } else {        
        console.log('http://localhost:'+port)
    }
})


module.exports = app;