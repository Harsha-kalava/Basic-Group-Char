const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/',(req,res)=>{ 
    fs.readFile('hello.txt',(err,data)=>{
        if(err){
            console.log(err)
            data = 'No data exists'
        }
        res.send(`${data}<br><form onsubmit="document.getElementById('usernamed').value = localStorage.getItem('usernamed')", action="/" method="POST">
    <input id="message" type="text" placeholder="message" name="message"><br>
    <input id="usernamed" type="hidden" name="userNamed">
    <button type="submit">send</button></form>`) })       
    })

    router.post('/',(req,res)=>{
    console.log(`name - ${req.body.userName}`)   
    console.log(`message - ${req.body.message}`)
    fs.writeFile('hello.txt',`${req.body.userNamed}:${req.body.message} `,{flag:'a'},(err)=>{
        if(err){console.log(err)}
    })
    res.redirect('/')  
})

module.exports = router