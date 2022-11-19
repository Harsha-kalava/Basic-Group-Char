const express = require('express')
const router = express.Router()

router.get('/login',(req,res)=>{
    res.send(`<form onsubmit="localStorage.setItem('usernamed', document.getElementById('username').value)" action="/" method="POST">
     <input id="username" type="text" placeholder="username" name="userName">
     <input id="usernamed" type="hidden" placeholder="username" name="userNamed">
     <input id="message" type="hidden" placeholder="message" name="message">    
     <button type="submit">Login</button></form>`) })

module.exports = router