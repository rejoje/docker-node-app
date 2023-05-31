const express = require('express');

const PORT = 9000;

const app = express();
app.get('/',(req,res) =>{
    res.send("hddddddello");
})

app.listen(PORT);