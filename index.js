const express = require('express');
const env = require('dotenv').config();
const app = express();
const port = process.env.PORT


app.get('/', (req, res) => {
    res.send('Homepage');
})

app.listen(port, () =>{console.log(`port is running on ${port}`)})

