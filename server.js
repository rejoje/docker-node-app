const express = require('express');

const PORT = 9000;

const app = express();
app.get('/',(req,res) =>{
    res.send("배포테스틉ㅂㅂㅂ");
})

app.listen(PORT);