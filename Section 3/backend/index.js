//import express
const express = require('express');                                 //backend me import karne k liye ye syntax use krte hain

//initialize express
const app = express();
const port = 5000;

app.get('/' , (req, res) => {
    res.send('response from express');
});

app.listen(port, () => {
    console.log('express server started');
});