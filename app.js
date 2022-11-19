const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
const login = require('./routes/login')
const message = require('./routes/message')

app.use(bodyParser.urlencoded({extended:false}))
app.use(message)
app.use(login)


app.use((req,res)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000)

