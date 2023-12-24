const express = require('express');
const auth    = require('./routes/auth.js');

const port    = 3000;
const app     = express();

app.get('/', (req, res)=>{
    res.send('Hellow');
})

app.use('/auth', auth);

app.listen (port,()=>{
    console.log(`The app is listening to the port ${port}`)
})
