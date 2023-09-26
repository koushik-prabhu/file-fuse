const express = require('express')
const app = express()


app.post('/user',(req, res) => {
    console.log(req)
    res.json('Got it Client')
})

app.listen(5000)
